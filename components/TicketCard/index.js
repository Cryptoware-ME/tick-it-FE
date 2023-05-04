import React, { useEffect, useState } from "react";
import styles from "./TicketCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import TicketCounter from "../TicketCounter";
import EventDetails from "../EventDetails";
import TickitButton from "../tickitButton";
import Counter from "../Counter";
import EditTicket from "../EditTicketModal";

const TicketCard = ({ index }) => {
  const [counter, setCounter] = useState(1);
  const [editticket, setEditTicket] = useState(false);
  return (
    <>
      {editticket && <EditTicket setEditTicket={setEditTicket} />}
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
              <div className={styles.cardHeader}>
                <h1 className="section-title"> Tier {index + 1}</h1>
                <div>
                  <Image
                    width={26}
                    height={26}
                    style={{ marginRight: "24px",cursor: "pointer" }}
                    alt="delete"
                    src="/images/delete.png"
                    onClick={() => {}}
                  />
                  <Image
                    width={24}
                    height={24}
                    alt="edit"
                    src="/images/edit.png"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setEditTicket(true);
                    }}
                  />
                </div>
              </div>

              <TicketCounter sold={286} total={900} />
              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              <h1 className={styles.cardPrice}>$15</h1>
              <Row>
                <Col className={styles.cardCounter}>
                  <h1 className={styles.cardQuantity}>Enter Quantity</h1>
                  <div   style={{ marginLeft:"8px" }}>

                  <Counter counter={counter} setCounter={setCounter} />
                  </div>
                </Col>
                <Col>
                  <TickitButton text="ADD TO CART" />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default TicketCard;
