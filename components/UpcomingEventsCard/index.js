import { Col } from "react-bootstrap";
import React from "react";
import Link from "next/link";

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
          <Link
            href={`/event/${event?.slug}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <p className={styles.eventTitle}>{event?.name}</p>
            <EventDate data={event?.eventDate} />
            <p className={styles.eventTime}>{event?.name}</p>
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default UpcomingEventsCard;
