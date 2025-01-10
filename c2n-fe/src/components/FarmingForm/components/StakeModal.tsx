import {
  InputNumber,
  Row,
  Col,
  Button,
  Carousel,
  Divider,
  Modal,
  Spin,
} from "antd";
import { getTokenBalanceOf } from "@/utilities/contracts";
import { formatEther } from "ethers";
import { useMemo, useState } from "react";
import {
  useWriteErc20Approve,
  useWriteFarmingC2NDeposit,
} from "@/abis/generated";
import { getWagmiAddress } from "@/utilities/wagmi/getWagmiAddress";
import { useAccount, useChainId } from "wagmi";
import { useAddresses } from "@/hooks/useAddresses";
type FarmingStakeModalProps = {
  isOpen: boolean; // 控制 Modal 显示状态
  depositTokenBalance?: bigint;
  depositSymbol: string;
  depositTokenAddress: string;
  poolId: number;
  onCancel: () => void; // 关闭 Modal 的回调函数
  onSubmitted: () => Promise<void>;
};

export const FarmingStakeModal = (props: FarmingStakeModalProps) => {
  const isDesktopOrLaptop = true;
  const { address } = useAccount();
  const chainId = useChainId();
  const { farmingAddress } = useAddresses();
  const [depositNum, setDepositNum] = useState<number>();
  const formattedDepositTokenAddress = useMemo(() => {
    if (!props.depositTokenAddress) return;
    return getWagmiAddress(props.depositTokenAddress);
  }, [props.depositTokenAddress]);
  const formattedDepositTokenBalance = useMemo(() => {
    if (props.depositTokenBalance == null) return;
    return Number(formatEther(props.depositTokenBalance));
  }, [props.depositTokenBalance]);

  const { writeContractAsync: approve } = useWriteErc20Approve();
  const { writeContractAsync: deposit } = useWriteFarmingC2NDeposit();

  async function onStakeButtonClick() {
    if (depositNum == null || depositNum <= 0) {
      return;
    }

    const balance = await getTokenBalanceOf(
      formattedDepositTokenAddress!,
      address!,
      chainId
    );
    const formatBalance = Number(formatEther(balance));
    if (depositNum > formatBalance) {
      return;
    }

    const approveResult = await approve({
      address: formattedDepositTokenAddress!,
      args: [farmingAddress, BigInt(depositNum)],
    });
    console.log(approveResult);

    const depositResult = await deposit({
      address: farmingAddress,
      args: [BigInt(props.poolId), BigInt(depositNum)],
    });
    console.log(depositResult);
    await props.onSubmitted();
  }

  return (
    <Modal
      open={props.isOpen}
      title={null}
      footer={null}
      onCancel={props.onCancel}
    >
      <Row justify="space-between" gutter={[16, 16]}>
        <Col span={isDesktopOrLaptop ? 24 : 24}>
          <Row justify="space-between">
            <div>
              Balance: {formattedDepositTokenBalance} {props.depositSymbol}
            </div>
            <Button
              type="link"
              onClick={() => setDepositNum(formattedDepositTokenBalance)}
            >
              MAX
            </Button>
          </Row>
        </Col>
        <Col span={isDesktopOrLaptop ? 24 : 24}>
          <div>
            <InputNumber
              value={depositNum}
              max={formattedDepositTokenBalance}
              step="0.0001"
              onChange={(value) =>
                setDepositNum(value && value > 0 ? value : undefined)
              }
              stringMode
              controls={false}
            />
            <div>{props.depositSymbol}</div>
          </div>
        </Col>
        <Col span={isDesktopOrLaptop ? 24 : 24}>
          <Button type="primary" block onClick={onStakeButtonClick}>
            Confirm
          </Button>
        </Col>
      </Row>
    </Modal>
  );
};
