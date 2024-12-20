import { useMemo } from 'react';
import { Layout, Row, Col, Menu, message } from 'antd';
import { useAccount, useWatchAsset } from 'wagmi'
import styles from './HomeBanner.module.scss'
import { IconC2n } from '@/components/icons';
import { useWriteAirdropWithdrawTokens } from '@/abis/generated';
import { appConfig } from '@/config/index';
import { getWagmiAddress } from '@/utilities/wagmi/getWagmiAddress'

export default function Header() {
  const {
    chain,
    address
  } = useAccount();

  const tokenInfo = appConfig.c2nToken;
  const { watchAsset } = useWatchAsset();
  const { writeContractAsync } = useWriteAirdropWithdrawTokens();
  async function addToken() {
    if (!chain) {
      message.error('connect wallet and try again !')
      return
    }

    watchAsset({
      type: "ERC20",
      options: {
        address: tokenInfo.address!, // The address that the token is at.
        symbol: tokenInfo.symbol, // A ticker symbol or shorthand, up to 5 chars.
        decimals: 18, // The number of decimals in the token
        image: '',
      }
    })
  }
  const handleClaim = async () => {
    try {
      // Define the contract
      const res = await writeContractAsync({
        address: getWagmiAddress(appConfig.airpDrop.address!),
        args: []
      })
      console.log(res)
    } catch (error: any) {
      message.error(error.reason || error?.data?.message || error?.message || 'claim failed')
    }
  }

  return <div className={styles['home-banner']}>
    <Row justify="space-between" align="middle" className={styles['main']}>
      <Col span={16}>
        <Row gutter={16}>
          <Col span={4}>
            <Row justify="center" align="middle">
              <IconC2n className={styles.icon} />
            </Row>
          </Col>
          <Col span={20}>
            <Row>
              <Col span={24} className={styles['text1']}>
                {tokenInfo.symbol} Tokens Online Now!
              </Col>
              <Col className={styles['text2']}>
                Contract Address: &nbsp;
                {tokenInfo.address}
                &nbsp;
                {/* <CopyOutlined className={styles['copy']} onClick={()=>{copy(token.address)}}></CopyOutlined> */}
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={4}>
        <div className={styles['button']}
          onClick={handleClaim}
        >
          Claim {tokenInfo.symbol}
        </div>
      </Col>
      <Col span={4}>
        <div className={styles['button']}
          onClick={() => {
            addToken()
          }}
        >
          Add {tokenInfo.symbol} to Wallet
        </div>
      </Col>
    </Row>
  </div>
}
