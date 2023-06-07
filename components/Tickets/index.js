import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Row, Col } from "react-bootstrap";
import TicketCard from "../TicketCard";
import TickitButton from "../tickitButton";
import {
  readContractCall,
  readContractCalls,
} from "@cryptogate/react-providers";
import NFTix721 from "../../abis/NFTix721.json";
import AddExtraTicketModal from "../AddExtraTicketModal";

const Tickets = ({ tickets, contractAddress, isOwner, setRefetchEvent }) => {

  // States
  const [addticket, setAddTicket] = useState(false);
  const [addTicketModal, setAddTicketModal] = useState(false);
  const [ticketsCallData, setTicketsCallData] = useState([]);

  // Contract Calls
  const ticketFromContract = readContractCalls(ticketsCallData);

  // Functions
  const getTicketsFromContract = async () => {
    let ticketTypes = [];

    for (let i = 0; i < tickets.length; i++) {
      const data = {
        address: contractAddress,
        method: "ticketTypes",
        abi: NFTix721.abi,
        args: [i],
      };
      ticketTypes.push(data);
    }

    if (ticketTypes.length) {
      setTicketsCallData(ticketTypes);
    }
  };

  // Use Effects
  useEffect(() => {
    if (tickets) {
      getTicketsFromContract();
    }
  }, [tickets]);

  return (
    <>
      {addTicketModal && (
        <AddExtraTicketModal
          setAddTicket={setAddTicketModal}
          tickets={tickets}
          contractAddress={contractAddress}
          setRefetchEvent = {setRefetchEvent}
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
          {tickets?.map((ticket, index) => (
            <TicketCard
              key={index}
              ticket={ticket}
              ticketFromContract={ticketFromContract[index]}
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
