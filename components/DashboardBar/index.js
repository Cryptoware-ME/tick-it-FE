import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import styles from "./DashboardBar.module.scss";
import { Container } from "react-bootstrap";
import Image from "next/image";
import { useAuth } from "../../auth/useAuth";

export default function DashboardBar({ selected }) {
  const [width, setWidth] = useState();
  // const [selectedSection, setSelectedSection] = useState("dashboard");
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
        backgroundColor={width > 991 ? "transparent" : "var(--background)"}
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
            <Link
              href="/user/dashboard"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "dashboard"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "dashboard" ? "#050505" : "transparent",
              }}
            >
              Dashboard
            </Link>
            <Link
              href="/user/tickets"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "tickets"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "tickets" ? "#050505" : "transparent",
              }}
            >
              All Tickets
            </Link>
            <Link
              href="/user/funds"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "funds" ? "var(--primary-dark)" : "var(--white)",
                backgroundColor:
                  selected == "funds" ? "#050505" : "transparent",
              }}
            >
              Funds
            </Link>
            <Link
              href="/user/settings"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "settings"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "settings" ? "#050505" : "transparent",
              }}
            >
              Settings
            </Link>
            <div className={styles.lineDiv}>
              <hr className={styles.line} />
            </div>
            <Link
              href="/user/activity"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "activity"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "activity" ? "#050505" : "transparent",
              }}
            >
              Activity
            </Link>
            <Link
              href="/user/attendance"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "attendance"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "attendance" ? "#050505" : "transparent",
              }}
            >
              Attendance
            </Link>
            <div className={styles.lineDiv}>
              <hr className={styles.line} />
            </div>

            <Link
              href="/user/hosting"
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "hosting"
                    ? "var(--primary-dark)"
                    : "var(--white)",
                backgroundColor:
                  selected == "hosting" ? "#050505" : "transparent",
              }}
            >
              Hosting
            </Link>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}
