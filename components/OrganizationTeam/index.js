import React from "react";
import styles from "./OrganizationTeam.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
const OrganizationTeam = () => {
  return (
    <Container fluid className={styles.organization}>
      <div className={styles.teamCard}>
        <p className={styles.teamTitle}>Team</p>
        <Image
          width={22}
          height={22}
          alt="search"
          src="/images/addYellow.png"
          className={styles.addButton}
        />
        <p className={styles.addTitle}>Add Staff</p>
        
      </div>
    </Container>
  );
};
export default OrganizationTeam;
