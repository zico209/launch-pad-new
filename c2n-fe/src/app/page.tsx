'use client'
import styles from './page.module.css'
import { Row, Col } from 'antd';
import type { AppProps } from 'next/app'
import Link from 'next/link'
import HomeBanner from '@/containers/HomeBanner/HomeBanner'

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <main className={styles.main}>
      <section>
        <HomeBanner></HomeBanner>
        <div>
          <Row>
            <Col span={18}>
              <h1>
                C2N: Fundraising platform
                <br />
                on Sepolia
              </h1>
              <div>
                C2N is the first exclusive launchpad for decentralized fundraising
                <br />
                offering the hottest and innovative projects in
                <br />
                a fair, secure, and efficient way.
              </div>
              <Link href="/stake" passHref>
                <div>Stake</div>
              </Link>
            </Col>
            <Col span={6}>
              {
                <div></div>
              }
            </Col>
          </Row>
        </div>
      </section>
    </main>
  )
}
