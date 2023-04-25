import React, { useEffect, useState } from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({
  text,paddingTop="50px"
}) => {
  return (
    <>
      {text ?  (
        <h1 styles={{paddingTop:{paddingTop}}} className={styles.pageTitle}>{text}</h1>
      ) : (
        <></>
      )}
    </>
  );
};

export default PageTitle;
