'use client'
import styles from './page.module.scss'
import { Row, Col } from 'antd';
import type { AppProps } from 'next/app'
import Link from 'next/link'
import HomeBanner from '@/components/HomeBanner/HomeBanner'

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <main style={{ display: 'flex', justifyContent: 'center', color: 'white' }}>
      <section style={{ width: '50vw', paddingTop: '2rem' }}>
        <HomeBanner></HomeBanner>
        <div style={{ paddingBottom: '3em' }}>
          <Row>
            <Col span={18}>
              <h1 style={{ fontSize: '3rem', fontWeight: '400' }}>
                C2N: Fundraising platform
                <br />
                on Sepolia
              </h1>
              <div style={{ fontSize: '1.4rem', fontWeight: '300', color: '#ffffff', padding: '1em 0em' }}>
                C2N is the first exclusive launchpad for decentralized fundraising
                <br />
                offering the hottest and innovative projects in
                <br />
                a fair, secure, and efficient way.
              </div>
              <Link href="/stake" passHref>
                <div className={styles.button}>Stake</div>
              </Link>
            </Col>
          </Row>
        </div>
      </section>
    </main>
  )
}
