import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAuthModalContext } from "../../context/AuthModalProvider";

export default function NavBar() {
  const { setModalOpen } = useAuthModalContext();
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
            alt="icon"
            src="/images/logo.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={styles.navbarRoutes}>
            <Link href="#explore" scroll className={styles.navbarLink}>
              Explore
            </Link>
            <Link href="/create-event" className={styles.navbarLink}>
              Create Event
            </Link>
        
            <Link href="/support" className={styles.navbarLink}>
              Support
            </Link>
          </Nav>
          <Nav>
            {/* <div
              onClick={() => {
                setIsOpen(false);
              }}
              style={{ marginRight: "15px" }}
            >
              <ConnectWalletComponent
                NetworkChainIds={[1, 5]}
                ConnectedMenuChosen={ConnectedMenuOptions.NOMENU}
                onSign={(key) => {}}
                ActiveComponent={
                  <Image
                    width={35}
                    height={35}
                    alt="icon"
                    src="/images/user.png"
                  />
                }
              />
            </div> */}
            <Link href="/dashboard" style={{ marginRight: "15px" }}>
              <Image width={35} height={35} alt="icon" src="/images/user.png" />
            </Link>

            <Link href="/">
              <Image
                width={35}
                height={35}
                alt="icon"
                src="/images/chart.png"
              />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
