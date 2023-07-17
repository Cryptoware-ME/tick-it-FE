import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import FundsCard from "../../../components/FundsCard";
import DashboardBar from "../../../components/DashboardBar";
import { getWalletsByUser } from "../../../axios/wallets.axios";
import { useAuth } from "../../../auth/useAuth";

import styles from "./Funds.module.scss";

const Funds = () => {
  const [walletsList, setWalletsList] = useState([]);

  const { user } = useAuth();

  const getWallets = async () => {
    getWalletsByUser(
      JSON.stringify({
        where: { userId: user.id },
      })
    ).then((data) => {
      setWalletsList(data.data);
    });
  };

  useEffect(() => {
    if (user?.id) {
      getWallets();
    }
  }, [user]);

  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="funds" />
        </Col>

        <Col lg={10}>
          <div className={styles.sectionContent}>
            <p style={{ marginBottom: "40px" }} className="section-title">
              Funds
            </p>
            <Row>
              {walletsList?.map((wallet, index) => (
                <Col lg={4} md={6} sm={12} className={styles.cardCol}>
                  <FundsCard data={wallet} refetch={getWallets} />
                </Col>
              ))}
              {/* <Col lg={4} md={6} sm={12}>
                <div className={styles.cardContainer}>
                  <Image
                    width={48}
                    height={48}
                    alt="icon"
                    src="/images/add2.svg"
                  />
                  <p className={styles.linkWallet}>Link a new wallet</p>
                </div>
              </Col> */}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Funds;
