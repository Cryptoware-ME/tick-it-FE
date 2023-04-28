import React, { useEffect, useState } from "react";
import styles from "./Vetting.module.scss";
import { Col, Row, Container } from "react-bootstrap";
import EventDetails from "../../components/EventDetails";
import TickitButton from "../../components/tickitButton";
import { useFormik } from "formik";
import * as yup from "yup";
const Vetting = () => {
  const [submited, setSubmited] = useState(false);
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Must be 3 characters or more")
      .max(45, "Must be 45 character or less")
      .required("Name is a required field"),
    Description: yup.string().required(),
    EventKind: yup.string().required("This field is required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      Description: "",
      EventKind: "",
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
    <div className={styles.wrapper}>
      {!submited && (
        <Container style={{ padding: "50px 0px 100px 0px" }}>
          <p className="pageTitle">Become an organizer</p>
          <EventDetails details=" Lorem ipsum dolor sit amet, consecteur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua" />
          <div className={styles.inputDiv} style={{ width: "35%" }}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Organization Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="modalInput"
            />
          </div>
          {errors.name && touched.name ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.name}</p>
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              marginTop: "20px",
              alignItems: "center",
            }}
          >
            <input
              className={styles.roundCheckbox}
              type="checkbox"
              onclick="myFunction()"
            />
            <p className={styles.checkboxText}>
              I want to create events in my own name
            </p>
          </div>
          <div className={styles.descriptionDiv} style={{ width: "60%" }}>
            <textarea
              id="Description"
              name="Description"
              type="text"
              placeholder="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.Description}
              className="modalInput"
              
            />
          </div>
          {errors.Description && touched.Description ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Description}</p>
            </div>
          ) : null}

          <div className={styles.socialLink}>
            <p className={styles.socialTitle}>Social Links</p>
            <div className={styles.social} style={{ width: "35%" }}>
              <p className={styles.socialName}>Telegram</p>
              <input className="modalInput" />
              <p className={styles.socialName}>Instagram</p>
              <input className="modalInput" />
              <p className={styles.socialName}>Twitter</p>
              <input className="modalInput" />
              <p className={styles.socialName}>Discord</p>
              <input className="modalInput" />
              <p className={styles.socialName}>Website</p>
              <input className="modalInput" />
            </div>
          </div>
          <div className={styles.descriptionDiv} style={{ width: "60%" }}>
            <textarea
              id="EventKind"
              name="EventKind"
              type="text"
              placeholder="What kind of events will you creating ?"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.EventKind}
              className="modalInput" 
            />
          </div>
          {errors.EventKind && touched.EventKind ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.EventKind}</p>
            </div>
          ) : null}
          <div className={styles.submitBtn}>
            <TickitButton
              onClick={() => {
                setSubmited(true);
              }}
              text="SUBMIT"
            />
          </div>
        </Container>
      )}
      {submited && (
        <Container>
          <p className="pageTitle">Application submited</p>
          <div className={styles.event}>
            <EventDetails details="Check your inbox for the approval email. Meanwhile, you can buy tickets for the best events in your region." />
          </div>
          <div className={styles.appButton}>
            <TickitButton text="SEE APPLICATION" />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Vetting;
