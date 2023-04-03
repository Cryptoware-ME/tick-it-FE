"use client";
import Swiper from "@/components/Slider/slider";
import EventCard from "@/components/EventCard/eventCard";
import { Container, Row } from "react-bootstrap";
import Categories from "@/components/Categories/categories";
import YellowButton from "@/components/Buttons/yellowButton";
export default function Home() {
  return (
    <main style={{ backgroundColor: "#0c0c0c" }}>
      <Swiper />
      <Container>
        <Row>
          <p className="section-title">Upcoming Events Near You</p>
          <Row>
            {[0, 1, 2]?.map((event, index) => (
              <EventCard key={index} />
            ))}
          </Row>
        </Row>
        <Row style={{ marginTop: "65px" }}>
          <p className="section-title">Explore Events</p>
          <Row>
            {[0, 1, 2, 3, 4, 5]?.map((category, index) => (
              <Categories key={index} />
            ))}
          </Row>
          <Row style={{ marginTop: "25px" }}>
            {[0, 1, 2]?.map((event, index) => (
              <EventCard key={index} />
            ))}
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "24px",
            }}
          >
            <YellowButton text="Explore More" />
          </Row>
          <Row>
            <div>stats</div>
          </Row>
        </Row>
      </Container>
    </main>
  );
}
