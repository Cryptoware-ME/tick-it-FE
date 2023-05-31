import React, { useEffect, useState } from "react";
import styles from "./Tickets.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";
import CartTicket from "../../components/CartTicket";
import Loader from "../../components/loader/loader";

const Tickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    let temp = localStorage.getItem("tickets");
    let tickets = JSON.parse(temp);
    console.log("tickets: ", JSON.parse(temp));
    setTickets(tickets);
  }, []);

  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar />
        </Col>
        <Col lg={10} style={{ padding: "40px 10px" }}>
          <Container fluid>
            <Row>
              <p className="pageTitle" style={{ marginBottom: "24px" }}>
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
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Tickets;
