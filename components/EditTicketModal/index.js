import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";

import { useFormik } from "formik";
import * as yup from "yup";

import { postEventTicketTypeBatch } from "../../axios/eventTicketType.axios";

import Dropzone from "../../components/Dropzone";
import TickitButton from "../tickitButton";

import styles from "./EditTicket.module.scss";

const EditTicketModal = ({
  setEditTicket,
  ticket,
  allTickets,
  setRefetchEvent,
}) => {
  const [imageError, setImageError] = useState(false);
  const [filePreview, setFilePreview] = useState();
  const [nameError, setNameError] = useState(false);
  const [image, setImage] = useState();

  const editTicket = () => {
    // let ticketSupply = 0;
    // for (let i = 0; i < tickets.length; i++) {
    //   ticketSupply = ticketSupply + tickets[i].supply;
    // }

    // addTicket.send(
    //   [[values.supply + ticketSupply], [values.price * 10 ** 18]],
    //   {
    //     gasPrice: Number(process.env.NEXT_PUBLIC_GAS_PRICE),
    //     gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
    //   }
    // );

    // setTicketSupply(values.supply);
    launchRes();
  };

  const launchRes = async () => {
    // await addTicket.response.wait();

    let ticketsData = {
      eventId: allTickets[0].eventId,
      id: ticket.id,
      name: values.name,
      description: values.description,
      image: image,
    };
    postEventTicketTypeBatch(ticketsData).then(() => {
      setEditTicket(false);
      setRefetchEvent(true);
    });
  };

  // Use Effects
  // useEffect(() => {
  //   if (addTicket.response) {
  //     launchRes();
  //   }
  // }, [addTicket.response]);

  const schema = yup.object().shape({
    name: yup.string().required(),
    // price: yup.number().required(),
    description: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      // price: "",
      description: "",
      image: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (image) {
        setImageError(false);
        values.image = image;
        let found = allTickets.find(
          (ticket) => ticket?.name?.toLowerCase() == values?.name?.toLowerCase()
        );
        if (found) {
          setNameError(true);
        } else {
          setNameError(false);
          editTicket();
        }
      } else {
        setImageError(true);
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
    <Form>
      <Modal show onHide={() => {}} centered>
        <Modal.Header
          onClick={() => {
            setEditTicket(false);
          }}
          className={styles.closeButton}
          closeButton
        />

        <Modal.Body>
          <Container>
            <p className={styles.title}>Edit Ticket</p>

            <Row>
              <Col md={4}>
                <div
                  className={styles.drop}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Dropzone
                    filePreview={filePreview}
                    setFilePreview={setFilePreview}
                    setImage={setImage}
                    text="Image (max 1MB)"
                  />
                  <div style={{ height: "20px" }}>
                    {imageError ? (
                      <div className={styles.errors}>
                        <p className={styles.error2}>Image is required field</p>
                      </div>
                    ) : null}
                  </div>
                </div>
              </Col>
              <Col md={8}>
                <div className={styles.InputDiv}>
                  <p className={styles.detailsTitle}>Ticket title</p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className="modalInput"
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{ minHeight: "20px" }}>
                  {errors.name && touched.name ? (
                    <div className={styles.errors}>
                      <p className={styles.error2}> {errors.name}</p>
                    </div>
                  ) : null}
                  {nameError && (
                    <div className={styles.errors}>
                      <p className={styles.error2}>
                        You already have a ticket with this name
                      </p>
                    </div>
                  )}
                </div>

                {/* <div className={styles.InputDiv}>
                  <p className={styles.detailsTitle}>Set price (USD)</p>
                  <input
                    id="price"
                    name="price"
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.price}
                    className="modalInput"
                    style={{ color: "#656565" }}
                  />
                </div>
                <div style={{ minHeight: "20px" }}>
                  {errors.price && touched.price ? (
                    <div className={styles.errors}>
                      <p className={styles.error2}> {errors.price}</p>
                    </div>
                  ) : null}
                </div> */}
              </Col>
            </Row>

            <Row className={styles.holderInput}>
              <div className={styles.InputDiv}>
                <p className={styles.detailsTitle}>Description</p>
                <textarea
                  id="description"
                  name="description"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  className="modalInput"
                  style={{ color: "#656565" }}
                />
              </div>
              <div style={{ minHeight: "20px" }}>
                {errors.description && touched.description ? (
                  <div className={styles.errors}>
                    <p className={styles.error2}> {errors.description}</p>
                  </div>
                ) : null}
              </div>
            </Row>
            <div className={styles.buttonAdd}>
              <TickitButton onClick={handleSubmit} text="Edit TICKET" />
            </div>
          </Container>
        </Modal.Body>
      </Modal>
    </Form>
  );
};
export default EditTicketModal;
