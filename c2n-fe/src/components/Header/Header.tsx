"use client";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Layout, Row, Col, Button } from "antd";
import { useAccount, useSignMessage } from "wagmi";
import { IconWalletButton } from "../icons";
import styles from "./Header.module.scss";
import { WalletModal } from "@/components/WalletModal/WalletModal";
import { useDisconnect } from "@/hooks/useDisconnect";
import NetworkButton from "../NetworkButton/NetworkButton";

export const Header = () => {
  const { address } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [clientAddress, setClientAddress] = useState<string | undefined>(
    undefined
  );
  const { disconnect } = useDisconnect();

  const routerPathname = usePathname();
  const onClickLogin = async () => {
    debugger;
    const signature = await signMessageAsync({ message: "hello" });
    console.log(signature);
    const response = await fetch("http://localhost:8080/api/v1/auth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        address: address,
        signature: signature,
      }),
    });
  };

  // 确保客户端渲染后更新 address
  useEffect(() => {
    setClientAddress(address);
  }, [address]);

  let activeTabIndex = useMemo(() => {
    return ["/", "/stake", "/farming", "/pools", "/project", "/bridge"].indexOf(
      routerPathname
    );
  }, [routerPathname]);

  return (
    <Layout.Header className={styles.header}>
      <Row className="main-content">
        <Col span={6}>
          <Link href="/">
            <div className={styles["logo"]} style={{ cursor: "pointer" }}>
              <h1 className={"Boba title app-name " + styles.title}>
                <span className={styles.logo}></span>
              </h1>
            </div>
          </Link>
        </Col>
        <Col span={18} offset={0}>
          {
            <Row
              className={styles.menu}
              key="desktop"
              justify="space-between"
              align="middle"
            >
              <Link href="/">
                <div
                  className={[
                    styles.button,
                    activeTabIndex == 0 ? styles["active"] : "",
                  ].join(" ")}
                >
                  Home
                </div>
              </Link>
              <Link href="/farming">
                <div
                  className={[
                    styles.button,
                    activeTabIndex == 2 ? styles["active"] : "",
                  ].join(" ")}
                >
                  Farm
                </div>
              </Link>
              <Link href="/pools">
                <div
                  className={[
                    styles.button,
                    activeTabIndex == 3 || activeTabIndex == 4
                      ? styles["active"]
                      : "",
                  ].join(" ")}
                >
                  Projects
                </div>
              </Link>
              <Link href="/stake">
                <div
                  className={[
                    styles.button,
                    activeTabIndex == 1 ? styles["active"] : "",
                  ].join(" ")}
                >
                  Staking
                </div>
              </Link>
              <div className={[styles["menu-item"]].join(" ")}>
                {clientAddress ? (
                  <div>
                    <IconWalletButton
                      style={{ verticalAlign: "text-bottom" }}
                    ></IconWalletButton>{" "}
                    {clientAddress &&
                      clientAddress.replace(/^(.{6}).+(.{4})$/g, "$1...$2")}
                    <span onClick={() => disconnect()}>Disconnect</span>
                  </div>
                ) : (
                  <div onClick={() => setIsWalletModalOpen(true)}>
                    <IconWalletButton
                      style={{ verticalAlign: "text-bottom" }}
                    ></IconWalletButton>{" "}
                    Connect Wallet
                    <WalletModal
                      isOpen={isWalletModalOpen}
                      onCancel={() => setIsWalletModalOpen(false)}
                    ></WalletModal>
                  </div>
                )}
              </div>
              <NetworkButton></NetworkButton>
              <Button type="primary" onClick={onClickLogin}>
                Login
              </Button>
            </Row>
          }
        </Col>
      </Row>
    </Layout.Header>
  );
};
