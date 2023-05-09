import React, { useEffect, useState } from "react";
import styles from "./Dashboard.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";
import OrganizationCard from "../../components/OrganizationCard";
import AddorganizerCard from "../../components/AddorganizerCard";
import UpcomingEventsCard from "../../components/UpcomingEventsCard";
import Settings from "../../components/settings";
import Funds from "../../components/funds";
import Host from "../../components/host";
import Activity from "../../components/Activity";

const Dashboard = ({}) => {
  let menu = "funds";
  return (
    <Container fluid className={styles.dashboardWrapper}>
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar />
        </Col>

        <Col lg={10} style={{ padding: "0px" }}>
          {menu == "dashboard" && (
            <Container fluid>
              <Row className={styles.organizationSection}>
                <p style={{ marginBottom: "40px" }} className="section-title">
                  Organizations
                </p>

                {[0, 1, 2]?.map((event, index) => (
                  <OrganizationCard key={index} />
                ))}
                <AddorganizerCard />
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
          )}

          {menu == "settings" && <Settings />}

          {menu == "funds" && <Funds />}
          {menu == "host" && <Host />}
          {menu == "activity" && <Activity />}
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
