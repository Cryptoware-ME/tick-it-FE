import { Container, Col, Row, Form } from "react-bootstrap";
import styles from "./Activity.module.scss";
import PageTitle from "../../components/pageTitle";

const Activity = () => {
  return (
    <div className={styles.Wrapper}>
      <Container fluid>
        <div className={styles.title}>
          <PageTitle text=" Activity" />
        </div>
        <Row>
          <Col>
            <div className={styles.activityCard}>
              <p className={styles.activityDate}>Wednesday 4 April 2023</p>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:34 AM </p>
                <p className={styles.activityinfo}>
                  Bought 3 tickets for{" "}
                  <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:35 AM </p>
                <p className={styles.activityinfo}>
                  Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                  tickets to{" "}
                  <span style={{ color: "#FFCC00" }}>Edward Erdoğan</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:34 AM </p>
                <p className={styles.activityinfo}>
                  Bought 3 tickets for{" "}
                  <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:35 AM </p>
                <p className={styles.activityinfo}>
                  Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                  tickets to{" "}
                  <span style={{ color: "#FFCC00" }}>Ginestra Zelensky</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:34 AM </p>
                <p className={styles.activityinfo}>
                  Bought 3 tickets for{" "}
                  <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:35 AM </p>
                <p className={styles.activityinfo}>
                  Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                  tickets to{" "}
                  <span style={{ color: "#FFCC00" }}>Edward Erdoğan</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:34 AM </p>
                <p className={styles.activityinfo}>
                  Bought 3 tickets for{" "}
                  <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:35 AM </p>
                <p className={styles.activityinfo}>
                  Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                  tickets to{" "}
                  <span style={{ color: "#FFCC00" }}>Ginestra Zelensky</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:34 AM </p>
                <p className={styles.activityinfo}>
                  Bought 3 tickets for{" "}
                  <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                </p>
              </div>
              <div className={styles.activity}>
                <p className={styles.activityTime}> 11:35 AM </p>
                <p className={styles.activityinfo}>
                  Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                  tickets to{" "}
                  <span style={{ color: "#FFCC00" }}>Edward Erdoğan</span>
                </p>
              </div>
              <div className={styles.activityCard2}>
                <p className={styles.activityDate}>Wednesday 4 April 2023</p>
                <div className={styles.activity}>
                  <p className={styles.activityTime}> 11:34 AM </p>
                  <p className={styles.activityinfo}>
                    Bought 3 tickets for{" "}
                    <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                  </p>
                </div>
                <div className={styles.activity}>
                  <p className={styles.activityTime}> 11:35 AM </p>
                  <p className={styles.activityinfo}>
                    Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                    tickets to{" "}
                    <span style={{ color: "#FFCC00" }}>Edward Erdoğan</span>
                  </p>
                </div>
                <div className={styles.activity}>
                  <p className={styles.activityTime}> 11:34 AM </p>
                  <p className={styles.activityinfo}>
                    Bought 3 tickets for{" "}
                    <span style={{ color: "#FFCC00" }}>ACDC Live</span>
                  </p>
                </div>
                <div className={styles.activity}>
                  <p className={styles.activityTime}> 11:35 AM </p>
                  <p className={styles.activityinfo}>
                    Sent 2 <span style={{ color: "#FFCC00" }}>ACDC Live</span>{" "}
                    tickets to{" "}
                    <span style={{ color: "#FFCC00" }}>Ginestra Zelensky</span>
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Activity;
