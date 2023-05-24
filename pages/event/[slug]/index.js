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
import {
  writeContractCall,
  readContractCall,
} from "@cryptogate/react-providers";
import NFTix721 from "../../../abis/NFTix721.json";
import { useAuth } from "../../../auth/useAuth";
import { useEthereum } from "@cryptogate/react-providers";
import { ConnectWalletComponent } from "@cryptogate/react-ui";
const Event = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { user } = useAuth();
  const { account } = useEthereum();
  const [contractAddress, setContractAddress] = useState();
  const [eventData, setEventData] = useState();
  const [isOwner, setIsOwner] = useState(false);

  const Event = async () => {
    let event = await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: { slug: slug },
      })
    );
    setEventData(event?.data[0]);
  };
  const pause = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "pause",
  });
  const unpause = writeContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "unpause",
  });

  const paused = readContractCall({
    address: contractAddress,
    abi: NFTix721.abi,
    method: "paused",
  });
  useEffect(() => {
    Event();
  }, [slug]);
  useEffect(() => {
    setContractAddress(eventData?.contractAddress);
  }, [eventData]);
  useEffect(() => {
    console.log("contractAddress: ", contractAddress);
  }, [contractAddress]);

  useEffect(() => {
    if (eventData && user) {
      let userId = user.id;
      let eventId = eventData.organization.ownerId;
      if (userId === eventId) {
        setIsOwner(true);
      }
    }
  }, [eventData && user]);

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
                  {isOwner && account && (
                    <div style={{ marginLeft: "20px" }}>
                      <Image
                        width={32}
                        height={32}
                        alt="edit"
                        src="/images/edit.png"
                      />
                    </div>
                  )}
                </div>
              </Col>
              <Col lg={6}>
                <div className={styles.titleButtons}>
                  {isOwner && (
                    <ConnectWalletComponent
                      ConnectedComponent={<></>}
                      ActiveComponent={
                        <TickitButton style2 text="connect wallet to edit" />
                      }
                    />
                  )}
                  {/* <TickitButton disabled text="RESERVE" />
                  <TickitButton text="VIEW ACTIVITY" /> */}
                </div>
              </Col>
              {isOwner && account && (
                <Row style={{ marginTop: "32px" }}>
                  {paused?.response == "false" && (
                    <div className={styles.buttons}>
                      <TickitButton
                        text="PAUSE SALE"
                        onClick={() => {
                          pause.send([], {
                            gasPrice: "80000000000",
                            gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
                          });
                        }}
                      />
                      {/* <div style={{ marginLeft: "40px" }}>
                    <TickitButton style2 text="VIEW ACTIVITY" />
                  </div> */}
                    </div>
                  )}
                  {paused?.response == "true" && (
                    <div className={styles.buttons}>
                      <TickitButton
                        text="RESUME SALES"
                        onClick={() => {
                          unpause.send([], {
                            gasPrice: "80000000000",
                            gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
                          });
                        }}
                      />
                      {/* <div style={{ marginLeft: "40px" }}>
                    <TickitButton text="CANCEL SALES" />
                  </div> */}
                      {/* <div style={{ marginLeft: "40px" }}>
                    <TickitButton style2 text="VIEW ACTIVITY" />
                  </div> */}
                    </div>
                  )}
                </Row>
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
              <Tickets isOwner={account && isOwner} eventId={eventData.id} />
            </Row>
          </Container>
        </div>
      )}
    </div>
  );
};

export default Event;
