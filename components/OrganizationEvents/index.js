import React from "react";
import styles from "./OrganizationEvents.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import UserProfileDetails from "../UserProfileDetails";
import OrganizationSidebar from "../OrganizationSidebar";
import PageTitle from "../pageTitle";
import Image from "next/image";
import UpcomingEventsCard from "../UpcomingEventsCard";
const OrganizationEvents = (state = 1) => {
  return (
    <Container fluid className={styles.allEvents}>
      <div className={styles.title}>
        <PageTitle text=" All Events" />
        <div className={styles.userName}>
          <p className={styles.userTitle}>Factory People</p>
          <Image
            width={13}
            height={8}
            alt="search"
            src="/images/downArrow.png"
            className={styles.arrowDown}
          />
        </div>
      </div>
      <Row>
        <div className={styles.header}>
          <p className={styles.sectionTitle}>Upcoming Events</p>
        </div>
        {[0, 1, 2]?.map((event, index) => (
          <UpcomingEventsCard key={index} columns={4} />
        ))}
      </Row>
      <Row style={{ padding: "20px 0px" }}>
        <div className={styles.header}>
          <p className={styles.sectionTitle}>Ended</p>
        </div>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8]?.map((event, index) => (
          <UpcomingEventsCard key={index} columns={4} />
        ))}
      </Row>
    </Container>
  );
};
export default OrganizationEvents;
