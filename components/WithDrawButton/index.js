import React, { useEffect, useState } from "react";
import styles from "./WithDrawButton.module.scss";
import { Modal, Container } from "react-bootstrap";
import Image from "next/image";
import TickitButton from "../tickitButton";
const WithDrawButton = ({ setWithDrawModal }) => {
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setWithDrawModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Modal.Body>
        <div className={styles.payTitle}>
          <p className={styles.title}>Withdraw Funds</p>
        </div>
        <Container>
          <div className={styles.checkOutCard}>
            <div className={styles.withDrawDiv}>
              <input
                type="text"
                // value={}
                placeholder="Recipient's ETH address"
                onChange={(e) => {}}
                className={styles.input}
              />
            </div>
            <div className={styles.withDrawDiv}>
              <input
                type="text"
                // value={}
                placeholder="Amount"
                onChange={(e) => {}}
                className={styles.input}
              />
              <div className={styles.amount}>
                <p>
                  <span style={{ color: " #848484" }}>USD</span> Max{" "}
                </p>
              </div>
            </div>
            <div className={styles.address}>
              <p className={styles.addressSentence}>Available: $157</p>
            </div>

            <div className={styles.nextButton}>
              <TickitButton style={1} text="NEXT" />
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default WithDrawButton;
