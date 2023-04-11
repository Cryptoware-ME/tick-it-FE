import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

import styles from "./DashboardBar.module.scss";

export default function DashboardBar() {
  const [width, setWidth] = useState();
  const { toggleSidebar } = useProSidebar();
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
      >
        <Menu></Menu>
      </Sidebar>
    </div>
  );
}
