import React, { useEffect, useState } from "react";
import styles from "./UserProfileDetails.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import EventDetails from "../../components/EventDetails";
import ProfileSocials from "../ProfileSocials";
const UserProfileDetails = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row className={styles.profile}>
          <Col lg={4} className={styles.imageCol}>
            <Image
              width={300}
              height={300}
              alt="user"
              src="/images/userPhoto.png"
            />
          </Col>
          <Col lg={8}>
            <div className={styles.profileHeader}>
              <p className={styles.profileTitle}>Factory People</p>
              <div
                onClick={() => {
                  console.log("report");
                }}
                className={styles.reportDiv}
              >
                <Image
                  width={12}
                  height={12}
                  alt="report"
                  src="/images/reportIcon.png"
                />
                <p className={styles.profileReport}>Report</p>
              </div>
            </div>
            <div style={{ paddingTop: "15px" }}>
              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            <div style={{ paddingTop: "55px" }}>
              <ProfileSocials
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

export default UserProfileDetails;
