import React from "react";
import Image from "next/image";
import { Col } from "react-bootstrap";

import styles from "./AddOrganizationCard.module.scss";

const AddOrganizationCard = () => {
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
        <p className={styles.organizationName}>Create Organization</p>
      </Col>
    </>
  );
};

export default AddOrganizationCard;
