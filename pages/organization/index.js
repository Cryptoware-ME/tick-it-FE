import React from "react";
import styles from "./organization.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import UserProfileDetails from "../../components/UserProfileDetails";
import OrganizationSidebar from "../../components/OrganizationSidebar";
import OrganizationEvents from "../../components/organizationEvents";
import OrganizationTeam from "../../components/OrganizationTeam";
import OrganizationSettings from "../../components/OrganizationSettings";
const Organization = () => {
  let menu = "team";
  return (
    <Container fluid className={styles.organization}>
      <Row>
        <UserProfileDetails state={2} />
      </Row>
      <Row>
        <Col lg={3} style={{ padding: "0px" }}>
          <OrganizationSidebar />
        </Col>
        {menu == "allevent" && (
          <Col lg={9} style={{ padding: "15px 0px" }}>
            <OrganizationEvents />
          </Col>
        )}
        {menu == "team" && (
          <Col lg={9} style={{ padding: "15px 0px" }}>
            <OrganizationTeam />
          </Col>
        )}
        {menu == "payment" && (
          <Col lg={9} style={{ padding: "15px 0px" }}>
            <OrganizationSettings />
          </Col>
        )}
      </Row>
    </Container>
  );
};
export default Organization;
