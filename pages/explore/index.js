import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
import EventCard from "../../components/EventCard";
import TickitButton from "../../components/tickitButton";
import { getEvents } from "../../axios/event.axios";

const Explore = () => {
  
  const [filteredEvents, setFilteredEvents] = useState();

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
                {filteredEvents?.map((event, index) => (
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
            > {filteredEvents?.length > 9 &&
              <TickitButton text="Load More" />
              }
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
