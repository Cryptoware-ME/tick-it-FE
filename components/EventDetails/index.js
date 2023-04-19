import React, { useEffect, useState } from "react";
import styles from "./EventDetails.module.scss";

const EventDetails = ({ width = "100%", details, fontSize = "17px" }) => {
  return (
    <>
      {details ? (
        <div
          style={{ fontSize: `${fontSize}`, width: `${width}` }}
          className={styles.eventDetails}
        >
          {details}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventDetails;
