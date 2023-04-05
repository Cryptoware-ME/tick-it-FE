import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import Link from "next/link";
import Image from "next/image";
import styles from "./SideBar.module.scss";

export default function SideBar() {
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
    <div style={{ display: "flex", height: "100%" }}>
      <Sidebar
        breakPoint="lg"
        background="#1a2a47"
        width={width > 991 ? "100%" : "80%"}
      >
        <Menu>
          <Link
            href={`/#`}
            onClick={() => {
              toggleSidebar();
            }}
            style={{
              color: " white",
            }}
          >
            link
          </Link>
        </Menu>
      </Sidebar>
      <main style={{ display: "flex", padding: 10 }}>
        <div
          onClick={() => {
            toggleSidebar();
          }}
          className={`d-lg-none mx-auto mb-2`}
        >
          {/* <Image
              alt="openmodal"
              src="/openmodal.png"
              width="25"
              height="25"
            /> */}
        </div>
      </main>
    </div>
  );
}
