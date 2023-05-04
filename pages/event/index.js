import React, { useEffect, useState } from "react";
import styles from "./Event.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import EventDate from "../../components/EventDate";
import EventLocation from "../../components/EventLocation";
import EventDetails from "../../components/EventDetails";
import Tickets from "../../components/Tickets";
import Image from "next/image";
import TickitButton from "../../components/tickitButton";
import TickitTag from "../../components/TickitTag";

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
          marginTop: "-50px",
        }}
      >
        <Row>
          <Col lg={6}>
            <div className={styles.titleDiv}>
              <p className="pageTitle">AC/DC live in Munich</p>
              <div style={{ marginLeft: "20px" }}>
                <Image
                  width={32}
                  height={32}
                  alt="edit"
                  src="/images/edit.png"
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className={styles.titleButtons}>
              <TickitButton disabled text="RESERVE" />
              <TickitButton text="VIEW ACTIVITY" />
            </div>
          </Col>
          <Row style={{ marginTop: "32px" }}>
            {/* ///////state 1 /////////// */}
            <div>
              <TickitButton text="LAUNCH EVENT" />
            </div>
            {/* ///////state 2 /////////// */}
            <div className={styles.buttons}>
              <TickitButton text="PAUSE SALE" />
              <div style={{ marginLeft: "40px" }}>
                <TickitButton style2 text="VIEW ACTIVITY" />
              </div>
            </div>
            {/* ///////state 3 /////////// */}
            <div className={styles.buttons}>
              <TickitButton text="RESUME SALES" />
              <div style={{ marginLeft: "40px" }}>
                <TickitButton text="CANCEL SALES" />
              </div>
              <div style={{ marginLeft: "40px" }}>
                <TickitButton style2 text="VIEW ACTIVITY" />
              </div>
            </div>
          </Row>
          <div style={{ marginTop: "32px", display:"flex", alignItems:"center" }}>
            <EventDate date="june 17" time="8pm GMT" fontSize="24px" />
            <div style={{ marginLeft: "32px",}}>

            <TickitTag text="in 2 days" />
            </div>
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
