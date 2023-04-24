import React from "react";
import styles from "./organization.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import UserProfileDetails from "../../components/UserProfileDetails";
import OrganizationSidebar from "../../components/OrganizationSidebar";
import OrganizationEvents from "../../components/organizationEvents";
import OrganizationTeam from "../../components/OrganizationTeam";
const Organization = () => {
  let menu = "team";
  return (
    <Container fluid className={styles.organization}>
      <UserProfileDetails state={2} />
      <Row>
        <Col lg={3} style={{ padding: "0px" }}>
          <OrganizationSidebar />
        </Col>
        {menu == "allevent" && (
          <Col lg={9} style={{ padding: "15px 0px" }}>
            <OrganizationEvents />
          </Col>
        )}
        {
          menu == "team" && 
        
        <Col lg={9} style={{ padding: "15px 0px" }}>
          <OrganizationTeam />
        </Col>
        }
      </Row>
    </Container>
  );
};
export default Organization;
