import { useEffect, useState, useMemo, useRef } from "react";
import { InputNumber, Row, Col, Carousel, Divider, Tabs, Modal, Spin } from "antd";
const { TabPane } = Tabs;
import Router from 'next/router'
import TransactionButton from "@src/components/elements/TransactionButton";
import { formatEther, parseEther, seperateNumWithComma, formatNumber } from "@src/util/index";
import { useStake } from '@src/hooks/useStake'
import { message } from 'antd'
import styles from './FarmingForm.module.scss';
import { useErrorHandler } from "@src/hooks/useErrorHandler";
import AppPopover from "@src/components/elements/AppPopover";

type FarmingFormProps = {
  chainId: number,
  depositTokenAddress: string,
  earnedTokenAddress: string,
  stakingAddress: string,
  poolId: number,
  available: boolean,
  depositSymbol: string,
  earnedSymbol: string,
  title: string,
  depositLogo: string,
  earnedLogo: string,
  getLptHref: string,
  aprRate: string,
  aprUrl: string
}

export default function FarmingForm(props: FarmingFormProps) {

  const [depositNum, setDepositNum] = useState<number>();
  const [withdrawNum, setWithdrawNum] = useState<number>();
  const [poolInfo, setPoolInfo] = useState<any>(null);
  const [formVisible, setFormVisible] = useState<boolean>(false);
  let poolInfoTimer: any = null;
  const [apr, setApr] = useState<any>('**');
  const [priceInLP, setPriceInLP] = useState<any>(null);

  const {
    depositedAmount,
    earnedBre,
    totalPending,
    balance,
    approve,
    deposit,
    withdraw,
    updateBalanceInfo,
    stakingContract,
    viewStakingContract,
    setDepositTokenAddress,
    setStakingAddress,
    setAllowanceAddress,
    setPoolId,
  } = useStake();

  const depositSymbol = props.depositSymbol;
  const earnedSymbol = props.earnedSymbol;

  const [messageApi, contextHolder] = message.useMessage()

  const isDesktopOrLaptop = true;

  // TODO: modify pool id
  const poolId = props.poolId;


  const {
    signer,
    chain,
    switchNetwork,
  } = useWallet();

  useEffect(() => {
    setPoolId(props.poolId);
  }, []);

  useEffect(() => {
    if (!stakingContract) {
      clearInterval(poolInfoTimer);
      return;
    }
    clearInterval(poolInfoTimer);
    /**
     * 获取farm池子信息
     */
    const schedule = () => {
      getPoolInfo(poolId);
      getRewardPerSecond();
      updateBalanceInfo();

      // getApR();
    }

    schedule();
    poolInfoTimer = setInterval(() => schedule, 20000);

    return () => {
      clearInterval(poolInfoTimer);
    }
  }, [stakingContract])

  const totalDeposits = useMemo(() => {
    if (poolInfo) {
      return poolInfo.totalDeposits || 0;
    } else {
      return 0;
    }
  }, [poolInfo])

  const isChainAvailable = useMemo(() => {
    return chain?.chainId == props.chainId;
  }, [chain])

  useEffect(() => {
    if (isChainAvailable) {
      setDepositTokenAddress(props.depositTokenAddress);
    } else {
      clearInterval(poolInfoTimer);
    }
  }, [isChainAvailable, chain]);

  useEffect(() => {
    updateContracts();
  }, [signer, chain])


  /**
   * update staking contracts according to signer/chain
   */
  function updateContracts() {
    if (chain?.chainId != props.chainId || !signer) {
      // clear contracts
      setStakingAddress('');
      setAllowanceAddress('');
      return;
    }
    if (props.stakingAddress) {
      setStakingAddress(props.stakingAddress);
      setAllowanceAddress(props.stakingAddress);
    }
  }

  async function getPoolInfo(poolId) {
    if (!viewStakingContract) {
      return Promise.reject();
    }
    const options = {};
    try {
      const ret =
        viewStakingContract.poolInfo &&
        (await viewStakingContract.poolInfo(poolId));
      console.log(ret, 'ret')
      setPoolInfo(ret);
    } catch (e) {
      console.error(e);
    }
  }

  async function getRewardPerSecond() {
    if (!stakingContract) {
      return Promise.reject();
    }
    const options = {};
    try {
      const ret =
        viewStakingContract.rewardPerSecond &&
        (await viewStakingContract.rewardPerSecond());
    } catch (e) {
      console.error(e)
    }
  }


  /**
   * on stake button click
   */
  async function onStakeButtonClick() {
    if (depositNum == 0) {
      return;
    }
    await updateBalanceInfo();
    if (depositNum && depositNum > formatEther(balance)) {
      messageApi.error(`Not enough ${depositSymbol} to stake!`);
      return;
    }
    return approve(props.stakingAddress, depositNum)
      .then((txHash) => {
        return deposit(poolId, depositNum)
          .then((transaction) => {
            return transaction.wait();
          })
          .then(() => {
            setStakeLoading(false)
            messageApi.success('Congratulations, you have successfully deposited ' + depositNum + ' ' + depositSymbol);
            setDepositNum(0);
            updateBalanceInfo();
          })
      })
      .catch((e) => {
        console.error(e);
        let msg = getErrorMessage(e);
        // FIXME: error of object cannot catch, hence handle string here.
        if (typeof e === 'string' && e.indexOf('ERC20: transfer amount exceeds allowance') > -1) {
          msg = 'Approve amount should be greater than staking amount!';
        }
        messageApi.error('Stake failed. ' + (msg || ''));
        updateBalanceInfo();
      })
  }

  function onWithdrawButtonClick() {
    return withdraw(poolId, withdrawNum)
      .then((transaction) => {
        return transaction.wait();
      })
      .then(() => {
        messageApi.success('Withdraw success!');
        setWithdrawNum(0);
        updateBalanceInfo();
      })
      .catch((e) => {
        console.error(e);
        let msg = getErrorMessage(e);
        messageApi.error('Withdraw failed. ' + (msg || ''));
      })
  }

  function onHarvestButtonClick() {
    return withdraw(poolId, 0)
      .then((transaction) => {
        return transaction.wait();
      })
      .then(() => {
        messageApi.success('Harvest success!');
        updateBalanceInfo();
      })
      .catch((e) => {
        console.error(e);
        let msg = getErrorMessage(e);
        messageApi.error('Harvest failed. ' + (msg || ''));
      })
  }

  const earnedBreInEther: number = formatEther(earnedBre);
  const depositedAmountInEther: number = formatEther(depositedAmount, 4)?.toFixed(4) || 0;

  function maxNumber(num) {
    return num > 0.01 ? num - 0.01 : num;
  }

  return (
    <div>
      {/* deposit form */}
      <Modal visible={formVisible} title={null} footer={null} onCancel={() => { setFormVisible(false) }}>
        <Tabs className={styles['modal']} type="card">
          {/* stake form */}
          <TabPane key="1" tab="Stake">
            <Row justify="space-between" gutter={[16, 16]}>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                <Row justify="space-between">
                  <div className="balance">
                    {
                      stakingContract ?
                        <>Balance: {formatEther(balance, 4)?.toFixed(4)} {depositSymbol}</>
                        : <>Balance: -</>
                    }
                  </div>
                  <div className={styles['max']} onClick={() => setDepositNum(maxNumber(formatEther(balance)))}>MAX</div>
                </Row>
              </Col>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                <div className={styles['input']}>
                  <InputNumber
                    className={styles['number']}
                    value={depositNum}
                    max={formatEther(balance, 4)}
                    step="0.0001"
                    onChange={value => setDepositNum(value > 0 ? value : '')}
                    stringMode
                    controls={false}
                    bordered={false}
                  />
                  <div className={styles['unit']}>{depositSymbol}</div>
                </div>
              </Col>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                {
                  props.available ?
                    (
                      <TransactionButton
                        className={styles['button']}
                        onClick={onStakeButtonClick}
                        loadingText="staking"
                        noConnectText={'Connect wallet to stake'}
                        requiredChainId={props.chainId}
                        switchNetworkText={'Switch network to stake'}
                        style={{ width: '100%' }}
                      >
                        Stake
                      </TransactionButton>)
                    : (
                      <AppPopover content={'Coming soon'} wrap={true}>
                        <TransactionButton
                          className={[styles['button'], styles['disabled']].join(' ')}
                          disabled={true}
                          onClick={() => { }}
                          requiredChainId={props.chainId}
                          switchNetworkText={'Switch network to stake'}
                          noConnectText={'Connect wallet to stake'}
                          style={{ width: '100%' }}
                        >
                          Stake
                        </TransactionButton>
                      </AppPopover>
                    )
                }
              </Col>
            </Row>
          </TabPane>
          {/* reward */}
          <TabPane key="2" tab="Claim">
            <Row gutter={[16, 16]}>
              <Col span={24}>
                <div style={{ textAlign: 'center', fontSize: '1.6em' }}>Reward</div>
              </Col>
              <Col span={24}>
                <div style={{ textAlign: 'center' }}>
                  {/* <img src={props.earnedLogo} style={{ borderRadius: '50%' }}></img> &nbsp; */}
                  <span style={{ fontSize: '1.2em' }}>{earnedBre === null ? <Spin /> : earnedBreInEther} {earnedSymbol}</span>
                </div>
              </Col>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                {
                  props.available ?
                    (<TransactionButton
                      className={styles['button']}
                      onClick={onHarvestButtonClick}
                      noConnectText={'Connect wallet to withdraw'}
                      style={{ width: '100%' }}
                      loadingText="claiming"
                    >
                      Claim
                    </TransactionButton>)
                    : (
                      <AppPopover content={'Coming soon'} wrap={true}>
                        <TransactionButton
                          className={[styles['button'], styles['disabled']].join(' ')}
                          disabled={true}
                          onClick={() => { }}
                          noConnectText={'Connect wallet to claim'}
                          style={{ width: '100%' }}
                        >
                          Claim
                        </TransactionButton>
                      </AppPopover>
                    )
                }
              </Col>
            </Row>
          </TabPane>
          {/* withdraw */}
          <TabPane key="3" tab="Unstake">
            <Row gutter={[16, 16]}>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                <Row justify="space-between">
                  {
                    stakingContract
                      ? <>
                        <div className="balance">Balance: {formatEther(depositedAmount, 4)?.toFixed(4)} {depositSymbol}</div>
                      </>
                      : <>
                        <div className="balance">Balance: -</div>
                      </>
                  }
                  <div className={styles['max']} onClick={() => setWithdrawNum(maxNumber(formatEther(depositedAmount, 4)))}>MAX</div>
                </Row>
              </Col>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                <div className={styles['input']}>
                  <InputNumber
                    className={styles['number']}
                    value={withdrawNum}
                    max={formatEther(depositedAmount, 4)}
                    step="0.0001"
                    onChange={value => setWithdrawNum(value > 0 ? value : '')}
                    stringMode
                    controls={false}
                    bordered={false}
                  />
                  <div className={styles['unit']}>{depositSymbol}</div>
                </div>
              </Col>
              <Col span={isDesktopOrLaptop ? 24 : 24}>
                {
                  props.available ?
                    (<TransactionButton
                      className={styles['button']}
                      onClick={onWithdrawButtonClick}
                      loadingText="withdrawing"
                      noConnectText={'Connect wallet to withdraw'}
                      style={{ width: '100%' }}
                    >
                      Unstake
                    </TransactionButton>)
                    : (
                      <AppPopover content={'Coming soon'} wrap={true}>
                        <TransactionButton
                          className={[styles['button'], styles['disabled']].join(' ')}
                          disabled={true}
                          onClick={() => { }}
                          noConnectText={'Connect wallet to unstake'}
                          style={{ width: '100%' }}
                        >
                          Unstake
                        </TransactionButton>
                      </AppPopover>
                    )
                }
              </Col>
            </Row>
          </TabPane>
        </Tabs>
      </Modal>
      <div className={styles['farming-card']}>
        {/* Disable in wrong network */}
        {
          isChainAvailable
            ? <></>
            : (<div className={styles['mask']} onClick={() => {
              switchNetwork(props.chainId)
            }}>
              <div className={styles['mask-text']}>
                {/* Switch Network to use this farm */}
              </div>
              {/* <BasicButton >
              Switch Network
            </BasicButton> */}
            </div>)
        }
        <section className={styles['container']}>
          <Row className={styles['container-title']} align="middle" justify="start">
            {/* TODO: FIXME */}
            &nbsp;
            &nbsp;
            {props.title}
          </Row>
          <Divider style={{ margin: '0' }}></Divider>
          <Row className={styles['apy']} justify="center">
            {/* TODO: FIXME */}
            {apr === null ? <Spin /> : <>{apr || '-'} %</>}
            {/* 6569.52 % */}
          </Row>
          <Row className={styles['apy-extra']} justify="center">
            APR
          </Row>
          <div className={styles['records']}>
            <Row className={styles['record']} justify="space-between">
              <Col className={styles['record-label']}>
                Earned
              </Col>
              <Col className={styles['record-value']}>
                {/* <img src={props.earnedLogo} style={{ width: '1.2em', height: '1.2em', borderRadius: '50%', verticalAlign: 'text-bottom', marginRight: '.2em' }}></img> */}
                {earnedSymbol}
              </Col>
            </Row>
            <Row className={styles['record']} justify="space-between">
              <Col className={styles['record-label']}>
                Total staked
              </Col>
              <Col className={styles['record-value']}>
                {poolInfo === null ? <Spin /> : seperateNumWithComma(formatEther(totalDeposits))} {depositSymbol}
              </Col>
            </Row>
            <Row className={styles['record']} justify="space-between">
              <Col className={styles['record-label']}>
                My staked
              </Col>
              <Col className={styles['record-value']}>
                {depositedAmount === null ? <Spin /> : depositedAmountInEther} {depositSymbol}
              </Col>
            </Row>
            <Row className={styles['record']} justify="space-between">
              <Col className={styles['record-label']}>
                Available
              </Col>
              <Col className={styles['record-value']}>
                {balance === null ? <Spin /> : (formatEther(balance, 4)?.toFixed(4) || 0)} {depositSymbol}
              </Col>
            </Row>
          </div>
          <Row>
            <TransactionButton
              className={styles['button']}
              onClick={() => setFormVisible(true)}
              noConnectText={'Connect wallet to stake'}
              style={{ width: '100%' }}
            >
              Stake
            </TransactionButton>
          </Row>
          <Row className={styles['record']} justify="space-between">
            <Col className={styles['record-label']}>
              Rewards
            </Col>
            <Col className={styles['record-value']}>
              {earnedBre === null ? <Spin /> : earnedBreInEther} {earnedSymbol} &nbsp;
              <span
                onClick={() => { props.available && setFormVisible(true) }}
                className={styles['link']}
                style={{ background: '#DEDEDE', color: '#707070' }}
              >
                Claim
              </span>
            </Col>
          </Row>
          <Row className={styles['record']} justify="space-between">
            <Col className={styles['record-label']}>
              {
                priceInLP ?
                  <>1 {props.title} ≈ $ {priceInLP}</>
                  : <>{props.title}</>
              }
            </Col>
            <Col className={styles['record-value']}>
              <span onClick={() => { Router.push('/') }}
                className={styles['link']}
                style={{ background: '#D9EE77' }}
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
