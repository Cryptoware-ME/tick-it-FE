import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ProfileSocials.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faDiscord,
  faTelegramPlane,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const ProfileSocials = ({
  discord,
  twitter,
  instagram,
  telegram,
  centered = false,
}) => {
  return (
    <Row
      style={{
        display: "flex",
        justifyContent: centered == true ? "center" : "flex-start",
      }}
    >
      {discord && (
        <Col xl={1}>
          <FontAwesomeIcon
            className={styles.socialIcon}
            icon={faDiscord}
            onClick={() => {
              window.open(`https://discord.gg/${discord}`, "_blank");
            }}
          />
        </Col>
      )}
      {twitter && (
        <Col xl={1}>
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`https://twitter.com/${twitter}`, "_blank");
            }}
          />
        </Col>
      )}
      {telegram && (
        <Col xl={1}>
          <FontAwesomeIcon
            icon={faTelegramPlane}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`https://t.me/${telegram}`, "_blank");
            }}
          />
        </Col>
      )}
      {instagram && (
        <Col xl={1}>
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.socialIcon}
            onClick={() => {
              window.open(`https://www.instagram.com/${instagram}`, "_blank");
            }}
          />
        </Col>
      )}
    </Row>
  );
};

export default ProfileSocials;
