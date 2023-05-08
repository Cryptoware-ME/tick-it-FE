import React, { useEffect, useState } from "react";
import styles from "./PayUsd.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { useFormik } from "formik";
import * as yup from "yup";
import TickitButton from "../tickitButton";

const PayUsd = ({ setUsdModal }) => {
  const schema = yup.object().shape({
    Description: yup.string().required("This field is required"),
    Date: yup.date().required("Date is required"),
  });
  const formik = useFormik({
    initialValues: {
      Description: "",
      Date: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const {
    handleSubmit,
    handleChange,
    values,
    errors,
    handleBlur,
    setFieldValue,
    setFieldTouched,
    isSubmitting,
    isValid,
    touched,
    setErrors,
    status,
    setValues,
  } = formik;
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setUsdModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <div className={styles.payTitle}>
        <p className="section-title">Pay in USD</p>
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
              <div className={styles.checkOutDetailsTotal}>
                <p>Total</p>
                <p>82$</p>
              </div>
            </div>

            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p className={styles.paymentTitle}>Choose paymnet method</p>
              </div>
              <div>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="modalInput"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                  Scam
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.drop}>
                    <Dropdown.Item className={styles.drop} href="#/action-1">
                      USDT
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className={styles.InputDiv} style={{ marginTop: "12px" }}>
                <p className={styles.paymentTitle}>Card Number</p>
                <input
                  id="Description"
                  name="Description"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="modalInput"
                />
              </div>
              <div style={{ height: "18px" }}>
                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.Description}</p>
                  </div>
                ) : null}
              </div>

              <div className={styles.InputDiv}>
                <p className={styles.paymentTitle}>Holder Name</p>
                <input
                  id="Description"
                  name="Description"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="modalInput"
                />
              </div>
              <div style={{ height: "18px" }}>
                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.Description}</p>
                  </div>
                ) : null}
              </div>
            </div>
            <Row className={styles.holderInput}>
              <Col>
                <div className={styles.InputDiv}>
                  <p className={styles.paymentTitle}>CCV Code </p>
                  <input
                    id="Description"
                    name="Description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Description}
                    className="modalInput"
                  />
                </div>
                <div style={{ height: "18px" }}>
                  {errors.Description && touched.Description ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Description}</p>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col>
                <div className={styles.InputDiv}>
                  <p className={styles.paymentTitle}>Expire Date</p>
                  <input
                    id="Date"
                    name="Date"
                    type="date"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Date}
                    className="modalInput"
                  />
                </div>
                <div style={{ height: "18px" }}>
                  {errors.Date && touched.Date ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Date}</p>
                    </div>
                  ) : null}
                </div>
              </Col>
            </Row>
            <div style={{ marginTop: "20px" }}>
              <TickitButton minWidth="100%" style1 text="Pay" />
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default PayUsd;
