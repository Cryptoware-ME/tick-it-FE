import React, { useEffect, useState } from "react";
import styles from "./PayCrypto.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import TickitButton from "../tickitButton";
const PayCrypto = ({ setCryptoModal }) => {
  const [state, setState] = useState(1);
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
        <p className="section-title">Pay in Crypto</p>
      </div>
      <Modal.Body>
        <Container fluid>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p>Discount</p>
                <p>-10%</p>
              </div>
              <div className={styles.checkOutDetails}>
                <p>Tax</p>
                <p>+2%</p>
              </div>
              <div className={styles.checkOutDetailsTotal}>
                <p>Total</p>
                <p>82$</p>
              </div>
            </div>
            {state == 1 && (
              <Row className={styles.box}>
                <div style={{ width: "80%", display: "flex" }}>
                  <Col>
                    <div
                      style={{
                        display: "flex",
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
                      <p className={styles.checkboxText}>Connect wallet</p>
                    </div>
                  </Col>
                </div>
              </Row>
            )}
            {state == 3 && (
              <Row className={styles.box}>
                <div style={{ width: "80%", display: "flex" }}>
                  <Col>
                    <div
                      style={{
                        display: "flex",
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
                </div>
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "8px",
                    }}
                  >
                    <p className={styles.walletConnected}>Wallet connected: </p>
                    <Image
                      width={15}
                      height={17}
                      alt="icon"
                      src="/images/icon6.svg"
                      style={{
                        marginLeft: "8px",
                      }}
                    />
                  </div>

                  <p className={styles.wallet}>
                    0x6802707eE12CE3d91CA4294740dcFa1CAf931B4f
                  </p>
                </div>
              </Row>
            )}
            {state == 2 && (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <TickitButton style2 style1 text="Connect wallet" />
              </div>
            )}

            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p className={styles.paymentTitle}>Choose paymnet method</p>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                     className="modalInput"
                     style={{justifyContent:"space-between",alignItems:"center"}}
                    variant="success"
                    id="dropdown-basic"
                  >
                    USDC
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.drop}>
                    <Dropdown.Item className={styles.drop} href="#/action-1">
                      USDT
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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

            <TickitButton minWidth="100%" style1 text="Pay" />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default PayCrypto;
