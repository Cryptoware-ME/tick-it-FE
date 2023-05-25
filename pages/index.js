import Slider from "../components/Slider";
import EventCard from "../components/EventCard";
import { Container, Row } from "react-bootstrap";
import ExploreEvents from "../components/ExploreEvents";
import React, { useEffect, useState } from "react";
import { getEvents } from "../axios/event.axios";
import { useAuth } from "../auth/useAuth";

export default function Home() {
  const [allEvents, setAllEvents] = useState();
  const { user } = useAuth();

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
      <Slider events={allEvents}/>
      <Container style={{ paddingBottom: "65px" }}>
        {allEvents && (
          <Row style={{ marginTop: "65px" }}>
            <p className="section-title">Hot Events</p>
            <Row style={{ marginTop: "24px" }}>
              {allEvents?.reverse().slice(0,4).map((event, index) => (
                <EventCard key={index} eventData={event} />
              ))}
            </Row>
          </Row>
        )}
        <Row id="explore" style={{ marginTop: "65px" }}>
          <ExploreEvents  events={allEvents} />
        </Row>
      </Container>
    </main>
  );
}
