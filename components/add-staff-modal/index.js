import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";

import { useFormik } from "formik";
import * as yup from "yup";


import TickitButton from "../tickitButton";

import styles from "./add-staff-modal.module.scss";

const AddStaffModal = ({ setAddStaff }) => {
  const [loading, setLoading] = useState(false);
  return (
    <Form>
      <Modal show onHide={() => {}} centered>
        <Modal.Header
          onClick={() => {
            setAddStaff(false);
          }}
          className={styles.closeButton}
          closeButton
        />

        <Modal.Body>
          <Container>
            <p className={styles.title}>Add Staff</p>

            <Row></Row>

            <div className={styles.buttonAdd}>
              <TickitButton
                isLoading={loading}
                disabled={loading}
                text="ADD Staff"
              />
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </Form>
  );
};
export default AddStaffModal;
