import { useEffect, useState, useMemo, useRef } from "react";
import {
  InputNumber,
  Row,
  Col,
  Button,
  Carousel,
  Divider,
  Tabs,
  Modal,
  Spin,
} from "antd";
import Router from "next/router";
import { useAccount, useReadContract } from "wagmi";
import { message } from "antd";
import styles from "./FarmingForm.module.scss";
import { useFarmingForm } from "./useFarmingForm";
import { FarmingStakeModal } from "./components/StakeModal";
import { formatEther } from "ethers";
import {
  useReadFarmingC2NPending,
  useWriteFarmingC2NWithdraw,
} from "@/abis/generated";
import { useAddresses } from "@/hooks/useAddresses";
type FarmingFormProps = {
  poolId: number;
};

export default function FarmingForm(props: FarmingFormProps) {
  const { chain, address } = useAccount();
  const {
    depositTokenBalance,
    farmingDepositedAmount,
    poolInfo,
    depositTokenSymbol,
    getPoolInfo,
    refetchDynamicalData,
  } = useFarmingForm();
  const { farmingAddress } = useAddresses();

  const { data: dataOfReadFarmingC2NPending } = useReadFarmingC2NPending({
    address: farmingAddress,
    args: props.poolId != null ? [BigInt(props.poolId), address!] : undefined,
    query: { enabled: props.poolId != null },
  });

  const pendingRewards = useMemo(() => {
    if (dataOfReadFarmingC2NPending == null) return;
    return Number(formatEther(dataOfReadFarmingC2NPending));
  }, [dataOfReadFarmingC2NPending]);

  let poolInfoTimer: any = null;
  const [farmingStakeModalOpen, setFarmingStakeModalOpen] =
    useState<boolean>(false);
  const depositSymbol = `F${depositTokenSymbol}`;
  const earnedSymbol = "C2N";
  const [messageApi, contextHolder] = message.useMessage();

  const isDesktopOrLaptop = true;

  const { writeContractAsync: withdraw } = useWriteFarmingC2NWithdraw();

  useEffect(() => {
    clearInterval(poolInfoTimer);

    const schedule = () => {
      getPoolInfo(props.poolId);
    };

    schedule();
    poolInfoTimer = setInterval(() => schedule, 20000);

    return () => {
      clearInterval(poolInfoTimer);
    };
  }, [chain]);

  const onClaim = async () => {
    if (props.poolId == null) return;
    await withdraw({
      address: farmingAddress,
      args: [BigInt(props.poolId), BigInt(0)],
    });
  };

  return (
    <div>
      <FarmingStakeModal
        depositTokenAddress={poolInfo?.lpToken!}
        isOpen={farmingStakeModalOpen}
        depositSymbol={depositSymbol}
        depositTokenBalance={depositTokenBalance}
        poolId={props.poolId}
        onCancel={() => {
          setFarmingStakeModalOpen(false);
        }}
        onSubmitted={async () => {
          setFarmingStakeModalOpen(false);
          await refetchDynamicalData();
        }}
      ></FarmingStakeModal>
      <div className={styles["farming-card"]}>
        <section className={styles["container"]}>
          <Row
            className={styles["container-title"]}
            align="middle"
            justify="start"
          >
            &nbsp; &nbsp;
            {chain?.name}/{chain?.nativeCurrency.symbol}
          </Row>
          <Divider style={{ margin: "0" }}></Divider>

          <div className={styles["records"]}>
            <Row className={styles["record"]} justify="space-between">
              <Col className={styles["record-label"]}>Earned</Col>
              <Col className={styles["record-value"]}>{earnedSymbol}</Col>
            </Row>
            <Row className={styles["record"]} justify="space-between">
              <Col className={styles["record-label"]}>Total staked</Col>
              <Col className={styles["record-value"]}>
                {poolInfo === null ? <Spin /> : poolInfo?.totalDeposits}{" "}
                {depositSymbol}
              </Col>
            </Row>
            <Row className={styles["record"]} justify="space-between">
              <Col className={styles["record-label"]}>My staked</Col>
              <Col className={styles["record-value"]}>
                {farmingDepositedAmount === null ? (
                  <Spin />
                ) : (
                  farmingDepositedAmount
                )}{" "}
                {depositSymbol}
              </Col>
            </Row>
            <Row className={styles["record"]} justify="space-between">
              <Col className={styles["record-label"]}>Available</Col>
              <Col className={styles["record-value"]}>
                {depositTokenBalance == null ? (
                  <Spin />
                ) : (
                  formatEther(depositTokenBalance!)
                )}{" "}
                {depositSymbol}
              </Col>
            </Row>
          </div>
          <Row>
            <Button
              type="primary"
              block
              onClick={() => {
                setFarmingStakeModalOpen(true);
              }}
            >
              Stake
            </Button>
          </Row>
          <Row className={styles["record"]} justify="space-between">
            <Col className={styles["record-label"]}>Rewards</Col>
            <Col className={styles["record-label"]}>{pendingRewards}</Col>
          </Row>
          <Row className={styles["record"]} justify="space-between">
            <Col className={styles["record-value"]}>
              &nbsp;
              <span
                onClick={onClaim}
                className={styles["link"]}
                style={{ background: "#DEDEDE", color: "#707070" }}
              >
                Claim
              </span>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
}
