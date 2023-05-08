import React from "react";
import styles from "./Explore.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
import EventCard from "../../components/EventCard";
import TickitButton from "../../components/tickitButton";

const Explore = () => {
  return (
    <Container fluid className={styles.exploreWrapper}>
      <Row>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <SideBar />
        </Col>
        <Col lg={10} >
          <Container  >
          <p style={{margin:"30px 0px"}} className="pageTitle">Explore</p>
            <Row>
              {[0, 1, 2, 3, 4, 5, 6, 7]?.map((event, index) => (
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
              <TickitButton text="Load More" />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Explore;
