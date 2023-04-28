import React, { useEffect, useState } from "react";
import styles from "./PayCrypto.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import GradientButton from "../GradientButton";
import TickitButton from "../tickitButton";
const PayCrypto = ({ setCryptoModal }) => {
  const [state, setState] = useState(1);

  const handlePaymentMethod = (e) => {
    console.log("handlePaymentMethod ", e);
  };
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setCryptoModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <div className={styles.payTitle}>
        <p className={styles.title}>Pay in USD</p>
      </div>
      <Modal.Body>
        <Container fluid>
          <div className={styles.payCard}>
            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p>Discount</p>
                <p>-10%</p>
              </div>
              <div className={styles.checkOutDetails}>
                <p>Tax</p>
                <p>+2%</p>
              </div>
              <div className={styles.checkOutDetails}>
                <p>Total</p>
                <p>82$</p>
              </div>
            </div>
            {state == 1 && (
              <Row className={styles.box}>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className={styles.roundCheckbox}
                      type="checkbox"
                      onclick="myFunction()"
                    />
                    <p className={styles.checkboxText}>Tick-It wallet</p>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className={styles.roundCheckbox}
                      type="checkbox"
                      onclick={() => {
                        setState(2);
                      }}
                    />
                    <p className={styles.checkboxText2}>Connect wallet</p>
                  </div>
                </Col>
              </Row>
            )}
            {state == 3 && (
              <Row className={styles.box}>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className={styles.roundCheckbox}
                      type="checkbox"
                      onclick="myFunction()"
                    />
                    <p className={styles.checkboxText2}>Tick-It wallet</p>
                  </div>
                </Col>
                <Col>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "10px",
                      alignItems: "center",
                    }}
                  >
                    <input
                      className={styles.roundCheckbox}
                      type="checkbox"
                      onclick="myFunction()"
                    />
                    <p className={styles.checkboxText}>Connect wallet</p>
                  </div>
                </Col>
              </Row>
            )}
            {state == 2 && (
              <div>
                <button className={styles.connectButton}>
                  <p className={styles.connectText}> Connect wallet </p>
                </button>
              </div>
            )}
            {state == 3 && (
              <div>
                <p className={styles.walletConnected}>
                  Wallet connected: {""}
                  <Image
                    width={15}
                    height={17}
                    alt="icon"
                    src="/images/icon6.svg"
                  />
                </p>
                <p className={styles.wallet}>
                  0x6802707eE12CE3d91CA4294740dcFa1CAf931B4f
                </p>
              </div>
            )}
            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p className={styles.paymentTitle}>Choose paymnet method</p>
              </div>
              <div>
                <DropdownButton
                  className={styles.dropDown}
                  id="dropdown-basic-button"
                  title="Dropdown button"
                  onSelect={handlePaymentMethod}
                >
                  <Dropdown.Item className={styles.drop} eventKey="visa">
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="mastecard">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item eventKey="crypto">
                    Something else
                  </Dropdown.Item>
                </DropdownButton>
              </div>
              <p className={styles.walletBallance}>Wallet ballance: 0 USDC</p>
              <div>
                {state == 1 && (
                  <p className={styles.info}>
                    *Not enough funds in wallet. Please send 82 USDC to
                    0x6802707eE12CE3d91CA4294740dcFa1CAf931B4f on Polygon
                    network
                  </p>
                )}
              </div>
            </div>

            <div style={{ marginTop: "20px" }}>
              <TickitButton minWidth="100%" style1 text="Pay" />
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default PayCrypto;
