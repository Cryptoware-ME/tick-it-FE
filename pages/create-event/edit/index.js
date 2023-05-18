import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import EventDate from "../../../components/EventDate";
import EventLocation from "../../../components/EventLocation";
import EventDetails from "../../../components/EventDetails";
import Image from "next/image";
import TickitButton from "../../../components/tickitButton";
import TickitTag from "../../../components/TickitTag";
import AddTicket from "../../../components/AddTicketModal";
import { useCreateEventContext } from "../../../context/CreateEventProvider";
import TicketCardPreview from "../../../components/TicketCardPreview";
import { useRouter } from "next/router";
import { useAuth } from "../../../auth/useAuth";
import { useAuthModalContext } from "../../../context/AuthModalProvider";
// import { createEvent } from "../../../hooks/useLaunchpad";
import {
  useEthereum,
  writeContractCall,
  useNetworkInfo,
} from "@cryptogate/react-providers";
import { ConnectWalletComponent } from "@cryptogate/react-ui";
const Edit = () => {
  const { user } = useAuth();
  const { gasPrice } = useNetworkInfo();
  const { account } = useEthereum();
  const { setModalOpen } = useAuthModalContext();
  const [eventData, setEventData] = useState();
  const [tickets, setTickets] = useState([]);
  const [addticket, setAddTicket] = useState(false);
  const { eventValues } = useCreateEventContext();
  const router = useRouter();
  const createEvent = writeContractCall({
    contract: "NFTixLaunchpad",
    method: "createERC721",
  });
  useEffect(() => {
    if (eventValues) {
      setEventData(eventValues);
    } else {
      router.push("/create-event");
    }
  }, [eventValues]);

  const handleRemoveTicket = (ticketName) => {
    const tmpTickets = tickets.slice();

    const updatedTickets = tmpTickets.filter(
      (tkt) => tkt?.name?.toLowerCase() !== ticketName?.toLowerCase()
    );

    setTickets(updatedTickets);
  };
  useEffect(() => {
    if (!user) {
      setModalOpen(true);
    }
  }, [user]);

  return (
    <div className={styles.eventWrapper}>
      {addticket && (
        <AddTicket
          setAddTicket={setAddTicket}
          setTickets={setTickets}
          tickets={tickets}
        />
      )}
      <div>
        <ConnectWalletComponent />
        <div
          style={{
            backgroundImage: `url(${eventData?.banner})`,
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
            <Col>
              <div className={styles.titleDiv}>
                <p className="pageTitle">{eventData?.name}</p>
                <div style={{ marginLeft: "20px" }}>
                  <Image
                    width={24}
                    height={24}
                    alt="edit"
                    src="/images/edit.png"
                  />
                </div>
              </div>
            </Col>

            <Row style={{ marginTop: "32px" }}>
              <div>
                <TickitButton
                  disabled={tickets.length == 0}
                  text="LAUNCH EVENT"
                  onClick={() => {
                    // console.log("gasPrice:", gasPrice?.toString());
                    console.log(
                      "NEXT_PUBLIC_GAS_LIMIT: ",
                      Number(process.env.NEXT_PUBLIC_GAS_LIMIT)
                    );
                    createEvent.send(
                      [
                        "event1",
                        "",
                        "",
                        [100000000000000],
                        [1000],
                        ["0xb2EE260a1347487D156Ede50a788D00695b7C1c2"],
                        [100],
                        "0xd4453790033a2bd762f526409b7f358023773723d9e9bc42487e4996869162b6",
                      ],
                      {
                        gasPrice: "80",
                        gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
                      }
                    );
                  }}
                />
              </div>
            </Row>
            <div
              style={{
                marginTop: "32px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <EventDate data={eventData?.date} />
              <div style={{ marginLeft: "32px", display: "flex" }}>
                <TickitTag disabled text={eventData?.category} />
              </div>
            </div>

            <div style={{ marginTop: "14px" }}>
              <EventLocation location={eventData?.location} fontSize="24px" />
            </div>
            <div style={{ marginTop: "14px" }}>
              <EventDetails width="60%" details={eventData?.description} />
            </div>
          </Row>
          <Row
            style={{
              padding: "80px 0px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <p className="section-title" style={{ marginRight: "24px" }}>
                Tickets
              </p>

              <TickitButton
                text="ADD TICKET"
                onClick={() => {
                  setAddTicket(true);
                }}
              />
            </div>
            {tickets.length == 0 && (
              <EventDetails
                width="100%"
                details="To launch your event you need to add al least 1 Ticket !"
              />
            )}
            {tickets?.map((ticket, index) => (
              <TicketCardPreview
                ticket={ticket}
                handleRemoveTicket={handleRemoveTicket}
                key={index}
              />
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Edit;
