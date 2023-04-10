import React, { useEffect, useState } from "react";
import styles from "./TicketCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import TicketCounter from "../TicketCounter";
import EventDetails from "../EventDetails";
const TicketCard = ({ index }) => {
  return (
    <>
      <Col xl={12} style={{ padding: "10px" }}>
        <div className="cardWrapper">
          <div className={styles.cardContainer}>
            <div className={styles.imageDiv}>
              <Image
                width={512}
                height={512}
                className={styles.cardImage}
                alt="card-image"
                src="/images/ticket.png"
              />
              <div className={styles.imageGradient} />
            </div>
            <div className={styles.cardDetails}>
              <h1 className={styles.cardTitle}> Tier {index + 1}</h1>
              <TicketCounter sold={286} total={900} />
              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default TicketCard;
