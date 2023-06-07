import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../../components/DashboardBar";
import OrganizationCard from "../../../components/OrganizationCard";
import AddOrganizerCard from "../../../components/AddOrganizerCard";
import UpcomingEventsCard from "../../../components/UpcomingEventsCard";

const Dashboard = ({}) => {
  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="dashboard" />
        </Col>

        <Col lg={10} style={{ padding: "0px" }}>
          <Container fluid>
            <Row className={styles.organizationSection}>
              <p style={{ marginBottom: "40px" }} className="section-title">
                Organizations
              </p>

              {[0, 1, 2]?.map((event, index) => (
                <OrganizationCard key={index} />
              ))}
              <AddOrganizerCard />
            </Row>
            <Row style={{ padding: "24px 0px" }}>
              <div className={styles.header}>
                <p className="section-title">Upcoming Events</p>
                <p className={styles.viewAll}>View All Tickets</p>
              </div>
              {[0, 1, 2, 3]?.map((event, index) => (
                <UpcomingEventsCard key={index} />
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
