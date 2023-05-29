import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import styles from "./DashboardBar.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { useAuth } from "../../auth/useAuth";

export default function DashboardBar() {
  const [width, setWidth] = useState();
  const { toggleSidebar } = useProSidebar();
  const { user } = useAuth();

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
            <Image
              width={45}
              height={45}
              alt="search"
              src="/images/iconuser.png"
            />
            <div style={{ marginLeft: "5px" }}>
              <p className={styles.userName}>
                {user?.user ? user?.user.username : user?.username}
              </p>
              <p className={styles.userEmail}>
                {user?.user ? user?.user.email : user?.email}
              </p>
            </div>
          </div>
          <div className={styles.dashboardBar}>
            <Link href="#" className={styles.dashboardLink}>
              Dashboard
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              All Tickets
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              Funds
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              Activity
            </Link>
            <Link href="#" className={styles.dashboardLink}>
              Settings
            </Link>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}
