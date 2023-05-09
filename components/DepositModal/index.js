import React, { useEffect, useState } from "react";
import styles from "./DepositModal.module.scss";
import { Modal, Container } from "react-bootstrap";
import Image from "next/image";
import TickitButton from "../tickitButton";

const DepositModal = ({ setDepositModal }) => {
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
          <p className="section-title">Deposit Funds</p>
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
                placeholder="Wallet 1"
                onChange={(e) => {}}
                className="modalInput"
                style={{ height: "50px" }}
              />
              <div className={styles.btnDiv}>
                <TickitButton text="copy" style2 isSmall />
              </div>
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
export default DepositModal;
