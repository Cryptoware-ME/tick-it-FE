import { Container, Col, Row } from "react-bootstrap";
import styles from "./Activity.module.scss";
import ActivityCard from "../../components/ActivityCard";

const Activity = () => {
  // Hardcoded values: To Check
  return (
    <div className={styles.Wrapper}>
      <Container fluid>
        <div className={styles.title}>
          <p className="pageTitle">Activity</p>
        </div>
        <Row>
          <Col>
            <div className={styles.activityCard}>
              {/* Activity Cards */}
              <ActivityCard
                date="Wednesday 4 April 2023"
                time="11:34 AM"
                info="Bought 3 tickets for ACDC Live"
                highlight="ACDC Live"
              />
              <ActivityCard
                date="Wednesday 4 April 2023"
                time="11:35 AM"
                info="Sent 2 ACDC Live tickets to Edward Erdoğan"
                highlight="ACDC Live"
                highlightName="Edward Erdoğan"
              />

              {/* Repeat more activity cards here */}
            </div>

            {/* Additional Activity Card */}
            <div className={styles.activityCard2}>
              <p className={styles.activityDate}>Wednesday 4 April 2023</p>
              <ActivityCard
                time="11:34 AM"
                info="Bought 3 tickets for "
                highlight="ACDC Live"
              />
              <ActivityCard
                time="11:35 AM"
                info="Sent 2 ACDC Live tickets to Ginestra Zelensky"
                highlight="ACDC Live"
                highlightName="Ginestra Zelensky"
              />
              {/* Add more activity cards here */}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};


export default Activity;
