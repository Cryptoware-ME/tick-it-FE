import React, { useEffect, useState } from "react";
import styles from "./TicketCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import TicketCounter from "../TicketCounter";
import EventDetails from "../EventDetails";
import YellowButton from "../yellowButton";
import Counter from "../Counter";
import EditTicket from "../EditTicketModal";


const TicketCard = ({ index }) => {
  const [counter, setCounter] = useState(1);
  const [editticket, setEditTicket] = useState(false);
  return (
    <>
     { editticket && <EditTicket setEditTicket={setEditTicket} />}
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
                <h1 className={styles.cardTitle}> Tier {index + 1}</h1>
                <div>
                  <Image
                    width={28}
                    height={32}
                    style={{ marginRight: "40px" }}
                    alt="delete"
                    src="/images/delete.png"
                  />
                  <Image
                    width={32}
                    height={32}
                    alt="edit"
                    src="/images/edit.png"
                    style={{cursor:"pointer"}}
                    onClick={() => {
                      setEditTicket(true); }}
                  />
                </div>
              </div>

              <TicketCounter sold={286} total={900} />
              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              <h1 className={styles.cardPrice}>$15</h1>
              <Row>
                <Col className={styles.cardCounter} >
                  <h1 className={styles.cardQuantity}>Enter Quantity</h1>
                <Counter counter={counter} setCounter={setCounter}/>
                </Col>
                <Col>
                  <YellowButton text="ADD TO CART" />
              
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
