import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { Col, Row, Modal, Container, Alert, Form } from "react-bootstrap";
import Link from "next/link";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import YellowButton from "../YellowButton";
import Image from "next/image";
import { login, signup } from "../../axios/auth.axios";
import { useAuth } from "../../auth/useAuth";

const LoginModal = () => {
  const { logIn } = useAuth();
  const { modalOpen, setModalOpen } = useAuthModalContext();
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
    username: yup
      .string()
      .when("isSignup", { is: true, then: () => yup.string().required() }),
    confirmpassword: yup.string().when("isSignup", {
      is: true,
      then: () =>
        yup
          .string()
          .min(6)
          .required("This field is required")
          .oneOf([yup.ref("password"), null], "Passwords must match"),
    }),
  });

  //Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmpassword: "",
      isSignup: false,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const loginRes = await login({
        email: values.email,
        password: values.password,
      });

      logIn(loginRes);
      if (loginRes) {
        setModalOpen(false);
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

  return (
    <>
      {modalOpen ? (
        <Modal show onHide={() => {}} centered className={styles.wrapper}>
          <Modal.Header
            onClick={() => {
              setModalOpen(false);
            }}
            className={styles.closeButton}
            closeButton
          />
          <Modal.Body>
            {values.isSignup ? (
              <Container>
                <div className={styles.inputDiv}>
                  <input
                    name="username"
                    type="Text"
                    placeholder="User Name"
                    value={values.username}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    className={styles.modalInput}
                  />
                </div>
                {errors.username && touched.username ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.username}</p>
                  </div>
                ) : null}

                <div className={styles.inputDiv}>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    className={styles.modalInput}
                  />
                </div>
                {errors.email && touched.email ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.email}</p>
                  </div>
                ) : null}
                <div className={styles.inputDiv}>
                  <input
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.modalInput}
                  />
                </div>
                {errors.password && touched.password ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.password}</p>
                  </div>
                ) : null}
                <div className={styles.inputDiv}>
                  <input
                    name="confirmpassword"
                    type="password"
                    value={values.confirmpassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={styles.modalInput}
                  />
                </div>
                {errors.confirmpassword && touched.confirmpassword ? (
                  <div className={styles.errors}>
                    <p className={styles.error}> {errors.confirmpassword}</p>
                  </div>
                ) : null}

                <div className={styles.inputDiv}>
                  <YellowButton
                    text="Sign Up"
                    onClick={async () => {
                      const response = await signup({
                        email: values.email,
                        username: values.username,
                        password: values.password,
                      });
                      localStorage.setItem("token", "bearer " + response.token);
                    }}
                  />
                </div>
                <div className={styles.googleLoginDiv}>
                  <div className={styles.googleLogin}>
                    <Image
                      width={26}
                      height={26}
                      className={styles.mainLogo}
                      alt="google-icon"
                      src="/images/googleicon.svg"
                    />
                    <p className={styles.googleinput}>Log In with Google</p>
                  </div>
                  <div className={styles.signupdiv}>
                    <p className={styles.signup}>If you have an account,</p>
                    <div
                      onClick={() => {
                        setFieldValue("isSignup", false);
                      }}
                      className={styles.signuplink}
                    >
                      Log in.
                    </div>
                  </div>
                </div>
              </Container>
            ) : (
              <Container>
                <Form>
                  <div className={styles.inputDiv}>
                    <input
                      name="email"
                      type="email"
                      value={values.email}
                      placeholder="Email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      className={styles.modalInput}
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.email}</p>
                    </div>
                  ) : null}

                  <div className={styles.inputDiv}>
                    <input
                      name="password"
                      type="password"
                      value={values.password}
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={styles.modalInput}
                    />
                  </div>

                  {errors.password && touched.password ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.password}</p>
                    </div>
                  ) : null}

                  <div className={styles.forgetpass}>
                    <Link className={styles.forgetpassword} href="#">
                      Forgot password?
                    </Link>
                  </div>
                  <div className={styles.inputDiv}>
                    <YellowButton text="Log In" onClick={handleSubmit} />
                  </div>

                  {/* <button type="submit">Log In</button> */}

                  <div className={styles.googleLoginDiv}>
                    <div className={styles.googleLogin}>
                      <Image
                        width={26}
                        height={26}
                        className={styles.mainLogo}
                        alt="google-icon"
                        src="/images/googleicon.svg"
                      />
                      <p className={styles.googleinput}>Log In with Google</p>
                    </div>
                    <div className={styles.signupdiv}>
                      <p className={styles.signup}>
                        If you don’t have an account yet,
                      </p>
                      <div
                        onClick={() => {
                          setFieldValue("isSignup", true);
                        }}
                        className={styles.signuplink}
                      >
                        Sign up.
                      </div>
                    </div>
                  </div>
                </Form>
              </Container>
            )}
          </Modal.Body>
        </Modal>
      ) : (
        <></>
      )}
    </>
  );
};

export default LoginModal;
