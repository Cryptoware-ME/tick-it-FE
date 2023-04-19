import React, { useEffect, useState } from "react";
import styles from "./ExploreEvents.module.scss";
import { Row } from "react-bootstrap";
import EventCard from "../EventCard";
import YellowButton from "../../components/YellowButton";
import GradientButton from "../gradientButton";
import Link from "next/link";

const ExploreEvents = () => {
  return (
    <>
      <p className="section-title">Explore Events</p>
      <Row>
        <div className={styles.filtersRow}>
          {[0, 1, 2]?.map((category, index) => (
            <div
            key={index}
              style={{
                padding: "0px 10px",
              }}
            >
              <GradientButton text="category" />
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
          <YellowButton text="Explore More" />
        </Link>
      </Row>
    </>
  );
};

export default ExploreEvents;
