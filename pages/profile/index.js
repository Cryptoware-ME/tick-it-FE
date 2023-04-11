import React, { useEffect, useState } from "react";
import styles from "./Profile.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import UserProfileDetails from "../../components/UserProfileDetails";
import EventCard from "../../components/EventCard";

const Event = ({}) => {
  return (
    <div className={styles.profileWrapper}>
      <UserProfileDetails />
      <Container style={{ padding: "48px 0px" }}>
        <Row>
          <p className="section-title">Upcoming Events</p>
        </Row>
        <Row>
          {[0, 1, 2]?.map((event, index) => (
            <EventCard key={index} />
          ))}
        </Row>
        <Row style={{ marginTop: "48px" }}>
          <p className="section-title">Past Events</p>
        </Row>
        <Row>
          {[0, 1, 2]?.map((event, index) => (
            <EventCard key={index} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Event;
