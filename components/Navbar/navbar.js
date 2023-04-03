"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={styles.navbarCon}
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            width={180}
            height={30}
            className={styles.mainLogo}
            alt="crytoware-icon"
            src="/images/logo.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navbarRoutes}>
            <Link href="/explore" className={styles.navbarLink}>
              Explore
            </Link>
            <Link href="/create-event" className={styles.navbarLink}>
              Create Event
            </Link>
            <Link href="/about" className={styles.navbarLink}>
              About
            </Link>
            <Link href="/support" className={styles.navbarLink}>
              Support
            </Link>
          </Nav>
          <Nav>
            <Link href="/" style={{ marginRight: "15px" }}>
              <Image
                width={35}
                height={35}
                alt="crytoware-icon"
                src="/images/user.png"
              />
            </Link>
            <Link href="/">
              <Image
                width={35}
                height={35}
                alt="crytoware-icon"
                src="/images/chart.png"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
