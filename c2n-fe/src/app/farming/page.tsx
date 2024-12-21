'use client'
import { Row, Col } from 'antd';
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { appConfig } from '@/config';
import styles from './page.module.scss'
import { QuestionCircleOutlined } from '@ant-design/icons';

export default function Page({ Component, pageProps }: AppProps) {
  const isDesktopOrLaptop = true;
  const farmConfigs = [{
    chainId: 1_337,
    depositTokenAddress: appConfig.c2nToken.address,
    earnedTokenAddress: appConfig.c2nToken.address,
    stakingAddress: appConfig.farming.address,
    poolId: 0,
    available: true,
    depositSymbol: "FC2N",
    earnedSymbol: "C2N",
    title: "Local/C2N FC2N",
    depositLogo:
      "https://bobabrewery.oss-ap-southeast-1.aliyuncs.com/bnb-logo.svg",
    earnedLogo:
      "https://bobabrewery.oss-ap-southeast-1.aliyuncs.com/Brewery32x32.png",
    getLptHref:
      "https://pancakeswap.finance/add/BNB/0x9eBBEB7f6b842377714EAdD987CaA4510205107A",
    aprRate: 3.15 / 20,
    aprUrl: "/boba/apr/bsc",
  },]
  return (
    <main style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
      <section style={{ width: '50vw', paddingTop: '2rem' }}>
        <section className={styles['intro'] + ' main-content'}>
          <h2 className={styles['stake-title']}>
            <Row justify="space-between">
              <Col>
                <span>Yield Farms</span>
              </Col>
              <Col>
                <span style={{ fontSize: '16px', verticalAlign: 'middle' }}>
                  <QuestionCircleOutlined style={{ fontSize: '36px', verticalAlign: 'middle', marginRight: '.2em' }}></QuestionCircleOutlined>
                  See Tutorial: &nbsp;
                  <span
                    className={styles['link']}
                    onClick={() => {
                    }}>{isDesktopOrLaptop ? 'C2N Farm Tutorial' : 'Tutorial'} </span>
                </span>
              </Col>
            </Row>
          </h2>
          <h3 className={styles['stake-subtitle']}>
            Yield Farms allow users to earn Reward token while supporting C2N by staking LP Tokens.
          </h3>
        </section>
        <section className={styles['staking']}>
          <div className="main-content">
            <Row gutter={32}>
              {
                farmConfigs.map((item, index) => {
                  return (
                    <Col span={isDesktopOrLaptop ? 8 : 24}
                      key={index}
                    >
                      {/* <FarmingForm
                        chainId={item.chainId}
                        depositTokenAddress={item.depositTokenAddress}
                        earnedTokenAddress={item.earnedTokenAddress}
                        stakingAddress={item.stakingAddress}
                        poolId={item.poolId}
                        available={item.available}
                        depositSymbol={item.depositSymbol}
                        earnedSymbol={item.earnedSymbol}
                        title={item.title}
                        depositLogo={item.depositLogo}
                        earnedLogo={item.earnedLogo}
                        getLptHref={item.getLptHref}
                        aprRate={item.aprRate}
                        aprUrl={item.aprUrl}
                      /> */}
                    </Col>
                  )
                })
              }
            </Row>
          </div>
        </section>
      </section>
    </main>
  )
}
