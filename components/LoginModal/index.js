import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import { Col, Row, Modal, Container } from "react-bootstrap";
import Link from "next/link";
import YellowButton from "../yellowButton";
import Image from "next/image";
import { useAuthModalContext } from "../../context/AuthModalProvider";
const LoginModal = () => {
  const [isSignup, setIsSignup] = useState(false);
  const { modalOpen,setModalOpen } = useAuthModalContext();
  return (
    <>
      {modalOpen ? (
    <Modal show onHide={() => {}} centered className={styles.wrapper}>
      <Modal.Header onClick={() => {setModalOpen(false)}} className={styles.closeButton} closeButton />
      <Modal.Body>
        {isSignup ? (
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
            </div>
            <div className={styles.forgetpass}>
              <Link className={styles.forgetpassword} href="#">
                Forgot password?
              </Link>
            </div>
            <div className={styles.inputDiv}>
              <YellowButton text="Sign Up" />
            </div>
            <div className={styles.googleLoginDiv}>
              <div className={styles.googleLogin}>
                <Image
                  width={26}
                  height={26}
                  className={styles.mainLogo}
                  alt="google-icon"
                  src="/images/googleicon.svg"
                />
                <p className={styles.googleinput}>Log In with Google</p>
              </div>
              <div className={styles.signupdiv}>
                <p className={styles.signup}>
                  If you have an account,
                </p>
                <div onClick={(() => {
                  setIsSignup(false)
                })} className={styles.signuplink}>
                  Log in.
                </div>
              </div>
            </div>
          </Container>
        ) : (
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
            </div>
            <div className={styles.forgetpass}>
              <Link className={styles.forgetpassword} href="#">
                Forgot password?
              </Link>
            </div>
            <div className={styles.inputDiv}>
              <YellowButton text="Log In" />
            </div>
            <div className={styles.googleLoginDiv}>
              <div className={styles.googleLogin}>
                <Image
                  width={26}
                  height={26}
                  className={styles.mainLogo}
                  alt="google-icon"
                  src="/images/googleicon.svg"
                />
                <p className={styles.googleinput}>Log In with Google</p>
              </div>
              <div className={styles.signupdiv}>
                <p className={styles.signup}>
                  If you don’t have an account yet,
                </p>
                <div onClick={(() => {
                  setIsSignup(true)
                })} className={styles.signuplink}>
                  Sign up.
                </div>
              </div>
            </div>
          </Container>
        )}
      </Modal.Body>
    </Modal>
    ) : (
      <></>
    )}
  </>
  );
};

export default LoginModal;
