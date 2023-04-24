import { Container, Col, Row } from "react-bootstrap";
import styles from "./Funds.module.scss";
import DashboardBar from "../../components/DashboardBar";
import PageTitle from "../../components/pageTitle";
import FundsCard from "../../components/FundsCard";
import Image from "next/image";
const Funds = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row style={{marginRight:"0"}}>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <DashboardBar />
        </Col>
        <Col lg={10} style={{ padding: "14px" }}>
          <Container fluid>
            <Row>
              <p className={styles.title}>Funds</p>
              <Row style={{ marginTop: "50px" }}>
                <Col>
                   <FundsCard />
                </Col>
                <Col>
                  <FundsCard state={2} />
                </Col>

                <Col>
                  <div className={styles.cardContainer}>
                    <Image
                      width={52}
                      height={52}
                      alt="icon"
                      src="/images/add2.svg"
                    />

                    <p className={styles.linkWallet}>Link a new wallet</p>
                  </div>
                </Col>
              </Row>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Funds;
