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
  const [categoryFilter, setCategoryFilter] = useState("");

  const Events = async (filters) => {
    let events = await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: filters,
      })
    );
    setFilteredEvents(events?.data);
  };

  useEffect(() => {
    let tempfilters = { isPublished: true };
    if (categoryFilter && categoryFilter != undefined) {
      tempfilters = { ...tempfilters, categoryId: categoryFilter };
    }

    Events(tempfilters);
  }, [categoryFilter]);

  return (
    <Container fluid className={styles.exploreWrapper}>
      <Row>
        <Col lg={2} style={{ paddingRight: "0px" }}>
          <SideBar
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
          />
        </Col>
        <Col lg={10}>
          <Container>
            <div className={styles.titleDiv}>
              <p className="pageTitle">Explore</p>
            </div>
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
