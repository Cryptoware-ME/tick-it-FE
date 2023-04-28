import React, { useEffect, useState } from "react";
import styles from "./Event.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import EventDate from "../../components/EventDate";
import EventLocation from "../../components/EventLocation";
import EventDetails from "../../components/EventDetails";
import Tickets from "../../components/Tickets";
import Image from "next/image";
import YellowButton from "../../components/yellowButton";
const Event = () => {
  const [state, setState] = useState(1);
  return (
    <div className={styles.eventWrapper}>
      <div
        style={{
          backgroundImage: `url("/images/acdc.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "calc(65vh - 70px)",
        }}
      >
        <div
          style={{
            height: "100%",
            background:
              " linear-gradient(0deg,rgba(15,10,10, 1) 0%, rgba(15,10,10, 0.55) 25%, rgba(255, 204, 0, 0.31) 65%,rgba(255, 204, 0, 0.11) 100%)",
          }}
        />
      </div>
      <Container
        style={{
          marginTop: "-50px"
          
        }}
      >
    
        <Row>
          <div className={styles.titleButton}>
            <h1 className={styles.eventTtile}>
              AC/DC live in Munich
              <Image
                width={32}
                height={32}
                alt="edit"
                src="/images/edit.png"
                style={{ marginLeft: "20px" }}
              />
            </h1>
            <div className={styles.reserveButton}>
              <YellowButton  disabled text="RESERVE" />
              
            </div>
 
            <div className={styles.viewButton}>
              <YellowButton  text="VIEW ACTIVITY" />
            </div>
          </div>
          {state == 1 && (
            <div style={{ padding: "30px 10px" }}>
              <YellowButton text="LAUNCH EVENT" />
            </div>
          )}
          {state == 2 && (
            <div className={styles.buttons}>
              <YellowButton text="PAUSE SALE" />
              <div style={{ marginLeft: "40px" }}>
                <YellowButton style2 text="VIEW ACTIVITY" />
              </div>
            </div>
          )}
          {state == 3 && (
            <div className={styles.buttons}>
              <YellowButton text="RESUME SALES" />
              <div style={{ marginLeft: "40px" }}>
                <YellowButton text="CANCEL SALES" />
              </div>
              <div style={{ marginLeft: "40px" }}>
                <YellowButton style2 text="VIEW ACTIVITY" />
              </div>
            </div>
          )}

          <div style={{ marginTop: "40px" }}>
            <EventDate date="june 17" time="8pm GMT" fontSize="24px" />
          </div>
          <div style={{ marginTop: "14px" }}>
            <EventLocation location="Arizona" fontSize="24px" />
          </div>
          <div style={{ marginTop: "14px" }}>
            <EventDetails
              width="60%"
              details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
            />
          </div>
        </Row>
        <Row
          style={{
            padding: "80px 0px",
          }}
        >
          <Tickets />
        </Row>
      </Container>
    </div>
  );
};

export default Event;
