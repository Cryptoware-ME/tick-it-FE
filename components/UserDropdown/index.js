import React, { useEffect, useState } from "react";
import styles from "./UserDropdown.module.scss";
import { useAuth } from "../../auth/useAuth";
import Link from "next/link";
const UserDropdown = ({ isOpen, onClose }) => {
  const { logOut, user } = useAuth();
  return (
    <div className={`${styles.menu} ${isOpen && styles.show} `}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={`${styles.dropdown} ${isOpen && styles.active} `}>
        <p className={styles.dropdownTitle}>{user?.username}</p>
        <p className={styles.dropdownEmail}>{user?.email}</p>
        <Link href="#" className={styles.dropdownLink}>
          Dashboard
        </Link>

        <Link href="#" className={styles.dropdownLink}>
          Tickets
        </Link>
        <Link href="#" className={styles.dropdownLink}>
          Funds
        </Link>
        <Link href="#" className={styles.dropdownLink}>
          Hosting
        </Link>
        <Link href="#" className={styles.dropdownLink}>
          Activity
        </Link>
        <hr className={styles.horline} />
        <Link href="#" className={styles.dropdownLink}>
          Settings
        </Link>
        <div
          className={styles.dropdownBtn}
          onClick={() => {
            logOut();
            onClose();
          }}
        >
          Log Out
        </div>
      </div>
    </div>
  );
};

export default UserDropdown;
