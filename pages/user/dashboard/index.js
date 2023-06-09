import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { useAuth } from "../../../auth/useAuth";
import { getOrganization } from "../../../axios/organization.axios";

import DashboardBar from "../../../components/DashboardBar";
import OrganizationCard from "../../../components/OrganizationCard";
import AddOrganizationCard from "../../../components/AddOrganizationCard";
import UpcomingEventsCard from "../../../components/UpcomingEventsCard";

import styles from "./Dashboard.module.scss";

const Dashboard = ({}) => {
  const [organizationData, setOrganizationData] = useState();

  const { user } = useAuth();

  const getOrganizationDetails = async (id) => {
    let organization = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      })
    );
    setOrganizationData(organization?.data);
  };

  useEffect(() => {
    if (user) {
      if (user?.user) {
        getOrganizationDetails(user?.user.id);
      } else {
        getOrganizationDetails(user?.id);
      }
    }
  }, [user]);

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
                  {organizationData?.map((organization, index) => (
                    <OrganizationCard key={index} data={organization} />
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
