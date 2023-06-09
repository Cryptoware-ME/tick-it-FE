import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../../components/DashboardBar";
import OrganizationCard from "../../../components/OrganizationCard";
import AddOrganizationCard from "../../../components/AddOrganizationCard";
import UpcomingEventsCard from "../../../components/UpcomingEventsCard";

const Dashboard = ({}) => {
  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="dashboard" />
        </Col>

        <Col lg={10} style={{ paddingBottom: "48px" }}>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <p style={{ marginBottom: "40px" }} className="section-title">
                  Organizations
                </p>
                <Row>
                  {[0, 1, 2]?.map((event, index) => (
                    <OrganizationCard key={index} />
                  ))}
                  <AddOrganizationCard />
                </Row>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <div className={styles.header}>
                  <p className="section-title">Upcoming Events</p>
                  <p className={styles.viewAll}>View All Tickets</p>
                </div>
                <Row>
                  {[0, 1, 2, 3]?.map((event, index) => (
                    <UpcomingEventsCard key={index} />
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
