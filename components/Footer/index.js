import React, { useEffect, useState } from "react";
import styles from "./Footer.module.scss";
import { Container, Col, Row, Form } from "react-bootstrap";
import Link from "next/link";
import {
  faMediumM,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-toastify";

const Footer = () => {
  const [email, setEmail] = useState(null);
  const [validmail, setValidMail] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  async function addEmail(email) {
    if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setSubmitted(true);
      setValidMail(true);
    } else {
      setValidMail(false);
      setSubmitted(false);
    }
  }
  return (
    <div className={styles.footerWrapper}>
      <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={3}
        pauseOnHover
        autoClose={2000}
      />
      <Container className={styles.footer}>
        <Row>
          <Col lg={9} md={8} sm={7} className={styles.linksWrapper}>
            <Col lg={3} md={4} sm={6} xs={6} className={styles.linksCol}>
              <Link href="#" className={styles.footerLink}>
                Explore
              </Link>
              <Link href="#" className={styles.footerLink}>
                Create Event
              </Link>
              <Link href="#" className={styles.footerLink}>
                About
              </Link>
              <Link href="#" className={styles.footerLink}>
                Support
              </Link>
            </Col>
            <Col lg={3} md={4} sm={6} xs={6} className={styles.linksCol}>
              <Link href="#" className={styles.footerLink}>
                Terms & Conditions
              </Link>
              <Link href="#" className={styles.footerLink}>
                FAQ
              </Link>
              <Link href="#" className={styles.footerLink}>
                Privacy
              </Link>
            </Col>
          </Col>
          <Col lg={3} md={4} sm={5}>
            <div className={styles.rightColFooterPart}>
              <span className={styles.callForSubscription}>
                Subscribe to our newsletter
              </span>
              <div style={{ position: "relative" }}>
                <Form.Control
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="modalInput"
                  placeholder="Email"
                />

                <div
                  className={styles.arrowRightWrapper}
                  onClick={() => {
                    addEmail(email);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={styles.arrowRight}
                    style={{ color: "white" }}
                  />
                </div>
              </div>
              {!validmail && (
                <div className={styles.invalidMail}>Invalid email address</div>
              )}
              {submitted && (
                <div className={styles.mailSubmitted}>Email submitted!</div>
              )}
              <div className={styles.socialIcons}>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className={styles.socialIcon}
                  onClick={() => {
                    window.open("https://www.cryptoware.me", "_blank");
                  }}
                />
                <FontAwesomeIcon
                  icon={faTwitter}
                  className={styles.socialIcon}
                  onClick={() => {
                    window.open("https://www.cryptoware.me", "_blank");
                  }}
                />
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className={styles.socialIcon}
                  onClick={() => {
                    window.open("https://www.cryptoware.me", "_blank");
                  }}
                />

                <FontAwesomeIcon
                  icon={faMediumM}
                  className={styles.socialIcon}
                  onClick={() => {
                    window.open("https://www.cryptoware.me", "_blank");
                  }}
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
