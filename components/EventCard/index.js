import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import EventDate from "../EventDate";
import EventLocation from "../EventLocation";
import EventOrganizer from "../EventOrganizer";
import EventTitle from "../EventTitle";
const EventCard = ({}) => {
  return (
    <>
      <Col md={4} style={{ padding: "10px" }}>
        <div className="cardWrapper">
          <div className={styles.cardContainer}>
            <div>
              <Image
                width={512}
                height={512}
                className={styles.cardImage}
                alt="card-image"
                src="/images/belle.png"
              />
              <div className={styles.cardGradient}></div>
            </div>

            <div className={styles.cardDetails}>
              <EventTitle title="Billie Eilish" />
              <EventOrganizer organizer="NRJ" />
              <EventDate date="june 17" time="8pm GMT" />
              <EventLocation location="Allianz Arena" />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default EventCard;
