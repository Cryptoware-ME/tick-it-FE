import React, { useEffect, useState } from "react";
import styles from "./EventCard.module.scss";
import { Col } from "react-bootstrap";
import Image from "next/image";
import EventDate from "../EventDate";
import EventLocation from "../EventLocation";
import Link from "next/link";

const EventCard = ({ eventData }) => {
  return (
    <>
      {eventData && (
        <Col md={3} style={{ padding: "10px" }}>
          <Link
            href={{
              pathname: `/event/${eventData.slug}`,
            }}
            className={styles.link}
          >
            <div className="cardWrapper">
              <div className={styles.cardContainer}>
                <div style={{ minHeight: "215px" }}>
                  <Image
                    width={512}
                    height={512}
                    className={styles.cardImage}
                    alt="card-image"
                    src={eventData?.banner}
                  />

                  <div className={styles.cardGradient}></div>
                </div>

                <div className={styles.cardDetails}>
                  <p className={styles.eventTitle}>{eventData?.name} </p>
                  <p className={styles.eventOrganizer}>
                    {eventData?.organization?.name}
                  </p>

                  <EventDate data={eventData.eventDate} />
                  <EventLocation location={eventData.location} />
                </div>
              </div>
            </div>
          </Link>
        </Col>
      )}
    </>
  );
};

export default EventCard;
