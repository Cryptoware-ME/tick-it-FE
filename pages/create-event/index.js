import { Container, Row, Col } from "react-bootstrap";
import styles from "./createEvent.module.scss";
import TickitButton from "../../components/tickitButton";
import { useFormik, Formik } from "formik";
import Dropzone from "../../components/Dropzone";
import React, { useState } from "react";
import * as yup from "yup";
import Dropdown from "react-bootstrap/Dropdown";

const CreateEvent = () => {
  const [filePreview, setFilePreview] = useState();
  const [imageError, setImageError] = useState(false);
  const [form, setForm] = useState(1);

  const schema = yup.object().shape({
    Name: yup.string().required(),
    Date: yup.date().required(),
    Location: yup.string().required(),
    Category: yup.string().required(),
    Description: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      Name:"",
      Date: "",
      Location: "",
      Category:"",
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
      <Container style={{ paddingTop: "24px", paddingBottom: "48px" }}>
        <p className="pageTitle">Create Event</p>
        {form == 1 && (
          <div style={{ marginTop: "48px", minHeight: "80vh" }}>
            <p className="section-title">Event Details</p>
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

            <Row>
              <Col md={6}>
                <p className={styles.title}>Name</p>
                <div className={styles.InputDiv}>
                  <input
                    id="Name"
                    name="Name"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Name}
                    className="modalInput"
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{ height: "20px" }}>
                  {errors.Date && touched.Date ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Name}</p>
                    </div>
                  ) : null}
                </div>
              </Col>
              <Col md={6}>
                <p className={styles.title}>Date & Time</p>
                <div className={styles.InputDiv}>
                  <input
                    id="Date"
                    name="Date"
                    type="datetime-local"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Date}
                    className="modalInput"
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{ height: "20px" }}>
                  {errors.Date && touched.Date ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Date}</p>
                    </div>
                  ) : null}
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <p className={styles.title}>Location</p>
                <div className={styles.InputDiv}>
                  <input
                    id="Location"
                    name="Location"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Location}
                    className="modalInput"
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{ height: "20px" }}>
                  {errors.Location && touched.Location ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Location}</p>
                    </div>
                  ) : null}
                </div>
                <p className={styles.title}>Category</p>
                <Dropdown>
                  <Dropdown.Toggle
                    className="modalInput"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    variant="success"
                    id="dropdown-basic"
                  >
                   Concert
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.drop}>
                    <Dropdown.Item className={styles.drop} href="#/action-1">
                      Music
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col md={6}>
                <p className={styles.title}>Description</p>
                <div className={styles.descriptionDiv}>
                  <textarea
                    id="Description"
                    name="Description"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Description}
                    className="modalInput"
                    style={{ minHeight: "120px" }}
                  />
                </div>
                <div style={{ height: "20px" }}>
                  {errors.Description && touched.Description ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.Description}</p>
                    </div>
                  ) : null}
                </div>
              </Col>
            </Row>
          </div>
        )}
        {form == 2 && (
          <div style={{ marginTop: "48px", minHeight: "80vh" }}>
            <p className="section-title">Tickets Details</p>
            <div style={{ margin: "48px 0px" }}>
              <Dropzone
                filePreview={filePreview}
                setFilePreview={setFilePreview}
                text="Upload event banner"
              />
            </div>
          </div>
        )}
        <div className={styles.appButton}>
          <TickitButton
            onClick={() => {
              setForm(1);
            }}
            text="Back"
            disabled={form == 1 ? true : false}
          />
          {form == 1 && (
            <TickitButton
              onClick={() => {
                setForm(2);
              }}
              text="next"
            />
          )}
          {form == 2 && (
            <TickitButton
              onClick={() => {
                if (!filePreview) {
                  setImageError(true);
                }
              }}
              text="CREATE"
            />
          )}
        </div>
      </Container>
    </div>
  );
};
export default CreateEvent;
