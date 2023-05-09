import React, { useEffect, useState } from "react";
import styles from "./UpcomingEventsCard.module.scss";
import { Col, Row } from "react-bootstrap";

const UpcomingEventsCard = ({ columns = 3 }) => {
  return (
    <>
      <Col md={columns} className={styles.cardWrapper}>
        <div
          style={{
            backgroundImage: `url("/images/photo.png")`,
          }}
          className={styles.cardImage}
        >
          <p className={styles.eventTitle}>House of Pop</p>
          <p className={styles.eventTime}>31 March 2023 | 8 PM</p>
          <p className={styles.eventTime}>Grand Factory</p>
        </div>
      </Col>
    </>
  );
};

export default UpcomingEventsCard;
