import React from "react";
import styles from "./OrganizationSettings.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import PageTitle from "../PageTitle";
import YellowButton from "../../components/YellowButton";
const OrganizationSettings = () => {
  return (
    <Container fluid className={styles.organization}>
      <PageTitle text="Payment Settings" />
      <div>
        <p className={styles.paymentFunds}>Funds Available: $ 52,968.78</p>
        <div style={{width:"40%",marginTop:"70px"}}>

        <YellowButton
          text="WITHDRAW IN CRYPTO"
          minWidth="100%"
          fontSize="20px"
          padding="15px 10px"
        />
        <div style={{marginTop:"35px"}}>

         <YellowButton
          text="WITHDRAW IN FIAT"
          minWidth="100%"
          fontSize="20px"
          padding="15px 10px"
          style2
        />
        </div>
        </div>
      </div>
    </Container>
  );
};

export default OrganizationSettings;
