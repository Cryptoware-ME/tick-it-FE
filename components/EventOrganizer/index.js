import React, { useEffect, useState } from "react";
import styles from "./EventOrganizer.module.scss";

const EventOrganizer = ({ organizer }) => {
  return (
    <>
      {organizer ? <h4 className={styles.eventOrganizer}> {organizer}</h4> : <></>}
    </>
  );
};

export default EventOrganizer;
