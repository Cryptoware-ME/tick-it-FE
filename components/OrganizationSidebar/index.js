import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import styles from "./OrganizationSidebar.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";

const OrganizationSidebar = () => {
  const [width, setWidth] = useState();
  useEffect(() => {
    getWidth();
  }, []);

  const getWidth = () => {
    let a = window.innerWidth;
    if (a > 991) {
      setWidth(a);
    }
  };
  return (
    <div className={styles.sideBar}>
      <Sidebar
        breakPoint="lg"
        backgroundColor
        width={width > 991 ? "100%" : "80%"}
        className={styles.sideBarmenu}
      >
        <Menu>
          <div className={styles.userDetails}>
            <div className={styles.dropTitle}>
              <Image
                width={38}
                height={38}
                alt="search"
                src="/images/profile.png"
                className={styles.profileImage}
              />
              <p className={styles.userName}>Factory People</p>
              <Image
                width={23}
                height={13}
                alt="search"
                src="/images/downArrow.png"
                className={styles.arrowDown}
              />
            </div>
          </div>
          <div className={styles.dashboardBar}>
            <Link href="#" className={styles.dashboardLink}>
              All Events
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              Team
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              Payment Settings
            </Link>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};
export default OrganizationSidebar;
