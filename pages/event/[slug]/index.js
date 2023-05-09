import React, { useEffect, useState } from "react";
import styles from "./Event.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import EventDate from "../../../components/EventDate";
import EventLocation from "../../../components/EventLocation";
import EventDetails from "../../../components/EventDetails";
import Tickets from "../../../components/Tickets";
import Image from "next/image";
import TickitButton from "../../../components/tickitButton";
import TickitTag from "../../../components/TickitTag";
import { useRouter } from "next/router";
import { getEvents } from "../../../axios/event.axios";
const Event = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [eventData, setEventData] = useState();

  const Event = async () => {
    let event = await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: { slug: slug },
      })
    );
    setEventData(event?.data[0]);
  };
  useEffect(() => {
    Event();
  }, [slug]);



  return (
    <div className={styles.eventWrapper}>
      {eventData && (
        <div>
          <div
            style={{
              backgroundImage: `url(${eventData.banner})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "calc(65vh - 70px)",
            }}
          >
            <div
              style={{
                height: "100%",
                background:
                  " linear-gradient(0deg,rgba(15,10,10, 1) 0%, rgba(15,10,10, 0.55) 25%, rgba(255, 204, 0, 0.31) 65%,rgba(255, 204, 0, 0.11) 100%)",
              }}
            />
          </div>
          <Container
            style={{
              marginTop: "-50px",
            }}
          >
            <Row>
              <Col lg={6}>
                <div className={styles.titleDiv}>
                  <p className="pageTitle">{eventData.name}</p>
                  <div style={{ marginLeft: "20px" }}>
                    <Image
                      width={32}
                      height={32}
                      alt="edit"
                      src="/images/edit.png"
                    />
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.titleButtons}>
                  <TickitButton disabled text="RESERVE" />
                  <TickitButton text="VIEW ACTIVITY" />
                </div>
              </Col>
              {/* <Row style={{ marginTop: "32px" }}>
               
                <div>
                  <TickitButton text="LAUNCH EVENT" />
                </div>
             
                <div className={styles.buttons}>
                  <TickitButton text="PAUSE SALE" />
                  <div style={{ marginLeft: "40px" }}>
                    <TickitButton style2 text="VIEW ACTIVITY" />
                  </div>
                </div>
             
                <div className={styles.buttons}>
                  <TickitButton text="RESUME SALES" />
                  <div style={{ marginLeft: "40px" }}>
                    <TickitButton text="CANCEL SALES" />
                  </div>
                  <div style={{ marginLeft: "40px" }}>
                    <TickitButton style2 text="VIEW ACTIVITY" />
                  </div>
                </div>
              </Row> */}
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EventDate data={eventData.eventDate} />
                <div style={{ marginLeft: "32px", display: "flex" }}>
                  <TickitTag disabled text={eventData.category.name} />
                  {/* <div style={{ marginLeft: "12px" }}>
                    <TickitTag disabled text="in 2 days" />
                  </div> */}
                </div>
              </div>

              <div style={{ marginTop: "14px" }}>
                <EventLocation location={eventData.location} fontSize="24px" />
              </div>
              <div style={{ marginTop: "14px" }}>
                <EventDetails width="60%" details={eventData.description} />
              </div>
            </Row>
            <Row
              style={{
                padding: "80px 0px",
              }}
            >
              <Tickets eventId={eventData.id} />
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Event;
