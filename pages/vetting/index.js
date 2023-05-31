import React, { useEffect, useState } from "react";
import styles from "./Vetting.module.scss";
import { Col, Row, Container } from "react-bootstrap";
import EventDetails from "../../components/EventDetails";
import TickitButton from "../../components/tickitButton";
import { useFormik } from "formik";
import * as yup from "yup";
import Dropzone from "../../components/Dropzone";
import { useAuth } from "../../auth/useAuth";
import { useRouter } from "next/router";
import { postOrganization } from "../../axios/organization.axios";
const Vetting = () => {
  const [bannerPreview, setBannerPreview] = useState();
  const [profilePreview, setProfilePreview] = useState();
  const [ownerId, setOwnerId] = useState();
  const [bannerImageError, setBannerImageError] = useState(false);
  const [profileImageError, setProfileImageError] = useState(false);
  const [bannerImage, setBannerImage] = useState();
  const [profileImage, setProfileImage] = useState();
  const [submited, setSubmited] = useState(false);
  const { user } = useAuth();
  const router = useRouter();
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Must be 3 characters or more")
      .max(45, "Must be 45 character or less")
      .required("Name is a required field"),
    description: yup.string().required(),
    eventKind: yup.string().required("This field is required"),
  });
  const formik = useFormik({
    initialValues: {
      ownerId: "",
      name: "",
      profile: profileImage,
      banner: bannerImage,
      description: "",
      eventKind: "",
    },
    validationSchema: schema,

    onSubmit: (values) => {
      values.ownerId = ownerId;
      if (bannerImage) {
        setBannerImageError(false);
        values.banner = bannerImage;
        if (profileImage) {
          setProfileImageError(false);
          values.profile = profileImage;

          postOrganization({
            ownerId: values.ownerId,
            name: values.name,
            profile: values.profile,
            banner: values.banner,
          }).then((data) => {
            setSubmited(true);
          });
        } else {
          setProfileImageError(true);
        }
      } else {
        setBannerImageError(true);
      }
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

  useEffect(() => {
    if (!user) {
      router.push("/");
    } else if (user.user) {
      setOwnerId(user.user.id);
    } else {
      setOwnerId(user.id);
    }
  }, [user]);

  return (
    <div className={styles.wrapper}>
      {!submited && (
        <Container style={{ padding: "50px 10px 100px 10px" }}>
          <p className="pageTitle">Become an organizer</p>
          <EventDetails details=" Lorem ipsum dolor sit amet, consecteur adipscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua" />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div>
              <div style={{ marginTop: "24px " }}>
                <Dropzone
                  filePreview={bannerPreview}
                  setFilePreview={setBannerPreview}
                  setImage={setBannerImage}
                  text="Banner (max 1MB)"
                />
                <div style={{ height: "20px" }}>
                  {bannerImageError ? (
                    <div className={styles.errors}>
                      <p className={styles.error}>Banner image is required</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div>
              <div style={{ marginTop: "24px " }}>
                <Dropzone
                  filePreview={profilePreview}
                  setFilePreview={setProfilePreview}
                  setImage={setProfileImage}
                  text="Profile (max 1MB)"
                />
                <div style={{ height: "20px" }}>
                  {profileImageError ? (
                    <div className={styles.errors}>
                      <p className={styles.error}>Profile image is required</p>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.inputDiv} style={{ width: "35%" }}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Organization Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              className="modalInput"
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.name && touched.name ? (
              <div className={styles.errors}>
                <p className={styles.error}> {errors.name}</p>
              </div>
            ) : null}
          </div>

          {/* <div
            style={{
              display: "flex",
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
          </div> */}
          <div className={styles.descriptionDiv} style={{ width: "60%" }}>
            <textarea
              id="description"
              name="description"
              type="text"
              placeholder="Description"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.description}
              className="modalInput"
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.description && touched.description ? (
              <div className={styles.errors}>
                <p className={styles.error}> {errors.description}</p>
              </div>
            ) : null}
          </div>

          {/* <div className={styles.socialLink}>
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
          </div> */}
          <div className={styles.descriptionDiv} style={{ width: "60%" }}>
            <textarea
              id="eventKind"
              name="eventKind"
              type="text"
              placeholder="What kind of events will you creating ?"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.eventKind}
              className="modalInput"
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.eventKind && touched.eventKind ? (
              <div className={styles.errors}>
                <p className={styles.error}> {errors.eventKind}</p>
              </div>
            ) : null}
          </div>

          <div className={styles.submitBtn}>
            <TickitButton onClick={handleSubmit} text="SUBMIT" />
          </div>
        </Container>
      )}
      {submited && (
        <Container style={{ padding: "50px 10px 100px 10px" }}>
          <p className="pageTitle">Application submited</p>
          <div className={styles.event}>
            <EventDetails details="Check your inbox for the approval email. Meanwhile, you can buy tickets for the best events in your region." />
          </div>
          <div className={styles.appButton}>
            <div className={styles.buttons}>
              <TickitButton text="SEE APPLICATION" minWidth="250px" disabled />
            </div>

            <div className={styles.buttons}>
              <TickitButton
                style2
                text="BACK TO HOME"
                minWidth="250px"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>
          </div>
        </Container>
      )}
    </div>
  );
};

export default Vetting;
