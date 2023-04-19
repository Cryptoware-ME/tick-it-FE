import { Container, Col, Row, Form } from "react-bootstrap";
import styles from "./createEvent.module.scss";
import PageTitle from "../../components/pageTitle";
import YellowButton from "../../components/yellowButton";
import Image from "next/image";
import { useFormik, Formik } from "formik";

import React, {
  useCallback,
  useEffect,
  useState,
  useLayoutEffect,
} from "react";
import * as yup from "yup";
const CreateEvent = () => {
  const schema = yup.object().shape({
    Date: yup.date().required(),
    Time: yup.string().required(),
    Location: yup.string().required(),
    Description: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      Date: "",
      Time: "",
      Location: "",
      Description: "",
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
    <div className={styles.Wrapper}>
      <Container style={{ padding: "48px 0px" }}>
        <PageTitle text="Create Event" />
        <div className={styles.uploadEvent}>
          <Image
            width={50}
            height={50}
            className={styles.eventImage}
            alt="image"
            src="/images/upload.png"
          />
        </div>
        <div className={styles.banner}>
          <p> Upload event banner</p>
        </div>
        <div className={styles.event}>
          <p className={styles.title}>Date</p>
          <div className={styles.InputDiv}>
            <input
              id="Date"
              name="Date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Date}
              className={styles.Input}
              style={{ color: "#656565" }}
            />
          </div>{" "}
          {errors.Date && touched.Date ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Date}</p>
            </div>
          ) : null}
          <p className={styles.title}>Time</p>
          <div className={styles.InputDiv}>
            <input
              id="Time"
              name="Time"
              type="Time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Time}
              className={styles.Input}
              style={{ color: "#656565" }}
            />
          </div>{" "}
          {errors.Time && touched.Time ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Time}</p>
            </div>
          ) : null}
          <p className={styles.title}>Location</p>
          <div className={styles.InputDiv}>
            <input
              id="Location"
              name="Location"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Location}
              className={styles.Input}
              style={{ color: "#656565" }}
            />
          </div>{" "}
          {errors.Location && touched.Location ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Location}</p>
            </div>
          ) : null}
          <p className={styles.title}>Description</p>
          <div className={styles.descriptionDiv}>
            <textarea
              id="Description"
              name="Description"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Description}
              className={styles.modalDescription}
            />
          </div>
          {errors.Description && touched.Description ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Description}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.appButton}>
          <YellowButton text="CREATE" />
        </div>
      </Container>
    </div>
  );
};
export default CreateEvent;
