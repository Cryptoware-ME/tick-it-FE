import { Container, Col, Row } from "react-bootstrap";
import styles from "./Funds.module.scss";
import FundsCard from "../../components/FundsCard";
import Image from "next/image";
const Funds = () => {
  return (
    <Container fluid>
      <Row>
        <p style={{ marginTop: "24px " }} className="pageTitle">
          Funds
        </p>
        <Row>
          <Col lg={4} md={6} sm={12} style={{ marginTop: "24px " }}>
            <FundsCard />
          </Col>
          <Col lg={4} md={6} sm={12} style={{ marginTop: "24px " }}>
            <FundsCard state={2} />
          </Col>

          <Col lg={4} md={6} sm={12} style={{ marginTop: "24px " }}>
            <div className={styles.cardContainer}>
              <Image width={48} height={48} alt="icon" src="/images/add2.svg" />
              <p className={styles.linkWallet}>Link a new wallet</p>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};
export default Funds;
