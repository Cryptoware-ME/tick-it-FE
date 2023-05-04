import { Col, Row, Modal, Container, Alert, Form } from "react-bootstrap";
import styles from "./contactUs.module.scss";
import TickitButton from "../../components/tickitButton";
import ProfileSocials from "../../components/ProfileSocials";
const ContactUs = () => {
  return (
    <div className={styles.Wrapper}>
      <Container>
        <div className={styles.container}>
          <p className={styles.contactUsTitle}> Contact Us</p>
        </div>
        <Row>
          <Col lg={6}>
            <div className={styles.messageContainer}>
              <p className={styles.messageTitle}>Send us a message</p>
              <p className={styles.email}>Email</p>

              <div className={styles.inputDiv}>
                <input name="email" type="email" className="modalInput" />
              </div>
              <div className={styles.message}>
                <p className={styles.email}>Message</p>

                <div className={styles.messageInput}>
                  <textarea
                    name="description"
                    type="description"
                    className="modalInput"
                    style={{ minHeight: "150px" }}
                  />
                </div>
              </div>
              <div style={{ padding: "60px 0px" }}>
                <TickitButton text="SEND MESSAGE" />
              </div>
            </div>
          </Col>
          <Col lg={6} >
            <div className={styles.card}>
              <p className={styles.cardTitle}>Headquaters</p>
              <p className={styles.cardInfo}>Lebanon,Beirut</p>
              <p className={styles.cardInfo}>Address line</p>
              <p className={styles.cardInfo}>Headquaters</p>
            </div>
            <div style={{ padding: "60px 0px" }}>
              <div className={styles.card}>
                <p className={styles.cardTitle}>Headquaters</p>
                <p className={styles.cardInfo}>Lebanon,Beirut</p>
                <p className={styles.cardInfo}>Address line</p>
                <p className={styles.cardInfo}>Headquaters</p>
              </div>
            </div>
            <div  style={{ padding: "60px 0px" }}>
              <ProfileSocials
                centered
                telegram="c"
                instagram="c"
                twitter="c"
                discord="c"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default ContactUs;
