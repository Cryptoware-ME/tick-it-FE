import React, { useEffect, useState } from "react";
import styles from "./EditTicket.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import PageTitle from "../PageTitle";
import Dropzone from "../../components/Dropzone";
import { useFormik } from "formik";
import * as yup from "yup";
import YellowButton from "../YellowButton";

const EditTicket = ({ setEditTicket }) => {
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
            setEditTicket(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <div className={styles.payTitle}>
        <p className={styles.title}>Edit Ticket</p>
      </div>
      <Modal.Body>
        <Container fluid>
          <div className={styles.payCard}>
            <Row>
              <Col md={4} className={styles.drop}>
                <div className={styles.checkOutDetailsDiv}>
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
                  <p className={styles.paymentTitle}>Ticket title </p>
                  <input
                    id="Description"
                    name="Description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Description}
                    className={styles.input2}
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{height:'15px'}}>

                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.Description}</p>
                  </div>
                ) : null}
                </div>

                <div className={styles.InputDiv}>
                  <p className={styles.paymentTitle}>Number of tickets</p>
                  <input
                    id="Description"
                    name="Description"
                    type="Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Description}
                    className={styles.input}
                    style={{ color: "#656565" }}
                  />
                </div>
                < div style={{height:'15px'}}>

                {errors.Description && touched.Description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.Description}</p>
                  </div>
                ) : null}
                </div>

                <div className={styles.InputDiv}>
                  <p className={styles.paymentTitle}>Set price (USD)</p>
                  <input
                    id="Description"
                    name="Description"
                    type="Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Description}
                    className={styles.input}
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{height:'15px'}}>

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
                <p className={styles.paymentTitle}>Description</p>
                <input
                  id="Description"
                  name="Description"
                  type="Description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.Description}
                  className={styles.descriptionInput}
                  style={{ color: "#656565" }}
                />
              </div>
              {errors.Description && touched.Description ? (
                <div className={styles.errors}>
                  <p className={styles.error2}> {errors.Description}</p>
                </div>
              ) : null}
            </Row>
            <div className={styles.buttonAdd}>
              <YellowButton style1 text="EDIT TICKET" />
            </div>
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default EditTicket;
