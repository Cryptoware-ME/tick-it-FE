import EventCard from "../../components/EventCard";
import styles from "./host.module.scss";
import { Row, Col, Container } from "react-bootstrap";

const Host = () => {
  return (
 
          <Container >
            <p
              className="pageTitle"
              style={{ marginBottom: "24px", marginTop: "24px" }}
            >
              Host
            </p>
            <Row className={styles.hostCard}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8]?.map((event, index) => (
                <EventCard key={index} />
              ))}
            </Row>
          </Container>
      
  );
};
export default Host;
