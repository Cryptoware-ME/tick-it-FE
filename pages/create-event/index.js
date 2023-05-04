import { Container } from "react-bootstrap";
import styles from "./createEvent.module.scss";
import TickitButton from "../../components/tickitButton";
import { useFormik, Formik } from "formik";
import Dropzone from "../../components/Dropzone";
import React, { useState } from "react";
import * as yup from "yup";

const CreateEvent = () => {
  const [filePreview, setFilePreview] = useState();
  const [imageError, setImageError] = useState(false);
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
      <Container style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <p className="pageTitle">Create Event</p>
        <div style={{ margin: "48px 0px" }}>
          <Dropzone
            filePreview={filePreview}
            setFilePreview={setFilePreview}
            text="Upload event banner"
          />
        </div>

        {imageError ? (
          <div className={styles.errors}>
            <p className={styles.error}> Image is required field</p>
          </div>
        ) : null}
        <div >
          <p className={styles.title}>Date</p>
          <div className={styles.InputDiv}>
            <div className="modalInput">
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
            </div>
          </div>
          {errors.Date && touched.Date ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Date}</p>
            </div>
          ) : null}
          <p className={styles.title}>Time</p>
          <div className={styles.InputDiv}>
            <div className="modalInput">
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
            </div>
          </div>
          {errors.Time && touched.Time ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Time}</p>
            </div>
          ) : null}
          <p className={styles.title}>Location</p>
          <div className={styles.InputDiv}>
            <div className="modalInput">
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
            </div>
          </div>
          {errors.Location && touched.Location ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Location}</p>
            </div>
          ) : null}
          <p className={styles.title}>Description</p>
          <div className={styles.descriptionDiv}>
            <div className="modalInput">
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
          </div>
          {errors.Description && touched.Description ? (
            <div className={styles.errors}>
              <p className={styles.error}> {errors.Description}</p>
            </div>
          ) : null}
        </div>
        <div className={styles.appButton}>
          <TickitButton
            onClick={() => {
              if (!filePreview) {
                setImageError(true);
              }
            }}
            text="CREATE"
          />
        </div>
      </Container>
    </div>
  );
};
export default CreateEvent;
