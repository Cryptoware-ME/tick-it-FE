import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Row, Col } from "react-bootstrap";
import TicketCard from "../TicketCard";
import TickitButton from "../tickitButton";
import AddExtraTicket from "../AddExtraTicketModal";
import { getEventTicketType } from "../../axios/eventTicketType.axios";
import {
  readContractCall,
  readContractCalls,
} from "@cryptogate/react-providers";
import NFTix721 from "../../abis/NFTix721.json";
import { postEventTicketTypeBatch } from "../../axios/eventTicketType.axios";

const Tickets = ({ eventId, contractAddress, isOwner }) => {
  const [eventTickets, setEventTickets] = useState([]);
  const [addticket, setAddTicket] = useState(false);
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [ticketsCallData, setTicketsCallData] = useState([]);

  const ticketType = readContractCalls(ticketsCallData);

  const setupTicketArray = async () => {
    let ticketTypesArray = [];

    for (let i = 0; i < eventTickets.length; i++) {
      const data = {
        address: contractAddress,
        method: "ticketTypes",
        abi: NFTix721.abi,
        args: [i],
      };
      ticketTypesArray.push(data);
    }
    if (ticketTypesArray.length) {
      setTicketsCallData(ticketTypesArray);
    }
  };

  const getTickets = async () => {
    getEventTicketType(
      JSON.stringify({
        where: { eventId: eventId },
      })
    ).then((data) => {
      setEventTickets(data.data);
    });
  };
  const handlePause = async (index) => {
    let tmpEvents = eventTickets;

    tmpEvents[index].isActive = true;
    postEventTicketTypeBatch(tmpEvents);
    setEventTickets(tmpEvents);
  };
  const handleResume = async (index) => {
    let tmpEvents = eventTickets;

    tmpEvents[index].isActive = false;
    postEventTicketTypeBatch(tmpEvents);
    setEventTickets(tmpEvents);
  };

  useEffect(() => {
    if (eventId) {
      getTickets();
    }
  }, [eventId]);

  useEffect(() => {
    if (eventTickets) {
      setupTicketArray();
    }
  }, [eventTickets]);

  return (
    <>
      {addTicketModal && (
        <AddExtraTicket
          setAddTicket={setAddTicketModal}
          tickets={eventTickets}
          contractAddress={contractAddress}
        />
      )}
      <div className={styles.launchButton}>
        <p className="section-title" style={{ marginRight: "24px" }}>
          Tickets
        </p>

        {isOwner && (
          <TickitButton
            text="ADD TICKET"
            onClick={() => {
              setAddTicketModal(true);
            }}
          />
        )}
      </div>

      <Row>
        <div>
          {eventTickets?.map((ticket, index) => (
            <TicketCard
              key={index}
              ticket={ticket}
              ticketFromContract={ticketType[index]}
              isOwner={isOwner}
              handlePause={() => handlePause(index)}
              handleResume={() => handleResume(index)}
            />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Tickets;
