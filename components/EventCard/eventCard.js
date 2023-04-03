import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.scss";
import { Col, Row } from "react-bootstrap";

const EventCard = ({}) => {
  return (
    <>
      <Col md={4} style={{ padding: "10px" }}>
        <div
          className={styles.eventCard}
          style={{
            backgroundImage: `url('/images/belle.png')`,
          }}
        >
          <div className={styles.cardGradient}>
            <div className={styles.cardDetails}>
              <h1>name</h1>
              <h4>sponsor</h4>
              <div className={styles.eventDate}>date</div>
              <div className={styles.eventLocation}>location</div>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default EventCard;
