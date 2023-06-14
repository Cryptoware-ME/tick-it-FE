import { Container, Col, Row } from "react-bootstrap";
import Image from "next/image";
import FundsCard from "../../../components/FundsCard";
import DashboardBar from "../../../components/DashboardBar";

import styles from "./Funds.module.scss";

const Funds = () => {
  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="funds" />
        </Col>

        <Col lg={10}>
          {/* <div className={styles.section}> */}
          <div className={styles.sectionContent}>
            <p style={{ marginBottom: "40px" }} className="section-title">
              Funds
            </p>
            <Row>
              <Col lg={4} md={6} sm={12} className={styles.cardCol}>
                <FundsCard />
              </Col>
              <Col lg={4} md={6} sm={12} className={styles.cardCol}>
                <FundsCard state={2} />
              </Col>

              <Col lg={4} md={6} sm={12}>
                <div className={styles.cardContainer}>
                  <Image
                    width={48}
                    height={48}
                    alt="icon"
                    src="/images/add2.svg"
                  />
                  <p className={styles.linkWallet}>Link a new wallet</p>
                </div>
              </Col>
            </Row>
          </div>
          {/* </div> */}
        </Col>
      </Row>
    </Container>
  );
};
export default Funds;
