import React from "react";
import { Col } from "react-bootstrap";
import Image from "next/image";

import styles from "./OrganizationCard.module.scss";

const OrganizationCard = ({ data }) => {
  console.log("data: ", data.profile);
  return (
    <>
      <Col lg={3} md={6} className={styles.organizerCard}>
        <div>
          <Image
            width={512}
            height={512}
            className={styles.cardImage}
            alt="image"
            src={data?.profile}
          />
        </div>
        <p className={styles.organizationName}>{data?.name}</p>
        <p className={styles.organizationRole}>Organizer</p>
      </Col>
    </>
  );
};

export default OrganizationCard;
