import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import TickitButton from "../../components/tickitButton";
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
    <div className={styles.sideBar}>
      <Sidebar
        breakPoint="lg"
        backgroundColor
        width={width > 991 ? "100%" : "80%"}
      >
        <Menu>
          <div className={styles.sideBarInputDiv}>
            <Image
              width={18}
              height={18}
              alt="search"
              src="/images/searchIcon.png"
            />
            <input
              type="text"
              // value={}
              placeholder="Search"
              onChange={(e) => {}}
              required
              className={styles.sideBarInput}
            />
          </div>
          <div className={styles.sideBarInputDiv}>
            <Image
              width={14}
              height={20}
              alt="search"
              src="/images/mapIcon.png"
            />
            <input
              type="text"
              // value={}
              placeholder="Enter Location"
              onChange={(e) => {}}
              required
              className={styles.sideBarInput}
            />
          </div>
          <div className={styles.sideBarCheckboxesDiv}>
            <div
              style={{
                display: "flex",
                marginTop: "10px",

                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Used Tickets</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Unused Tickets</p>
            </div>
          </div>
          <div className={styles.dateFilterDiv}>
            <p className={styles.filterTitle}>Date</p>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <input
                className={styles.roundCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Today</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.roundCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>This Week</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.roundCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>This Month</p>
            </div>
            <div className={styles.sideBarInputDiv}>
              <p className={styles.dateText}>From</p>
              <input
                type="date"
                // value={}
                placeholder="Search"
                onChange={(e) => {}}
                required
                className={styles.sideBarInput}
                style={{ color: "#656565" }}
              />
            </div>
            <div className={styles.sideBarInputDiv}>
              <p className={styles.dateText}>To</p>
              <input
                type="date"
                // value={}
                placeholder="Search"
                onChange={(e) => {}}
                required
                className={styles.sideBarInput}
                style={{ color: "#656565" }}
              />
            </div>
          </div>
          <div className={styles.dateFilterDiv}>
            <p className={styles.filterTitle}>Categories</p>
            <div
              style={{
                display: "flex",
                marginTop: "10px",
                alignItems: "center",
              }}
            >
              <input
                className={styles.roundCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>All</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Concert</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Workshop</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Hobbies</p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <input
                className={styles.squareCheckbox}
                type="checkbox"
                onclick="myFunction()"
              />
              <p className={styles.checkboxText}>Other</p>
            </div>
          </div>
          <div className={styles.filterButton}>
            <TickitButton text="Filter" />
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
}
