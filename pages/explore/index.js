import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { getEvents } from "../../axios/event.axios";

import SideBar from "../../components/SideBar";
import EventCard from "../../components/EventCard";
import PagePagination from "../../components/pagination";

import styles from "./Explore.module.scss";

const Explore = () => {
  const [filteredEvents, setFilteredEvents] = useState();
  const take = 12;
  const [skip, setSkip] = useState(0);

  const Events = async () => {
    let events = await getEvents(
      JSON.stringify({ relations: ["organization"] })
    );
    setFilteredEvents(events?.data);
  };

  useEffect(() => {
    Events();
  }, []);

  return (
    <Container fluid className={styles.exploreWrapper}>
      <Row>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <SideBar />
        </Col>
        <Col lg={10}>
          <Container>
            <p style={{ margin: "30px 0px" }} className="pageTitle">
              Explore
            </p>
            {filteredEvents && (
              <Row>
                {filteredEvents
                  ?.slice(skip, skip + take)
                  .map((event, index) => (
                    <EventCard key={index} eventData={event} />
                  ))}
              </Row>
            )}
            <Row
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "48px 0px",
              }}
            >
              <PagePagination
                data={filteredEvents}
                setSkip={setSkip}
                take={take}
              />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
