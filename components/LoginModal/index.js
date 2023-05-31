import React, { useEffect, useState } from "react";
import styles from "./LoginModal.module.scss";
import { useFormik } from "formik";
import * as yup from "yup";
import { Col, Row, Modal, Container, Alert, Form } from "react-bootstrap";
import Link from "next/link";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import TickitButton from "../tickitButton";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { login, signup } from "../../axios/auth.axios";
import { useAuth } from "../../auth/useAuth";
import { getUsers } from "../../axios/user.axios";

const LoginModal = () => {
  const { logIn, user } = useAuth();
  const { modalOpen, setModalOpen } = useAuthModalContext();
  const [loginUser, setLoginUser] = useState("");
  const { data: session } = useSession();
  const [userEmail, setUserEmail] = useState();
  const [googleUser, setGoogleUser] = useState();

  useEffect(() => {
    if (session?.user) {
      setUserEmail(session.user.email);
      setGoogleUser(session.user.name);
    }
  }, [session]);

  const handleSignIn = () => {
    signIn("google");
  };
  useEffect(() => {
    if (userEmail && googleUser) {
      handleGoogleLogIn();
    }
  }, [userEmail && googleUser]);

  const handleGoogleLogIn = async () => {
    let response = await getUsers(
      JSON.stringify({ where: { email: userEmail } })
    );
    if (response?.data.length > 0) {
      const loginRes = await login({
        username: userEmail,
        password: "password123",
      });
      logIn(loginRes);
      if (loginRes) {
        setModalOpen(false);
      }
    } else {
      const response = await signup({
        email: userEmail,
        username: googleUser,
        password: "password123",
      });
      localStorage.setItem("token", "bearer " + response.token);
      setModalOpen(false);
    }
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("This email is invalid")
      .when("isSignup", {
        is: true,
        then: () =>
          yup
            .string()
            .email()
            .test(
              "checkDuplicateEmail",
              "Provided Email is not available",
              function (value) {
                return new Promise((resolve, reject) => {
                  getUsers(JSON.stringify({ where: { email: value } }))
                    .then((user) => {
                      if (user.data.length > 0) {
                        resolve(false);
                      } else {
                        resolve(true);
                      }
                    })
                    .catch(() => {
                      resolve(false);
                    });
                });
              }
            )
            .required("Email is a required field"),
      }),
    password: yup.string().min(6).required("Password is a required field"),
    username: yup.string().when("isSignup", {
      is: true,
      then: () =>
        yup
          .string()
          .test(
            "checkDuplicateUsername",
            "Provided Username is not available",
            function (value) {
              return new Promise((resolve, reject) => {
                getUsers(JSON.stringify({ where: { username: value } }))
                  .then((user) => {
                    if (user.data.length > 0) {
                      resolve(false);
                    } else {
                      resolve(true);
                    }
                  })
                  .catch(() => {
                    resolve(false);
                  });
              });
            }
          )
          .required("Username is a required field"),
    }),
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
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      isSignup: false,
    },
    validationSchema: schema,
    onSubmit: async (values) => {
      const loginRes = await login({
        username: loginUser,
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
              if (!user) {
                setModalOpen(false);
              } else {
                setModalOpen(false);
              }
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
                    style={{ maxWidth: "80%" }}
                    className="modalInput"
                  />
                </div>
                <div
                  style={{
                    minHeight: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.username && touched.username ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.username}</p>
                    </div>
                  ) : null}
                </div>

                <div className={styles.inputDiv}>
                  <input
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="Email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    required
                    style={{ maxWidth: "80%" }}
                    className="modalInput"
                  />
                </div>
                <div
                  style={{
                    minHeight: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.email && touched.email ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.email}</p>
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputDiv}>
                  <input
                    name="password"
                    type="password"
                    value={values.password}
                    placeholder="Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ maxWidth: "80%" }}
                    className="modalInput"
                  />
                </div>
                <div
                  style={{
                    minHeight: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.password && touched.password ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.password}</p>
                    </div>
                  ) : null}
                </div>
                <div className={styles.inputDiv}>
                  <input
                    name="confirmpassword"
                    type="password"
                    value={values.confirmpassword}
                    placeholder="Confirm Password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={{ maxWidth: "80%" }}
                    className="modalInput"
                  />
                </div>
                <div
                  style={{
                    minHeight: "20px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {errors.confirmpassword && touched.confirmpassword ? (
                    <div className={styles.errors}>
                      <p className={styles.error}> {errors.confirmpassword}</p>
                    </div>
                  ) : null}
                </div>

                <div className={styles.inputDiv}>
                  <TickitButton
                    text="Sign Up"
                    onClick={async () => {
                      const response = await signup({
                        email: values.email,
                        username: values.username,
                        password: values.password,
                      });
                      logIn(response);
                      if (response) {
                        setModalOpen(false);
                      }
                    }}
                  />
                </div>
                <div className={styles.googleLoginDiv}>
                  {/* <div onClick={handleSignIn} className={styles.googleLogin}>
                    <Image
                      width={26}
                      height={26}
                      className={styles.mainLogo}
                      alt="google-icon"
                      src="/images/googleicon.svg"
                    />
                    <p className={styles.googleinput}>Log In with Google</p>
                  </div> */}
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
                      type="text"
                      value={loginUser}
                      placeholder="Email or Username"
                      onBlur={handleBlur}
                      onChange={(e) => {
                        setLoginUser(e.target.value);
                      }}
                      style={{ maxWidth: "80%" }}
                      className="modalInput"
                    />
                  </div>
                  <div
                    style={{
                      minHeight: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {errors.email && touched.email ? (
                      <div className={styles.errors}>
                        <p className={styles.error}> {errors.email}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className={styles.inputDiv}>
                    <input
                      name="password"
                      type="password"
                      value={values.password}
                      placeholder="Password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      style={{ maxWidth: "80%" }}
                      className="modalInput"
                    />
                  </div>
                  <div
                    style={{
                      minHeight: "20px",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {errors.password && touched.password ? (
                      <div className={styles.errors}>
                        <p className={styles.error}> {errors.password}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className={styles.forgetpass}>
                    <Link className={styles.forgetpassword} href="#">
                      Forgot password?
                    </Link>
                  </div>
                  <div className={styles.inputDiv}>
                    <TickitButton text="Log In" onClick={handleSubmit} />
                  </div>

                  <div className={styles.googleLoginDiv}>
                    {/* <div onClick={handleSignIn} className={styles.googleLogin}>
                      <Image
                        width={26}
                        height={26}
                        className={styles.mainLogo}
                        alt="google-icon"
                        src="/images/googleicon.svg"
                      />
                      <p className={styles.googleinput}>Log In with Google</p>
                    </div> */}

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
