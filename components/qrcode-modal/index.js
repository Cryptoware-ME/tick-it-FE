import React, { useEffect, useState } from "react";
import styles from "./qrcode-modal.module.scss";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";

const QrCodeModal = ({ setQrCodeModal }) => {
  return (
    
      <Modal show onHide={() => {}} centered>
        <Modal.Header
          onClick={() => {
            setQrCodeModal(false);
          }}
          className={styles.closeButton}
          closeButton
        />

        <Modal.Body>
          <Container>
            <p className={styles.title}>Scan To Enter Event</p>
            <div className={styles.image}>
              <Image  width={250} height={250} src="/images/qrcode.svg"/>
            </div>
          </Container>
        </Modal.Body>
      </Modal>
   
  );
};
export default QrCodeModal;
