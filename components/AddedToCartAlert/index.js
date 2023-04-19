import React, { useEffect, useState } from "react";
import styles from "./AddedToCartAlert.module.scss";
import Link from "next/link";
import Image from "next/image";
const AddedToCartAlert = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.menu} ${isOpen && styles.show} `}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={`${styles.dropdown} ${isOpen && styles.active} `}>
        <div className={styles.alertDiv}>
          <div className={styles.linkDiv}>
            <p className={styles.dropdownText}>Item added to</p>
            <Link href="/cart" className={styles.dropdownLink}>
              cart
            </Link>
          </div>

          <Image
            onClick={onClose}
            style={{ cursor: "pointer" }}
            width={12}
            height={12}
            alt="icon"
            src="/images/close.svg"
          />
        </div>

        <hr className={styles.horline} />
        {/* <div className={styles.progress}>
          <div className={styles.color}></div>
        </div> */}
      </div>
    </div>
  );
};

export default AddedToCartAlert;
