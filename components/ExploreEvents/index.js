import React from "react";
import styles from "./ExploreEvents.module.scss";
import { Row } from "react-bootstrap";
import EventCard from "../EventCard";
import TickitButton from "../../components/tickitButton";
import Link from "next/link";
import TickitTag from "../TickitTag";

const ExploreEvents = () => {
  return (
    <>
      <p className="section-title">Explore Events</p>
      <Row style={{ marginTop: "24px" }}>
        <div className={styles.filtersRow}>
          {[0, 1, 2, 3]?.map((category, index) => (
            <div
              key={index}
              style={{
                padding: "0px 10px",
              }}
            >
              <TickitTag text="category" />
            </div>
          ))}
        </div>
      </Row>
      <Row style={{ marginTop: "25px" }}>
        {[0, 1, 2]?.map((event, index) => (
          <EventCard key={index} />
        ))}
      </Row>
      <Row
        style={{
          paddingTop: "65px",
        }}
      >
        <Link href="/explore" className={styles.exploreMoreButton}>
          <TickitButton text="Explore More" />
        </Link>
      </Row>
    </>
  );
};

export default ExploreEvents;
