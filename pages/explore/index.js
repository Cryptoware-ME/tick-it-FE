import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
import EventCard from "../../components/EventCard";
import PageTitle from "../../components/pageTitle";
import YellowButton from "../../components/YellowButton";
const Explore = ({}) => {
  return (
    <Container fluid className={styles.exploreWrapper}>
      <Row>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <SideBar />
        </Col>
        <Col lg={10} style={{ padding: "0px" }}>
          <Container fluid>
            <PageTitle text="Explore" />
            <Row>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8]?.map((event, index) => (
                <EventCard key={index} />
              ))}
            </Row>
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "48px 0px",
              }}
            >
              <YellowButton text="Load More" />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
