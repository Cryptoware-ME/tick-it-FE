import React, { useEffect, useState } from "react";
import styles from "./EventDate.module.scss";

const EventDate = ({ date, time, fontSize = "17px" }) => {
  return (
    <>
      {date && time ? (
        <div style={{ fontSize: `${fontSize}` }} className={styles.eventDate}>
          {date} <span> | </span> {time}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventDate;
