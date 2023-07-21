import React from "react";
import { Col } from "react-bootstrap";

import EventDate from "../EventDate";

import styles from "./UpcomingEventsCard.module.scss";

const UpcomingEventsCard = ({ event }) => {
  return (
    <Col md={3} sm={6} className={styles.cardWrapper}>
      <div
        style={{
          backgroundImage: `url(${event?.banner})`,
        }}
        className={styles.cardImage}
      >
        <div className={styles.cardGradient}>
          <p className={styles.eventTitle}>{event?.name}</p>
          <EventDate data={event?.eventDate} />
          <p className={styles.eventTime}>{event?.name}</p>
        </div>
      </div>
    </Col>
  );
};

export default UpcomingEventsCard;
