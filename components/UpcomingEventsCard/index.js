import React from "react";
import { Col } from "react-bootstrap";

import styles from "./UpcomingEventsCard.module.scss";

const UpcomingEventsCard = () => {
  return (
    <>
      <Col md={3} sm={6} className={styles.cardWrapper}>
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
