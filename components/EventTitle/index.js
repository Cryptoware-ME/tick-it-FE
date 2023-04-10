import React, { useEffect, useState } from "react";
import styles from "./EventTitle.module.scss";

const EventTitle = ({ title }) => {
  return (
    <>
      {title ? (
       <h1 className={styles.eventTitle}>{title}</h1>
      ) : (
        <></>
      )}
    </>
  );
};

export default EventTitle;
