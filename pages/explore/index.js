import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
const Explore = ({}) => {
  return (
    <Container fluid className={styles.exploreWrapper}>
      <Col lg={2} >
        <SideBar />
      </Col>
      <Col lg={10}></Col>
    </Container>
  );
};

export default Explore;
