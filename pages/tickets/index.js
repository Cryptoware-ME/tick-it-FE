import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";
import CartTicket
 from "../../components/CartTicket";
const Tickets = ({}) => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <DashboardBar />
        </Col>
        <Col lg={10} style={{ padding: "0px" }}>
          <Container fluid>
          
          <Row>
          <p  className={styles.title}>My Tickets</p>
            {[0, 1, 2]?.map((event, index) => (
              <CartTicket  key={index} />
            ))}
          
          
        </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Tickets;
