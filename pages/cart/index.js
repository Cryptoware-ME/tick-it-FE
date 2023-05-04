import React, { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import CartTicket from "../../components/CartTicket";
import CheckOutCard from "../../components/CheckOutCard";

const Cart = () => {
  return (
    <div className={styles.profileWrapper}>
      <Container style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <Row>
          <Col lg={8}>
            {[0, 1, 2]?.map((event, index) => (
              <CartTicket inCart key={index} />
            ))}
          </Col>
          <Col lg={4}>
            <CheckOutCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
