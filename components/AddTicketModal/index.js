import React, { useEffect, useState } from "react";
import styles from "./AddTicketModal.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Dropzone from "../../components/Dropzone";
import { useFormik } from "formik";
import * as yup from "yup";
import TickitButton from "../tickitButton";

const AddTicket = ({ setAddTicket }) => {
  const [imageError, setImageError] = useState(false);
  const [filePreview, setFilePreview] = useState();
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
          setAddTicket(false);
        }}
        className={styles.closeButton}
        closeButton
      />

      <Modal.Body>
        <Container>
          <p className={styles.title}>Add Ticket</p>

          <Row>
            <Col md={4}>
              <div className={styles.drop}>
                <Dropzone
                  filePreview={filePreview}
                  setFilePreview={setFilePreview}
                  text="Upload ticket image"
                />
                {imageError ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> Image is required field</p>
                  </div>
                ) : null}
              </div>
            </Col>
            <Col md={8}>
              <div className={styles.InputDiv}>
                <p className={styles.detailsTitle}>Ticket title</p>
                <input
                  id="Description"
                  name="Description"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="modalInput"
                  style={{ color: "#656565" }}
                />
              </div>
              <div style={{ minHeight: "20px" }}>
                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.Description}</p>
                  </div>
                ) : null}
              </div>

              <div className={styles.InputDiv}>
                <p className={styles.detailsTitle}>Number of tickets</p>
                <input
                  id="Description"
                  name="Description"
                  type="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="modalInput"
                  style={{ color: "#656565" }}
                />
              </div>
              <div style={{ minHeight: "20px" }}>
                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.Description}</p>
                  </div>
                ) : null}
              </div>

              <div className={styles.InputDiv}>
                <p className={styles.detailsTitle}>Set price (USD)</p>
                <input
                  id="Description"
                  name="Description"
                  type="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className="modalInput"
                  style={{ color: "#656565" }}
                />
              </div>
              <div style={{ minHeight: "20px" }}>
                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.Description}</p>
                  </div>
                ) : null}
              </div>
            </Col>
          </Row>

          <Row className={styles.holderInput}>
            <div className={styles.InputDiv}>
              <p className={styles.detailsTitle}>Description</p>
              <textarea
                id="Description"
                name="Description"
                type="Description"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.Description}
                className="modalInput"
                style={{ color: "#656565" }}
              />
            </div>
            <div style={{ minHeight: "20px" }}>
              {errors.Description && touched.Description ? (
                <div className={styles.errors}>
                  <p className={styles.error2}> {errors.Description}</p>
                </div>
              ) : null}
            </div>
          </Row>
          <div className={styles.buttonAdd}>
            <TickitButton style1 text="ADD TICKET" />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default AddTicket;
