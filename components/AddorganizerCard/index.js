import React, { useEffect, useState } from "react";
import styles from "./AddOrganizerCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const AddOrganizerCard = () => {
  return (
    <>
      <Col lg={3} md={6} className={styles.organizerCard}>
        <div>
          <Image
            width={512}
            height={512}
            className={styles.cardImage}
            alt="image"
            src="/images/addOrganization.png"
          />
        </div>
        <p className={styles.organizationName}>Create Organizatione</p>
      </Col>
    </>
  );
};

export default AddOrganizerCard;
