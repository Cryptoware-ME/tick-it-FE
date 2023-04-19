import EventCard from "../../components/EventCard";
import PageTitle from "../../components/pageTitle";
import styles from "./host.module.scss";
import { Row ,Col,Container} from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";

const Host = () => {
  return (
    <Container fluid className={styles.host}>
    <Row>
      <Col lg={2} style={{ padding: "0px" }}>
        <DashboardBar />
      </Col>
      <Col lg={10} style={{ padding: "0px" }}>
        <Container fluid>
 
      <PageTitle text=" Host" />
            <Row>
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
