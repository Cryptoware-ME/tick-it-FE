import React, { useEffect, useState } from "react";
import styles from "./RecipientsModal.module.scss";
import { Modal, Container } from "react-bootstrap";

import Image from "next/image";

const RecipientsModal = ({ setRecipientsModal }) => {
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setRecipientsModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Modal.Body>
        <Container>
          <div className={styles.checkOutCard}>
            <p className={styles.title}>Recipients</p>
            <p className={styles.subtitle}>Sunset Curve</p>
            <p className={styles.type}>Front Seat</p>

            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p>JohnDoe@gmail.com</p>
                <Image
                  width={14}
                  height={18}
                  alt="delete"
                  src="/images/delete.png"
                />
              </div>
              <div className={styles.checkOutDetails}>
                <p>0x6802...1B4f</p>
                <Image
                  width={14}
                  height={18}
                  alt="delete"
                  src="/images/delete.png"
                />
              </div>
              <div className={styles.checkOutDetails}>
                <p>JaneDoe@gmail.com</p>
              </div>
            </div>
            <div className={styles.addRecipientsDiv}>
              <input
                type="text"
                // value={}
                placeholder="Enter recipient email or wallet address"
                onChange={(e) => {}}
                className={styles.input}
              />
              <Image
                width={20}
                height={20}
                alt="add"
                src="/images/addYellow.png"
              />
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default RecipientsModal;
