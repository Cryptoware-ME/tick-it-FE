import React from "react";
import styles from "./EventDate.module.scss";

const EventDate = ({ date, time, fontSize = "16px" }) => {
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
