import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Row, Col } from "react-bootstrap";
import TicketCard from "../TicketCard";
import TickitButton from "../tickitButton";
import AddTicket from "../AddTicketModal";

const Tickets = () => {
  const [addticket, setAddTicket] = useState(false);
  return (
    <>
      {addticket && <AddTicket setAddTicket={setAddTicket} />}
      <div className={styles.launchButton}>
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

      <Row>
        <div>
          {[0, 1]?.map((category, index) => (
            <TicketCard key={index} index={index} />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Tickets;
