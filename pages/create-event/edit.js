import React, { useEffect, useState } from "react";
import styles from "./Edit.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import EventDate from "../../components/EventDate";
import EventLocation from "../../components/EventLocation";
import EventDetails from "../../components/EventDetails";
import Image from "next/image";
import TickitButton from "../../components/tickitButton";
import TickitTag from "../../components/TickitTag";
import AddTicket from "../../components/AddTicketModal";

import TicketCardPreview from "../../components/TicketCardPreview";
import { useAuth } from "../../auth/useAuth";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import { useLaunchpad } from "../../hooks/useLaunchpad";
import { useEthereum } from "@cryptogate/react-providers";
import { ConnectWalletComponent } from "@cryptogate/react-ui";
import { useRouter } from "next/router";
import { postEvent } from "../../axios/event.axios";
import { getOrganization } from "../../axios/organization.axios";
import { postEventTicketTypeBatch } from "../../axios/eventTicketType.axios";

const Edit = ({ data, setAddTickets, categoryId }) => {
  const { user } = useAuth();
  const { account } = useEthereum();
  const { setModalOpen } = useAuthModalContext();
  const [eventData, setEventData] = useState();
  const [tickets, setTickets] = useState([]);
  const [ticketPrices, setTicketPrices] = useState([]);
  const [ticketSupply, setTicketSupply] = useState([]);
  const router = useRouter();
  const [addticket, setAddTicket] = useState(false);
  const [organization, setOrganization] = useState("");

  const { createEvent } = useLaunchpad();

  const handleLaunch = async () => {
    createEvent.send(
      [
        eventData?.name,
        eventData?.symbol,
        "",
        ticketPrices,
        ticketSupply,
        [
          "0xdBeF99c50CE30Ac21b71FAE4A0691b95E0e6E41B",
          "0xb2EE260a1347487D156Ede50a788D00695b7C1c2",
        ],
        [10, 90],
        10,
        "0x815ae514cff4150ec895809ae516283047f6dff8e679158b151a8495f70fc929",
      ],
      {
        gasPrice: "80000000000",
        gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
      }
    );
  };

  const getOrganizationDetails = async (id) => {
    let organization = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      })
    );
    setOrganization(organization.data[0]);
  };

  const launchRes = async () => {
    const res = await createEvent.response.wait();
    postEvent({
      name: data.name,
      slug: data.symbol,
      description: data.description,
      eventDate: data.date,
      location: data.location,
      banner: data.banner,
      media: "",
      urls: "",
      contractAddress: res.events[0].address,
      totalSupply: ticketSupply.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0),
      categoryId: categoryId,
      organizationId: organization.id,
    }).then((data) => {
      let ticketsData = tickets.map((ticket, index) => {
        return {
          eventId: data.id,
          name: ticket.name,
          description: ticket.description,
          supply: ticket.supply,
          price: ticket.price * 10 ** 18,
          image: ticket.image,
        };
      });
      postEventTicketTypeBatch(ticketsData).then(() => {
        router.push(`/event/${data.slug}`);
      });
    });
  };

  const handleRemoveTicket = (ticketName) => {
    const tmpTickets = tickets.slice();

    const updatedTickets = tmpTickets.filter(
      (tkt) => tkt?.name?.toLowerCase() !== ticketName?.toLowerCase()
    );
    setTickets(updatedTickets);
  };

  useEffect(() => {
    if (createEvent.response) {
      launchRes();
    }
  }, [createEvent.response]);

  useEffect(() => {
    if (data) {
      setEventData(data);
    } else {
      setAddTickets(false);
    }
  }, [data]);
  useEffect(() => {
    if (!user) {
      setModalOpen(true);
    } else if (user?.user) {
      getOrganizationDetails(user?.user.id);
    } else {
      getOrganizationDetails(user?.id);
    }
  }, [user]);

  useEffect(() => {
    setTicketPrices(
      tickets.map((ticket) => {
        let price = ticket.price * 10 ** 18;
        return price;
      })
    );
    let supplyAccumulated = tickets.reduce((acc, ticket) => {
      let lastSupply = acc[acc.length - 1] || 0;
      let currentSupply = ticket.supply + lastSupply;
      acc.push(currentSupply);
      return acc;
    }, []);
    setTicketSupply(supplyAccumulated);
  }, [tickets]);

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
                {/* <div style={{ marginLeft: '20px' }}>
                  <Image
                    width={24}
                    height={24}
                    alt="edit"
                    src="/images/edit.png"
                  />
                </div> */}
              </div>
            </Col>

            <Row style={{ marginTop: "32px" }}>
              {tickets.length > 0 && (
                <div>
                  {account ? (
                    <TickitButton
                      text="LAUNCH EVENT"
                      onClick={async () => {
                        handleLaunch();
                      }}
                    />
                  ) : (
                    <ConnectWalletComponent
                      ActiveComponent={
                        <TickitButton text="connect wallet to launch" style2 />
                      }
                    />
                  )}
                </div>
              )}
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
