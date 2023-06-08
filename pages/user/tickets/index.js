import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../../components/DashboardBar";
import CartTicket from "../../../components/CartTicket";
import Loader from "../../../components/loader/loader";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    let temp = localStorage.getItem("tickets");
    let tickets = JSON.parse(temp);
    setTickets(tickets);
  }, []);

  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="tickets" />
        </Col>
        <Col lg={10} style={{ paddingBottom: "48px" }}>
          <div className={styles.section}>
            <p style={{ marginBottom: "40px" }} className="section-title">
              My Tickets
            </p>
            {tickets?.length > 0 ? (
              <>
                {tickets?.map((event, index) => (
                  <CartTicket key={index} itemData={event} />
                ))}
              </>
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tickets;
