import React, { useState, useEffect } from "react";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import Image from "next/image";

import TickitButton from "../tickitButton";

import styles from "./OrganizationSidebar.module.scss";

const OrganizationSidebar = ({ data, selected }) => {
  const [width, setWidth] = useState();

  const { toggleSidebar } = useProSidebar();

  const getWidth = () => {
    let a = window.innerWidth;
    if (a > 991) {
      setWidth(a);
    }
  };

  useEffect(() => {
    getWidth();
  }, []);

  return (
    <div className={styles.sideBar}>
      <Sidebar
        breakPoint="lg"
        backgroundColor={width > 991 ? "transparent" : "var(--background)"}
        width={width > 991 ? "100%" : "80%"}
        className={styles.sideBarmenu}
      >
        <Menu>
          {/* <div className={styles.userDetails}>
            <div className={styles.dropTitle}>
              <Image
                width={38}
                height={38}
                alt="profile"
                src={data?.profile ? data?.profile : "/images/userPhoto2.png"}
                className={styles.profileImage}
              />
              <p className={styles.userName}>{data?.name}</p>
              <Image
                width={23}
                height={13}
                alt="down"
                src="/images/downArrow.png"
                className={styles.arrowDown}
              />
            </div>
          </div> */}
          <div className={styles.dashboardBar}>
            <Link
              href={`/organization/${data?.id}/all-events`}
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "events" ? "var(--primary-dark)" : "var(--white)",
                backgroundColor:
                  selected == "events" ? "#050505" : "transparent",
              }}
            >
              All Events
            </Link>
            <Link
              href={`/organization/${data?.id}/team`}
              className={styles.dashboardLink}
              style={{
                color:
                  selected == "team" ? "var(--primary-dark)" : "var(--white)",
                backgroundColor: selected == "team" ? "#050505" : "transparent",
              }}
            >
              Team
            </Link>
            <Link
              href={`/organization/${data?.id}/payment-settings`}
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
              Payment Settings
            </Link>
            <div className={styles.dashboardBtn}>
              <TickitButton text="atendee data" minWidth="100%" />
            </div>
          </div>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div
          onClick={() => {
            toggleSidebar();
          }}
          className={`d-lg-none mx-auto mb-2`}
        >
          <Image
            alt="openmodal"
            src="/images/rightarrow.png"
            width="40"
            height="30"
          />
        </div>
      </main>
    </div>
  );
};
export default OrganizationSidebar;
