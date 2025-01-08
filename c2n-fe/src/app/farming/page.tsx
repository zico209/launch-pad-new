"use client";
import { Row, Col } from "antd";
import type { AppProps } from "next/app";
import Link from "next/link";
import { appConfig } from "@/config";
import styles from "./page.module.scss";
import { QuestionCircleOutlined } from "@ant-design/icons";
import FarmingForm from "@/components/FarmingForm/FarmingForm";
import { useFarming } from "./useFarming";
export default function Page({ Component, pageProps }: AppProps) {
  const isDesktopOrLaptop = true;
  const { poolLength } = useFarming();
  return (
    <main style={{ display: "flex", justifyContent: "center", color: "white" }}>
      <section style={{ width: "50vw", paddingTop: "2rem" }}>
        <section className={styles["intro"] + " main-content"}>
          <h2 className={styles["stake-title"]}>
            <Row justify="space-between">
              <Col>
                <span>Yield Farms</span>
              </Col>
              <Col>
                <span style={{ fontSize: "16px", verticalAlign: "middle" }}>
                  <QuestionCircleOutlined
                    style={{
                      fontSize: "36px",
                      verticalAlign: "middle",
                      marginRight: ".2em",
                    }}
                  ></QuestionCircleOutlined>
                  See Tutorial: &nbsp;
                  <span className={styles["link"]} onClick={() => {}}>
                    {isDesktopOrLaptop ? "C2N Farm Tutorial" : "Tutorial"}{" "}
                  </span>
                </span>
              </Col>
            </Row>
          </h2>
          <h3 className={styles["stake-subtitle"]}>
            Yield Farms allow users to earn Reward token while supporting C2N by
            staking LP Tokens.
          </h3>
        </section>
        <section className={styles["staking"]}>
          <div className="main-content">
            <Row gutter={32}>
              {poolLength &&
                poolLength > 0 &&
                Array.from({ length: poolLength }).map((_, index) => {
                  return (
                    <Col span={isDesktopOrLaptop ? 8 : 24} key={index}>
                      <FarmingForm poolId={index} />
                    </Col>
                  );
                })}
            </Row>
          </div>
        </section>
      </section>
    </main>
  );
}
