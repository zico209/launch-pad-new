import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'
import { Layout, Row, Col, Menu, Dropdown } from 'antd';
import { MenuOutlined } from '@ant-design/icons'

import WalletButton from '@/components/WalletButton/WalletButton';
import NetworkButton from '@/components/NetworkButton/NetworkButton';

import styles from './Header.module.scss'

import { IconAppLogo } from '@/components/icons'


const [showSider, setShowSider] = useState(false);

const { Header } = Layout;
const router = useRouter();

let activeTabIndex = useMemo(() => {
  return [
    '/',
    '/stake',
    '/farming',
    '/pools',
    '/project',
    '/bridge',
  ].indexOf(router.pathname)
}, [router])

const menu = (
  <Menu style={{ background: '#000000', border: '2px solid #FFB85280' }}>
    <div className={[styles['menu-item']].join(' ')}>
      <Link href="/">
        <div className={[styles.button, activeTabIndex == 0 ? styles['active'] : ''].join(' ')}>Home</div>
      </Link>
    </div>
    <div className={[styles['menu-item']].join(' ')}>
      <Link href="/farming">
        <div className={[styles.button, activeTabIndex == 2 ? styles['active'] : ''].join(' ')}>Farm</div>
      </Link>
    </div>
    <div className={[styles['menu-item']].join(' ')}>
      <Link href="/pools">
        <div className={[styles.button, activeTabIndex == 3 || activeTabIndex == 4 ? styles['active'] : ''].join(' ')}>Projects</div>
      </Link>
    </div>
    <div className={[styles['menu-item']].join(' ')}>
      <Link href="/stake">
        <div className={[styles.button, activeTabIndex == 1 ? styles['active'] : ''].join(' ')}>Staking</div>
      </Link>
    </div>
    <div className={[styles['menu-item']].join(' ')}>
      <WalletButton
        className={styles['wallet-button-mobile']}
        style={{ background: 'none', 'boxShadow': 'none' }}
      ></WalletButton>
    </div>
  </Menu>
)

return <Header className={styles.header}>
  <Row className="main-content">
    <Col span={6}>
      {/* logo */}
      <Link href="/">
        <div className={styles['logo']} style={{ cursor: 'pointer' }}>
          <h1 className={"Boba title app-name " + styles.title}>
            {/* <i className={['icon', styles['logo-icon']].join(' ')}></i> */}
            <span className={styles.logo}></span>
            {/* <IconAppLogo className={['icon', styles['logo-icon']].join(' ')} /> */}
            {/* <span className={styles['app-name']}>C2N</span> */}
          </h1>
        </div>
      </Link>
    </Col>
    <Col span={isDesktopOrLaptop ? 18 : 4} offset={isDesktopOrLaptop ? 0 : 14}>
      {
        (
          <Row className={styles.menu} key="desktop" justify="space-between" align="middle">
            <Link href="/">
              <div className={[styles.button, activeTabIndex == 0 ? styles['active'] : ''].join(' ')}>Home</div>
            </Link>
            <Link href="/farming">
              <div className={[styles.button, activeTabIndex == 2 ? styles['active'] : ''].join(' ')}>Farm</div>
            </Link>
            <Link href="/pools">
              <div className={[styles.button, activeTabIndex == 3 || activeTabIndex == 4 ? styles['active'] : ''].join(' ')}>Projects</div>
            </Link>
            <Link href="/stake">
              <div className={[styles.button, activeTabIndex == 1 ? styles['active'] : ''].join(' ')}>Staking</div>
            </Link>
            <WalletButton></WalletButton>
            <NetworkButton></NetworkButton>
          </Row>
        )
      }
    </Col>
  </Row>
</Header>
}