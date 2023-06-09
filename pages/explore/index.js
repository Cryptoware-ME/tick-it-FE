import React, { useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import SideBar from "../../components/SideBar";
import EventCard from "../../components/EventCard";
import { getEvents } from "../../axios/event.axios";
// import Pagination from "react-bootstrap/Pagination";
import PagePagination from "../../components/pagination";
const Explore = () => {
  const [filteredEvents, setFilteredEvents] = useState();

  const take = 3;
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

  // const onMoreData = (e) => {
  //   setSkip((Number(e.target.text) - 1) * take);
  // };
  // const numberOfPages = Math.ceil(filteredEvents?.length / take);

  // for (let number = 1; number <= numberOfPages; number++) {
  //   items.push(
  //     <Pagination.Item onClick={onMoreData} key={number}>
  //       {number}
  //     </Pagination.Item>
  //   );
  // }

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
