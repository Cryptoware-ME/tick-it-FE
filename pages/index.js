import Slider from "../components/Slider";
import EventCard from "../components/EventCard";
import { Container, Row } from "react-bootstrap";
import ExploreEvents from "../components/ExploreEvents";
import React, { useEffect, useState } from "react";
import { getEvents } from "../axios/event.axios";

export default function Home() {
  const [allEvents, setAllEvents] = useState();

  const Events = async () => {
    let events = await getEvents(
      JSON.stringify({ relations: ["organization"] })
    );
    setAllEvents(events?.data);
  };
  useEffect(() => {
    Events();
  }, []);

  return (
    <main style={{ backgroundColor: " var(--background)" }}>
      <Slider />
      <Container style={{ paddingBottom: "65px" }}>
        {allEvents && (
          <Row style={{ marginTop: "65px" }}>
            <p className="section-title">Upcoming Events Near You</p>
            <Row style={{ marginTop: "24px" }}>
              {allEvents?.map((event, index) => (
                <EventCard key={index} eventData={event} />
              ))}
            </Row>
          </Row>
        )}
        <Row id="explore" style={{ marginTop: "65px" }}>
          <ExploreEvents />
        </Row>
      </Container>
    </main>
  );
}
