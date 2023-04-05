import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import { Col, Row, Modal, Container } from "react-bootstrap";
import Link from "next/link";
import YellowButton from "../yellowButton";
const LoginModal = ({}) => {
  return (
    <Modal show onHide={() => {}} centered className={styles.wrapper}>
      <Modal.Header closeButton />

      <Modal.Body>
        <Container>
          <div className={styles.inputDiv}>
            <input
              type="email"
              // value={}
              placeholder="Email"
              onChange={(e) => {}}
              required
              className={styles.modalInput}
            />
          </div>
          <div className={styles.inputDiv}>
            <input
              type="password"
              // value={}
              placeholder="Password"
              onChange={(e) => {}}
              required
              className={styles.modalInput}
            />
            <Link href="#">Forgot password?</Link>
          </div>
          <div className={styles.inputDiv}>
            <YellowButton text="Login" />
          </div>
          <div className={styles.googleLoginDiv}>
            <div className={styles.googleLogin}>
              <div>icon</div>
              <div>Log In with Google</div>
            </div>
            <div>
            If you don’t have an account yet, Sign Up.
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
