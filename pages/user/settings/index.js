import Link from "next/link";
import React, { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import { useAuth } from "../../../auth/useAuth";

import DashboardBar from "../../../components/DashboardBar";
import TickitButton from "../../../components/tickitButton";
import Switch from "../../../components/Switch";

import styles from "./Settings.module.scss";
import ChangePasswordModal from "../../../components/ChangePasswordModal";

const Settings = () => {
  const { user } = useAuth();
  const [eventCheck, setEventCheck] = useState(true);
  const [emailCheck, setEmailCheck] = useState(true);
  const [newsCheck, setNewsCheck] = useState(true);
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [mobileEdit, setMobileEdit] = useState(false);
  const [passwodModal, setPasswodModal] = useState(false);
  return (
      <>
      {passwodModal && <ChangePasswordModal setPasswodModal={setPasswodModal} />}
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="settings" />
        </Col>

        <Col lg={10} style={{ paddingBottom: "48px" }}>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <p className="section-title">Account Settings</p>
                <Row className={styles.settingRow}>
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
                      <TickitButton
                        text="Edit"
                        onClick={() => {
                          setUserNameEdit(true);
                        }}
                      />
                    )}
                    {userNameEdit && (
                      <TickitButton
                      text="Save"
                        style2={true}
                        onClick={() => {
                          setUserNameEdit(false);
                        }}
                      />
                    )}
                  </Col>
                </Row>
                <Row className={styles.settingRow}>
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
                      <TickitButton
                      text="Edit"
                        onClick={() => {
                          setEmailEdit(true);
                        }}
                        />
                    )}
                    {emailEdit && (
                      <TickitButton
                      text="Save"
                      style2={true}
                        onClick={() => {
                          setEmailEdit(false);
                        }}
                        />
                    )}
                  </Col>
                </Row>
                <Row className={styles.settingRow}>
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
                      <TickitButton
                        text="Edit"
                        onClick={() => {
                          setMobileEdit(true);
                        }}
                      />
                    )}
                    {mobileEdit && (
                      <TickitButton
                        text="Save"
                        style2={true}
                        onClick={() => {
                          setMobileEdit(false);
                        }}
                      />
                    )}
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <p className="section-title">Notification Settings</p>

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
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <p className="section-title">Security settings</p>
                <div className={styles.settingLinkDiv}>
                  <div
                    onClick={() => {
                      setPasswodModal(true);
                    }}
                    className={styles.settingLink}
                    >
                    Password
                  </div>
                  <Link href="#" className={styles.settingLink}>
                    2FA
                  </Link>
                  <Link href="#" className={styles.settingLink}>
                    Login Activity
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
                    </>
  );
};

export default Settings;
