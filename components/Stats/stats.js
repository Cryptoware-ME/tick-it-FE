import React, { useEffect, useState } from "react";
import styles from "./Stats.module.scss";
import { Col, Row } from "react-bootstrap";
const Stats = ({}) => {
  return (
    <>
      <Col
        md={4}
       
        className={styles.statsWrapper}
      >
        <div>
          <div  className={styles.statNumber}>10,000+</div>
          <div  className={styles.statType}>Events created</div>
        </div>
      </Col>
      <Col
        md={4}
       
        className={styles.statsWrapper}
      >
        <div>
          <div  className={styles.statNumber}>200,000+</div>
          <div  className={styles.statType}>Attendees</div>
        </div>
      </Col>
      <Col
        md={4}
       
        className={styles.statsWrapper}
      >
        <div>
          <div  className={styles.statNumber}>$1M+</div>
          <div  className={styles.statType}>In Sales</div>
        </div>
      </Col>
     
    </>
  );
};

export default Stats;
