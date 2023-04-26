import React, { useEffect, useState } from "react";
import styles from "./Settings.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import DashboardBar from "../../components/DashboardBar";
import YellowButton from "../../components/YellowButton";
import Link from "next/link";
import Switch from "../../components/Switch";
import { useAuth } from "../../auth/useAuth";

const Settings = () => {
  const { user } = useAuth();
  const [eventCheck, setEventCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [newsCheck, setNewsCheck] = useState(true);
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [mobileEdit, setMobileEdit] = useState(false);

  return (
    <Container fluid className={styles.wrapper}>
      <Row  className={styles.setting} >
        <Col lg={10} style={{ padding: " 0px" }}>
          <Container >
            <Row className={styles.settingRow}>
              <p className={styles.sectionTitle}>Account Settings</p>
              <Row>
                <Col md={4} className={styles.settingCol}>
                  <p className={styles.settingCategory}>Username</p>
                </Col>
                <Col md={4} className={styles.settingCol}>
                  {!userNameEdit && (
                    <p className={styles.settingValue}>{user?.username}</p>
                  )}
                  {userNameEdit && (
                    <input
                      type="text"
                      defaultValue={user?.username}
                      placeholder="Enter Username"
                      onChange={(e) => {}}
                      required
                      className={styles.inputBar}
                    />
                  )}
                </Col>
                <Col md={4} className={styles.settingCol}>
                  {!userNameEdit && (
                    <YellowButton
                      text="Edit"
                      onClick={() => {
                        setUserNameEdit(true);
                      }}
                    />
                  )}
                  {userNameEdit && (
                    <YellowButton
                      text="Save"
                      style2={true}
                      onClick={() => {
                        setUserNameEdit(false);
                      }}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                <Col md={4} className={styles.settingCol}>
                  <p className={styles.settingCategory}>Email</p>
                </Col>
                <Col md={4} className={styles.settingCol}>
                  {!emailEdit && (
                    <p className={styles.settingValue}>{user?.email}</p>
                  )}
                  {emailEdit && (
                    <input
                      type="text"
                      defaultValue={user?.email}
                      placeholder="Enter Email"
                      onChange={(e) => {}}
                      required
                      className={styles.inputBar}
                    />
                  )}
                </Col>
                <Col md={4} className={styles.settingCol}>
                  {!emailEdit && (
                    <YellowButton
                      text="Edit"
                      onClick={() => {
                        setEmailEdit(true);
                      }}
                    />
                  )}
                  {emailEdit && (
                    <YellowButton
                      text="Save"
                      style2={true}
                      onClick={() => {
                        setEmailEdit(false);
                      }}
                    />
                  )}
                </Col>
              </Row>
              <Row>
                <Col md={4} className={styles.settingCol}>
                  <p className={styles.settingCategory}>Phone Number</p>
                </Col>
                <Col md={4} className={styles.settingCol}>
                {!mobileEdit && (
                   <p className={styles.settingValue}>961112233</p>
                  )}
                  {mobileEdit && (
                    <input
                      type="text"
                      defaultValue="961112233"
                      placeholder="Enter Phone Number"
                      onChange={(e) => {}}
                      required
                      className={styles.inputBar}
                    />
                  )}
                </Col>
                <Col md={4} className={styles.settingCol}>
                {!mobileEdit && (
                    <YellowButton
                      text="Edit"
                      onClick={() => {
                        setMobileEdit(true);
                      }}
                    />
                  )}
                  {mobileEdit && (
                    <YellowButton
                      text="Save"
                      style2={true}
                      onClick={() => {
                        setMobileEdit(false);
                      }}
                    />
                  )}
                </Col>
              </Row>
            </Row>
            <Row className={styles.settingRow}>
              <p className={styles.sectionTitle}>Notification Settings</p>

              <div className={styles.switchDiv}>
                <Switch
                  isOn={eventCheck}
                  name="event"
                  handleToggle={() => setEventCheck(!eventCheck)}
                />

                <p
                  onClick={() => setEventCheck(!eventCheck)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  className={styles.settingValue}
                >
                  Send event reminders
                </p>
              </div>
              <div className={styles.switchDiv}>
                <Switch
                  isOn={emailCheck}
                  name="email"
                  handleToggle={() => setEmailCheck(!emailCheck)}
                />

                <p
                  onClick={() => setEmailCheck(!emailCheck)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  className={styles.settingValue}
                >
                  Email notifications
                </p>
              </div>
              <div className={styles.switchDiv}>
                <Switch
                  isOn={newsCheck}
                  name="news"
                  handleToggle={() => setNewsCheck(!newsCheck)}
                />

                <p
                  onClick={() => setNewsCheck(!newsCheck)}
                  style={{ marginLeft: "10px", cursor: "pointer" }}
                  className={styles.settingValue}
                >
                  Newsletter
                </p>
              </div>
            </Row>
            <Row className={styles.settingRow}>
              <p className={styles.sectionTitle}>Security settings</p>
              <div className={styles.settingLinkDiv}>
                <Link href="#" className={styles.settingLink}>
                  Password
                </Link>
                <Link href="#" className={styles.settingLink}>
                  2FA
                </Link>
                <Link href="#" className={styles.settingLink}>
                  Login Activity
                </Link>
              </div>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Settings;
