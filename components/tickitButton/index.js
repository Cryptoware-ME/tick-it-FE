import React, { useEffect, useState } from "react";
import styles from "./tickitButton.module.scss";
import Image from "next/image";
const TickitButton = ({
  text,
  onClick,
  disabled,
  disabledText,
  padding = "10px 20px",
  fontSize = "14px",
  minWidth = "130px",
  style2 = false,
  isSmall = false,
  add = false,
  visa = false,
}) => {
  return (
    <>
      {text ? (
        <button
          className={styles.btn}
          onClick={onClick}
          disabled={disabled}
          onMouseOver={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--disabled1)"
              : style2
              ? "var(--secondary-dark)"
              : "var(--primary-dark)")
          }
          onMouseOut={(e) =>
            (e.target.style.backgroundColor = disabled
              ? "var(--yellowDisabled)"
              : style2
              ? "var(--secondary)"
              : "var(--primary)")
          }
          style={{
            fontSize: fontSize,
            padding: isSmall ? "6px 20px " : padding,
            minWidth: minWidth,
            color: disabled ? "var(--disabled2)" : "var(--white)",
            backgroundColor: disabled
              ? "var(--disabled1)"
              : style2
              ? "var(--secondary)"
              : "var(--primary)",
          }}
        >
       
          {add && (
            <Image
              width={18}
              height={18}
              className={styles.btnImage}
              alt="card-image"
              src="/images/add.png"
            />
          )}
{disabled && disabledText ? disabledText : text}
        
          {visa && (
            <Image
              width={80}
              height={20}
              className={styles.visaImage}
              alt="card-image"
              src="/images/visa2.svg"
            />
          )}
        </button>
      ) : (
        <></>
      )}
    </>
  );
};

export default TickitButton;
