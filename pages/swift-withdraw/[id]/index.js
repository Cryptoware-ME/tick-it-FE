import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import styles from "./swift-withdraw.module.scss";
import * as yup from "yup";
import { Container, Row } from "react-bootstrap";
import TickitButton from "../../../components/tickitButton";

const SwiftWithdraw = ({ setWithdrawModal }) => {
  const router = useRouter();
  const { id } = router.query;
  const schema = yup.object().shape({
    BankSwiftCode: yup.string().required("Bank Swift Code is a required field"),
    AccountNumber: yup.string().required("Account Number is a required field"),
    FirstName: yup.string().required("First Name is a required field"),
    LastName: yup.string().required("Last Name is a required field"),
    BankCode: yup.string().required("Bank Code is a required field"),
    NameonAccount: yup.string().required("Name on Account is a required field"),
    Address: yup.string().required("Address is a required field"),
    CityandState: yup.string().required("City and State is a required field"),
    Country: yup.string().required("Country is a required field"),
    PhoneNumber: yup.string().required("Phone Number is a required field"),
  });

  // Formik
  const formik = useFormik({
    initialValues: {
      BankSwiftCode: "",
      AccountNumber: "",
      FirstName: "",
      LastName: "",
      BankCode: "",
      NameonAccount: "",
      Address: "",
      CityandState: "",
      Country: "",
      PhoneNumber: "",
    },
    validationSchema: schema,
    onSubmit: async () => {},
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
      <Container>
        <Row className={styles.withdraw}>
          <div className={styles.title}>
            <p className="pageTitle">SWIFT Withdraw</p>
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Bank Swift Code:</p>
            <input
              id="BankSwiftCode"
              name="BankSwiftCode"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.BankSwiftCode}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.BankSwiftCode && touched.BankSwiftCode ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.BankSwiftCode}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.details}>
            <p className={styles.bankDetails}>Bank Details: </p>
            <p className={styles.bankDetails}>JPMORGAN CHASE BANK, N.A. </p>
            <p className={styles.bankDetails}>383 MADISON AVENUE </p>
            <p className={styles.bankDetails}>NEW YORK, United States </p>
          </div>

          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Account Number</p>
            <input
              id="AccountNumber"
              name="AccountNumber"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.AccountNumber}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.AccountNumber && touched.AccountNumber ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.AccountNumber}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>First Name</p>
            <input
              id="FirstName"
              name="FirstName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.FirstName}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.FirstName && touched.FirstName ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.FirstName}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Last Name</p>
            <input
              id="LastName"
              name="LastName"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.LastName}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.LastName && touched.LastName ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.LastName}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Bank Code</p>
            <input
              id="BankCode"
              name="BankCode"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.BankCode}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.BankCode && touched.BankCode ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.BankCode}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Name on Account</p>
            <input
              id="NameonAccount"
              name="NameonAccount"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.NameonAccount}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.NameonAccount && touched.NameonAccount ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.NameonAccount}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Address</p>
            <input
              id="Address"
              name="Address"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Address}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.Address && touched.Address ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.Address}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>City and State/Province</p>
            <input
              id="CityandState"
              name="CityandState"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.CityandState}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.CityandState && touched.CityandState ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.CityandState}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Country</p>
            <input
              id="Country"
              name="Country"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.Country}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.Country && touched.Country ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.Country}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.InputDiv}>
            <p className={styles.detailsTitle}>Phone Number</p>
            <input
              id="PhoneNumber"
              name="PhoneNumber"
              type="text"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.PhoneNumber}
              className="modalInput"
              style={{ color: "#656565" }}
            />
          </div>
          <div style={{ minHeight: "20px" }}>
            {errors.PhoneNumber && touched.PhoneNumber ? (
              <div className={styles.errors}>
                <p className={styles.error2}> {errors.PhoneNumber}</p>
              </div>
            ) : null}
          </div>
          <div className={styles.buttonWithdraw}>
            <TickitButton text="WITHDRAW" />
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SwiftWithdraw;
