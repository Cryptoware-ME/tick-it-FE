import EventCard from "../../components/EventCard";
import styles from "./host.module.scss";
import { Row ,Col,Container} from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";

const Host = () => {
  return (
    <Container fluid className={styles.host}>
    <Row>
      
      <Col lg={10} style={{ padding: "0px" }}>
        <Container fluid>
        <p className="pageTitle">Host</p>
            <Row className={styles.hostCard}>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8]?.map((event, index) => (
                <EventCard key={index} />
              ))}
            </Row>
           
         
          </Container>
        </Col>
      </Row>
    </Container>
     
   
  );
};
export default Host;
