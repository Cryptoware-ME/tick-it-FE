import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Row } from "react-bootstrap";
import TicketCard from "../TicketCard";

const Tickets = () => {
  return (
    <>
      <p className="section-title">Tickets</p>
      <Row>
        <div>
          {[0, 1]?.map((category, index) => (
            <TicketCard index={index} />
          ))}
        </div>
      </Row>
    </>
  );
};

export default Tickets;
