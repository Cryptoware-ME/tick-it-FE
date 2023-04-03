import React, { useEffect, useState } from "react";
import styles from "./Stats.module.scss";
import { Col, Row } from "react-bootstrap";
const Stats = ({}) => {
  return (
    <>
      <Col
        md={4}
        style={{
          padding: "10px",
          color: "white",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <p>number</p>
        <p>type</p>
      </Col>
    </>
  );
};

export default Stats;
