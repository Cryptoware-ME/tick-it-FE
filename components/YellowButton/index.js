import React, { useEffect, useState } from "react";
import styles from "./YellowButton.module.scss";

const YellowButton = ({
  text,
  onClick,
  disabled,
  padding,
  fontSize = "20px",
  minWidth = "150px",
}) => {
  return (
    <>
      {text ? (
        <button
          className={styles.yellow}
          onClick={onClick}
          disabled={disabled}
          style={{ padding: padding, minWidth: minWidth }}
        >
          <span style={{ fontSize: fontSize }}>{text}</span>
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default YellowButton;
