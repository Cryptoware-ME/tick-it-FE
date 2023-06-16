import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuth } from "../../../auth/useAuth";
import { useEthereum } from "@cryptogate/react-providers";
import { ConnectWalletComponent } from "@cryptogate/react-ui";
import { usePause } from "../../../hooks/use721";
import Image from "next/image";

import EventDate from "../../../components/EventDate";
import EventLocation from "../../../components/EventLocation";
import EventDetails from "../../../components/EventDetails";
import Tickets from "../../../components/Tickets";
import TickitButton from "../../../components/tickitButton";
import TickitTag from "../../../components/TickitTag";
import EditEventModal from "../../../components/EditEventModal";
import AddExtraTicketModal from "../../../components/AddExtraTicketModal";

import { getEvents } from "../../../axios/event.axios";
import { getEventTicketType } from "../../../axios/eventTicketType.axios";

import styles from "./Event.module.scss";

const Event = () => {
  // States
  const [editEventModal, setEditEventModal] = useState(false);
  const [contractAddress, setContractAddress] = useState();
  const [eventData, setEventData] = useState();
  const [isOwner, setIsOwner] = useState(false);
  const [eventTickets, setEventTickets] = useState([]);
  const [refetchEvent, setRefetchEvent] = useState(false);
  const [ended, setEnded] = useState(false);
  const [update, setUpdate] = useState(false);
  const [loading, setLoading] = useState(false);

  // Hooks
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useAuth();
  const { account } = useEthereum();
  const { pause, unpause, paused } = usePause({ contractAddress });

  // Functions
  // Gets the event details with the category and organization included
  const getEvent = async () => {
    await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: { slug: slug },
      })
    ).then((data) => {
      setEventData(data?.data[0]);
      setContractAddress(data?.data[0]?.contractAddress);
      getTickets(data?.data[0].id);
    });
    setRefetchEvent(false);
  };

  // Gets the tickets related to event
  const getTickets = async (eventId) => {
    getEventTicketType(
      JSON.stringify({
        where: { eventId: eventId },
      })
    ).then((data) => {
      setEventTickets(data.data);
    });
  };

  const handleChangeState = async () => {
    if (paused.response == "true") {
      unpause.send([], {
        gasPrice: Number(process.env.NEXT_PUBLIC_GAS_PRICE),
        gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
      });
    } else {
      pause.send([], {
        gasPrice: Number(process.env.NEXT_PUBLIC_GAS_PRICE),
        gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
      });
    }
  };
  const waitResponse = async () => {
    if (paused.response == "true") {
      await unpause.response.wait();
      setLoading(false);
      location.reload();
    }
    if (paused.response == "false") {
      await pause.response.wait();
      setLoading(false);
      location.reload();
    }
  };

  // Use Effects
  useEffect(() => {
    if (slug) {
      getEvent();
    }
  }, [slug, refetchEvent]);

  useEffect(() => {
    if (eventData) {
      let currentDate = new Date();
      if (new Date(eventData.eventDate) < currentDate) {
        setEnded(true);
      }
    }
    if (eventData && user) {
      let userId = user.user ? user.user.id : user.id;
      let eventUserId = eventData.organization.ownerId;
      if (userId === eventUserId) {
        setIsOwner(true);
      }
    }
  }, [eventData || user || update]);

  useEffect(() => {
    if (pause.response || unpause.response) {
      setLoading(true);
      waitResponse();
    }
  }, [pause.response || unpause.response]);

  return (
    <div className={styles.eventWrapper}>
      {editEventModal && (
        <EditEventModal
          setEditEventModal={setEditEventModal}
          symbol={eventData.symbol}
          id={eventData.id}
          isPublished={eventData.isPublished}
          setUpdate={setUpdate}
          eventDetails={eventData}
        />
      )}

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
                  {isOwner && account && (
                    <div style={{ marginLeft: "20px" }}>
                      <Image
                        width={24}
                        height={24}
                        alt="edit"
                        src="/images/edit.png"
                        onClick={() => {
                          setEditEventModal(true);
                        }}
                        style={{ cursor: "pointer" }}
                      />
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={6}>
                {!ended && (
                  <div className={styles.titleButtons}>
                    {isOwner && (
                      <ConnectWalletComponent
                        ConnectedComponent={<></>}
                        ActiveComponent={
                          <TickitButton style2 text="connect wallet to edit" />
                        }
                      />
                    )}
                    {/* Reserve and View Activity button */}
                    {/* <TickitButton disabled text="RESERVE" />
                  <TickitButton text="VIEW ACTIVITY" /> */}
                  </div>
                )}
              </Col>
              {!ended && (
                <>
                  {isOwner && account && (
                    <Row style={{ marginTop: "32px" }}>
                      {paused.response && (
                        <div className={styles.buttons}>
                          <TickitButton
                            text={
                              paused.response == "true"
                                ? "RESUME SALES"
                                : "PAUSE SALE"
                            }
                            isLoading={loading}
                            disabled={loading}
                            onClick={() => {
                              handleChangeState();
                            }}
                          />
                          {/* <div style={{ marginLeft: "40px" }}>
                      <TickitButton style2 text="VIEW ACTIVITY" />
                      </div> */}
                        </div>
                      )}
                    </Row>
                  )}
                </>
              )}
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
              <Tickets
                tickets={eventTickets}
                contractAddress={eventData.contractAddress}
                isOwner={account && isOwner}
                setRefetchEvent={setRefetchEvent}
                ended={ended}
              />
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Event;
