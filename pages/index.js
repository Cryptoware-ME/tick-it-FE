import Slider from "../components/Slider";
import EventCard from "../components/EventCard";
import { Container, Row } from "react-bootstrap";
import Stats from "../components/Stats";
import ExploreEvents from "../components/ExploreEvents";
export default function Home() {
  return (
    <main style={{ backgroundColor: "#0c0c0c" }}>
      <Slider />
      <Container style={{ paddingBottom: "65px" }}>
        <Row style={{ marginTop: "65px" }}>
          <p className="section-title">Upcoming Events Near You</p>
          <Row>
            {[0, 1, 2]?.map((event, index) => (
              <EventCard key={index} />
            ))}
          </Row>
        </Row>
        <Row id="explore" style={{ marginTop: "65px" }}>
          <ExploreEvents />
        </Row>
        <Row style={{ marginTop: "65px" }}>
          <Stats />
        </Row>
      </Container>
    </main>
  );
}
