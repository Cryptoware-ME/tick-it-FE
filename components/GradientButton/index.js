import React, { useEffect, useState } from "react";
import styles from "./GradientButton.module.scss";

const GradientButton = ({
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
          className={styles.gradient}
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

export default GradientButton;
