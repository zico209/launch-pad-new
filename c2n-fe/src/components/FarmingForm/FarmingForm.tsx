import { useEffect, useState, useMemo, useRef } from "react";
import {
  InputNumber,
  Row,
  Col,
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
import { getWagmiAddress } from "@/utilities/wagmi/getWagmiAddress";
import { appConfig } from "@/config";

type FarmingFormProps = {
  poolId: number;
};

export default function FarmingForm(props: FarmingFormProps) {
  const { chain } = useAccount();
  const {
    depositTokenBalance,
    farmingDepositedAmount,
    poolInfo,
    depositTokenSymbol,
    getPoolInfo,
  } = useFarmingForm();
  const [formVisible, setFormVisible] = useState<boolean>(false);
  let poolInfoTimer: any = null;
  const [priceInLP, setPriceInLP] = useState<any>(null);

  const depositSymbol = `F${depositTokenSymbol}`;
  const earnedSymbol = "C2N";

  const [messageApi, contextHolder] = message.useMessage();

  const isDesktopOrLaptop = true;

  // TODO: modify pool id
  const poolId = props.poolId;

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

  return (
    <div>
      <div className={styles["farming-card"]}>
        {/* Disable in wrong network */}

        <section className={styles["container"]}>
          <Row
            className={styles["container-title"]}
            align="middle"
            justify="start"
          >
            {/* TODO: FIXME */}
            &nbsp; &nbsp;
            {chain.name}/{chain.nativeCurrency.symbol}
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
                {depositTokenBalance === null ? <Spin /> : depositTokenBalance}{" "}
                {depositSymbol}
              </Col>
            </Row>
          </div>
          <Row></Row>
          <Row className={styles["record"]} justify="space-between">
            <Col className={styles["record-label"]}>Rewards</Col>
            <Col className={styles["record-value"]}>
              &nbsp;
              <span
                onClick={() => {
                  setFormVisible(true);
                }}
                className={styles["link"]}
                style={{ background: "#DEDEDE", color: "#707070" }}
              >
                Claim
              </span>
            </Col>
          </Row>
          <Row className={styles["record"]} justify="space-between">
            <Col className={styles["record-value"]}>
              <span
                onClick={() => {
                  Router.push("/");
                }}
                className={styles["link"]}
                style={{ background: "#D9EE77" }}
              >
                GET {depositSymbol}
              </span>
            </Col>
          </Row>
        </section>
      </div>
    </div>
  );
}
