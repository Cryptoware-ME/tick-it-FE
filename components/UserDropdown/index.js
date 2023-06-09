import React, { useEffect, useState } from "react";
import styles from "./UserDropdown.module.scss";
import Link from "next/link";
import { signIn, useSession, signOut } from "next-auth/react";

const UserDropdown = ({ isOpen, onClose, logOut, user }) => {
  return (
    <div className={`${styles.menu} ${isOpen && styles.show} `}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div className={`${styles.dropdown} ${isOpen && styles.active} `}>
        <p className={styles.dropdownTitle}>
          {user?.user ? user?.user.username : user?.username}
        </p>
        <p className={styles.dropdownEmail}>
          {" "}
          {user?.user ? user?.user.email : user?.email}
        </p>
        <Link href="/tickets" className={styles.dropdownLink}>
          Dashboard
        </Link>

        <Link href="/tickets" className={styles.dropdownLink}>
          Tickets
        </Link>
        <Link href="/tickets"className={styles.dropdownLink}>
          Funds
        </Link>
        <Link href="/tickets"className={styles.dropdownLink}>
          Hosting
        </Link>
        <Link href="/tickets"className={styles.dropdownLink}>
          Activity
        </Link>
        <hr className={styles.horline} />
        <Link href="/tickets" className={styles.dropdownLink}>
          Settings
        </Link>
        <div
          className={styles.dropdownBtn}
          onClick={() => {
            // signOut("google");
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
