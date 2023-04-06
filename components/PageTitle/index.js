import React, { useEffect, useState } from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({
  text
}) => {
  return (
    <>
      {text ? (
        <h1 className={styles.pageTitle}>Explore</h1>
      ) : (
        <></>
      )}
    </>
  );
};

export default PageTitle;
