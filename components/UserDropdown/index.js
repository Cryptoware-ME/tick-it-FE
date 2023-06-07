import React, { useEffect, useState } from "react";
import styles from "./UserDropdown.module.scss";
import Link from "next/link";
const UserDropdown = ({ isOpen, onClose, logOut, user }) => {
  const handleRoute = (route) => {
    onClose;
    return route;
  };
  return (
    <div className={`${styles.menu} ${isOpen && styles.show} `}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={`${styles.dropdown} ${isOpen && styles.active} `}>
        <p className={styles.dropdownTitle}>
          {user?.user ? user?.user.username : user?.username}
        </p>
        <p className={styles.dropdownEmail}>
          {user?.user ? user?.user.email : user?.email}
        </p>
        <Link
          onClick={onClose}
          href="/user/dashboard"
          className={styles.dropdownLink}
        >
          Dashboard
        </Link>

        <Link
          onClick={onClose}
          href="/user/tickets"
          className={styles.dropdownLink}
        >
          Tickets
        </Link>
        <Link
          onClick={onClose}
          href="/user/funds"
          className={styles.dropdownLink}
        >
          Funds
        </Link>
        <Link
          onClick={onClose}
          href="/user/hosting"
          className={styles.dropdownLink}
        >
          Hosting
        </Link>
        <Link
          onClick={onClose}
          href="/user/attendance"
          className={styles.dropdownLink}
        >
          Attendance
        </Link>
        <Link
          onClick={onClose}
          href="/user/activity"
          className={styles.dropdownLink}
        >
          Activity
        </Link>
        <hr className={styles.horline} />
        <Link
          onClick={onClose}
          href="/user/settings"
          className={styles.dropdownLink}
        >
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
