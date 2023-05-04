import React, { useEffect, useState } from "react";
import styles from "./UserProfileDetails.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import EventDetails from "../../components/EventDetails";
import ProfileSocials from "../ProfileSocials";
const UserProfileDetails = ({ state = 1 }) => {
  return (
    <div className={styles.wrapper}>
      <Container>
        {state == 2 && (
          <div className={styles.edit}>
            <Image
              width={27}
              height={27}
              alt="user"
              src="/images/edit2.png"
              className={styles.editImage}
            />
          </div>
        )}
        <Row className={styles.profile}>
          <Col lg={4} className={styles.imageCol}>
            <Image
              width={208}
              height={208}
              alt="user"
              src="/images/userPhoto2.png"
            />
          </Col>
          <Col lg={8}>
            <div className={styles.profileHeader}>
              {state == 2 && (
                <div>
                  <div className={styles.view}>
                    <Image
                      width={22}
                      height={15}
                      alt="user"
                      src="/images/view.png"
                    />
                    <p className={styles.viewTitle}>View Public Profile</p>
                  </div>

                  <p className={styles.title}>Welcome,John Doe</p>
                </div>
              )}
              <p className={styles.profileTitle}>Factory People</p>
              {state == 1 && (
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
              )}
            </div>
            <div style={{ paddingTop: "15px" }}>
              <EventDetails details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " />
            </div>
            {state == 1 && (
              <div style={{ paddingTop: "55px" }}>
                <ProfileSocials
              
                  telegram="c"
                  instagram="c"
                  twitter="c"
                  discord="c"
                />
              </div>
            )}

            {state == 2 && (
              <div style={{ paddingTop: "55px" }}>
                <ProfileSocials instagram="c" twitter="c" />
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfileDetails;
