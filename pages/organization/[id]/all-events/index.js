import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

import { getOrganization } from "../../../../axios/organization.axios";
import { getEvents } from "../../../../axios/event.axios";

import OrganizationProfile from "../../../../components/organization-profile";
import OrganizationSidebar from "../../../../components/OrganizationSidebar";
import UpcomingEventsCard from "../../../../components/UpcomingEventsCard";
import ComingSoonModal from "../../../../components/ComingSoonModal";

import styles from "../organization.module.scss";
import Link from "next/link";

const AllEvents = () => {
  const [orgData, setOrgData] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [comingSoon, setComingSoon] = useState(false);
  const [events, setEvents] = useState([]);
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [endedEvents, setEndedEvents] = useState([]);

  const getOrganizationDetails = async () => {
    await getOrganization(
      JSON.stringify({
        // relations: [],
        where: { id: id },
      })
    ).then((data) => {
      setOrgData(data.data[0]);
    });
  };

  const getEventDetails = async (address) => {
    await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: { organizationId: id },
      })
    ).then((data) => {
      setEvents(data.data);
    });
  };

  const sortEvents = async () => {
    let currentDate = new Date();
    let upcomming = [];
    let ended = [];
    events.forEach((event) => {
      if (event.eventDate < currentDate) {
        ended.push(event);
      } else {
        upcomming.push(event);
      }
    });

    setEndedEvents(ended);

    setUpcomingEvents(upcomming);
  };

  useEffect(() => {
    if (id) {
      getOrganizationDetails();
      getEventDetails();
    }
  }, [id]);
  useEffect(() => {
    sortEvents();
  }, [events]);

  return (
    <>
      {comingSoon && <ComingSoonModal></ComingSoonModal>}

      <Container fluid className={styles.organization}>
        <Row>
          <OrganizationProfile data={orgData} />
        </Row>
        <Row>
          <Col lg={3} style={{ padding: "0px" }}>
            <OrganizationSidebar data={orgData} selected="events" />
          </Col>

          <Col lg={9} style={{ padding: "10px" }}>
            <Container fluid>
              <div className={styles.title}>
                <p className="pageTitle">All Events</p>
                {/* <div className={styles.userName}>
                  <p className={styles.userTitle}>Factory People</p>
                  <Image
                    width={13}
                    height={8}
                    alt="search"
                    src="/images/downArrow.png"
                    className={styles.arrowDown}
                  />
                </div> */}
              </div>
              <Row>
                <div className="cardWrapper">
                  <div className={styles.cardContainer}>
                    <p className={styles.sectionTitle}>Upcoming Events</p>
                    {upcomingEvents.length > 0 ? (
                      <Row>
                        {upcomingEvents?.map((event, index) => (
                          <UpcomingEventsCard
                            key={index}
                            columns={4}
                            event={event}
                          />
                        ))}
                      </Row>
                    ) : (
                      <Row>
                        <Link
                          href="/create-event"
                          className={styles.createEvent}
                        >
                          <p>
                            You does not have any upcomming events, Click here
                            to create one
                          </p>
                        </Link>
                      </Row>
                    )}
                  </div>
                </div>
              </Row>
              {endedEvents.length > 0 && (
                <Row style={{ marginTop: "24px" }}>
                  <div className="cardWrapper">
                    <div className={styles.cardContainer}>
                      <p className={styles.sectionTitle}>Ended</p>
                      <Row>
                        {endedEvents?.map((event, index) => (
                          <UpcomingEventsCard
                            key={index}
                            columns={4}
                            event={event}
                          />
                        ))}
                      </Row>
                    </div>
                  </div>
                </Row>
              )}
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AllEvents;
