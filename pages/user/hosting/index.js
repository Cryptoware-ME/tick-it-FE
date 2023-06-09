import EventCard from "../../../components/EventCard";
import styles from "./hosting.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import DashboardBar from "../../../components/DashboardBar";
const Hosting = () => {
  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="hosting" />
        </Col>

        <Col lg={10} style={{ padding: "0px" }}>
          <Container fluid>
            <p
              className="pageTitle"
              style={{ marginBottom: "24px", marginTop: "24px" }}
            >
              Host
            </p>
            <Row className={styles.hostCard}>
              {[1, 2, 3]?.map((event, index) => (
                <EventCard key={index} eventData={event} />
              ))}
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default Hosting;
