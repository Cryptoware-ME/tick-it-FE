import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Row, Col } from "react-bootstrap";
import TicketCard from "../TicketCard";
import TickitButton from "../tickitButton";
import AddTicket from "../AddTicketModal";
import { getEventTicketType } from "../../axios/eventTicketType.axios";

const Tickets = ({ evntId, isOwner }) => {
  const [eventTickets, setEventTickets] = useState();

  const Tickets = async () => {
    let tickets = await getEventTicketType(
      JSON.stringify({
        where: { evntId: evntId },
      })
    );
    setEventTickets(tickets.data);
  };
  useEffect(() => {
    Tickets();
  }, [evntId]);

  const [addticket, setAddTicket] = useState(false);
  return (
    <>
      {addticket && <AddTicket setAddTicket={setAddTicket} />}
      <div className={styles.launchButton}>
        <p className="section-title" style={{ marginRight: "24px" }}>
          Tickets
        </p>
        {isOwner && (
          <TickitButton
            text="ADD TICKET"
            onClick={() => {
              setAddTicket(true);
            }}
          />
        )}
      </div>

      <Row>
        <div>
          {eventTickets?.map((ticket, index) => (
            <TicketCard isOwner={isOwner} key={index} ticket={ticket} />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Tickets;
