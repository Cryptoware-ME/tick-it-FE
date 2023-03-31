"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
export default function NavBar() {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
        className={styles.navWrapper}
      
      >
        <div
          style={{
            color: "white",
          }}
        >
          navbar
        </div>
      </Navbar>
    </>
  );
}
