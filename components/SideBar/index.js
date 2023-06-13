import React, { useState, useEffect } from "react";
import { Sidebar, Menu, useProSidebar } from "react-pro-sidebar";
import Image from "next/image";

import { getCategories } from "../../axios/event.axios";

import TickitButton from "../../components/tickitButton";

import styles from "./SideBar.module.scss";

export default function SideBar({ categoryFilter, setCategoryFilter }) {
  const [width, setWidth] = useState();
  const [categories, setCategories] = useState([]);

  const { toggleSidebar } = useProSidebar();

  const getWidth = () => {
    let a = window.innerWidth;
    if (a > 991) {
      setWidth(a);
    }
  };

  useEffect(() => {
    getWidth();
    getCategories().then((data) => {
      setCategories(data.data);
    });
  }, []);

  return (
    <div className={styles.sideBar}>
      <Sidebar
        breakPoint="lg"
        backgroundColor={width > 991 ? "transparent" : "var(--background)"}
        width={width > 991 ? "100%" : "80%"}
      >
        <Menu className={styles.sidebarMenu}>
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

            {categories.map((category, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  className={styles.squareCheckbox}
                  type="checkbox"
                  onClick={() => {
                    setCategoryFilter(category.id);
                  }}
                />
                <p className={styles.checkboxText}>{category.name}</p>
              </div>
            ))}
          </div>
          <div className={styles.filterButton}>
            <TickitButton text="Filter" />
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
}
