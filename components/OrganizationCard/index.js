import React, { useEffect, useState } from "react";
import styles from "./OrganizationCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

const OrganizationCard = () => {
  return (
    <>
      <Col lg={3} md={6} className={styles.organizerCard}>
        <div>
          <Image
            width={512}
            height={512}
            className={styles.cardImage}
            alt="image"
            src="/images/organization.png"
          />
        </div>
        <p className={styles.organizationName}>Factory People</p>
        <p className={styles.organizationRole}>Organizer</p>
      </Col>
    </>
  );
};

export default OrganizationCard;
