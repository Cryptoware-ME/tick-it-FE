import React, { useEffect, useState } from "react";
import styles from "./Categories.module.scss";
import { Col, Row } from "react-bootstrap";
import GradientButton from "../GradientButton";
const Categories = ({}) => {
  return (
    <>
      <Col md={2} style={{ padding: "10px" }}>
        <GradientButton text="category" />
      </Col>
    </>
  );
};

export default Categories;
