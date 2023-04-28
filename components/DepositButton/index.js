import React, { useEffect, useState } from "react";
import styles from "./DepositButton.module.scss";
import { Modal, Container } from "react-bootstrap";
import Image from "next/image";
const DepositButton = ({ setDepositModal }) => {
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setDepositModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Modal.Body>
        <div className={styles.payTitle}>
          <p className={styles.title}>Deposit Funds</p>
        </div>
        <Container>
          <div className={styles.checkOutCard}>
            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <Image
                  width={161}
                  height={161}
                  alt="delete"
                  src="/images/barcode.png"
                />
              </div>
            </div>
            <div className={styles.addRecipientsDiv}>
              <input
                type="text"
                // value={}
                placeholder="Wallet 1"
                onChange={(e) => {}}
                className={styles.input}
              />
              <button className={styles.connectButton}>
                <p className={styles.connectText}> COPY </p>
              </button>
            </div>
            <div className={styles.address}> 
              <p className={styles.addressSentence}>
                This address can only be used to receive compatible tokens
              </p>
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default DepositButton;
