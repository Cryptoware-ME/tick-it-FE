import React, { useEffect, useState } from "react";
import styles from "./YellowButton.module.scss";
import Image from "next/image";
const YellowButton = ({
  text,
  onClick,
  disabled,
  padding,
  fontSize = "16px",
  minWidth = "140px",
  style2 = false,
  add = false,
}) => {
  return (
    <>
      {text ? (
        <button
          className={styles.yellow}
          onClick={onClick}
          disabled={disabled}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--yellowDisabled)"
              : style2
              ? "var(--yellow2Hover)"
              : "var(--yellow1Hover)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--yellowDisabled)"
              : style2
              ? "var(--yellow2)"
              : "var(--yellow1)")
          }
          style={{
            fontSize: fontSize,
            padding: padding,
            minWidth: minWidth,
            backgroundColor: disabled
              ? "var(--yellowDisabled)"
              : style2
              ? "var(--yellow2)"
              : "var(--yellow1)",
          }}
        >
          {add && (
            <Image
              width={20}
              height={20}
              className={styles.btnImage}
              alt="card-image"
              src="/images/add.png"
            />
          )}

          {text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default YellowButton;
