import React, { useEffect, useState } from "react";
import styles from "./CartTicket.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import EventDetails from "../EventDetails";
import Counter from "../Counter";
import Link from "next/link";
import EventDate from "../EventDate";
import EventLocation from "../EventLocation";
import RecipientsModal from "../RecipientsModal";
import YellowButton from "../yellowButton";
const CartTicket = ({ inCart = false }) => {
  const [counter, setCounter] = useState(1);
  const [recipientsModal, setRecipientsModal] = useState(false);

  return (
    <>
      {recipientsModal && (
        <RecipientsModal setRecipientsModal={setRecipientsModal} />
      )}

      <Col xl={12} style={{ padding: "10px" }}>
        <div className={styles.cardWrapper}>
          <div className={styles.cardContainer}>
            <div className={styles.imageDiv}>
              <Image
                width={320}
                height={320}
                className={styles.cardImage}
                alt="card-image"
                src="/images/cartticket.png"
              />
              <div className={styles.imageGradient} />
            </div>
            <div className={styles.cardDetails}>
              <div className={styles.cardHeader}>
                <h1 className={styles.cardTitle}> Front Seat </h1>
                {inCart && (
                  <div className={styles.cardRightLinks}>
                    <div
                      className={styles.cardAdd}
                      onClick={() => {
                        setRecipientsModal(true);
                      }}
                    >
                      <Image
                        width={14}
                        height={14}
                        style={{ marginRight: "5px" }}
                        alt="add"
                        src="/images/addYellow.png"
                      />
                      <div className={styles.cardRecipients}>
                        Recipients (3)
                      </div>
                    </div>
                    <Image
                      width={14}
                      height={18}
                      style={{ marginLeft: "20px" }}
                      alt="delete"
                      src="/images/delete.png"
                    />
                  </div>
                )}
              </div>
              <p className={styles.cardDate}>Fri, Mar 10, 2023</p>
              <EventLocation location="12:00 AM UTC" />
              <div style={{ margin: "6px 0px 30px 0px" }}>
                <EventDate date="Unused" time="Event Upcoming" />
              </div>

              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
              {inCart && (
                <Row className={styles.cardCounter}>
                  <h1 className={styles.cardQuantity}>Enter Quantity</h1>
                  <div style={{ width: "fit-content" }}>
                    <Counter counter={counter} setCounter={setCounter} />
                  </div>
                  <h1 className={styles.cardPrice}>$15</h1>
                </Row>
              )}
              {!inCart && (
                <Row className={styles.cardCounter}>
                  <YellowButton style2 text="SEND TICKET" />
                  <div style={{ marginLeft: "12px", width: "fit-content" }}>
                    <YellowButton text="ENTER EVENT" />
                  </div>
                </Row>
              )}
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default CartTicket;
