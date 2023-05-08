import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import TickitButton from "../../components/tickitButton";
import { useAuth } from "../../auth/useAuth";
import UserDropdown from "../UserDropdown";
import AddedToCartAlert from "../AddedToCartAlert";
import { ToastContainer, toast } from "react-toastify";
export default function NavBar() {
  const { setModalOpen } = useAuthModalContext();
  const { user } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }, [added]);
  return (
    <>
      <UserDropdown
        onClose={() => {
          setShowUserDropdown(false);
        }}
        isOpen={showUserDropdown}
      />
      <AddedToCartAlert
        onClose={() => {
          setAdded(false);
        }}
        isOpen={added}
      />

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
              src="/images/logo.svg"
            />
          </Navbar.Brand>
          <div className={styles.mobileLinks}>
            <Image
              style={{ marginRight: "15px" }}
              width={33}
              height={33}
              alt="icon"
              src="/images/cartLogo.svg"
            />

            {!user && (
              <div>
                <TickitButton
                  text="Log in"
                  padding="5px"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
              </div>
            )}
            {user && (
              <Image
                onClick={() => {
                  setShowUserDropdown(true);
                }}
                width={35}
                height={35}
                alt="icon"
                src="/images/user.png"
              />
            )}
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.navbarRoutes}>
              <Link href="/explore" scroll className={styles.navbarLink}>
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
              <div className={styles.rightLinks}>
                <Image
                  onClick={() => {
                    // setAdded(true);
                    toast("File type extension not accepted");
                  }}
                  style={{ marginRight: "15px" }}
                  width={33}
                  height={33}
                  alt="icon"
                  src="/images/cartLogo.svg"
                />
                {/* <ToastContainer /> */}

                {!user && (
                  <div>
                    <TickitButton
                      text="Log in"
                      onClick={() => {
                        setModalOpen(true);
                      }}
                    />
                  </div>
                )}
                {user && (
                  <div
                    style={{
                      borderRadius: "8px ",
                      backgroundColor: "var(--primary)",
                      padding: "10px 20px",
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setShowUserDropdown(true);
                    }}
                  >
                    {/* <Image
                    width={35}
                    height={35}
                    alt="icon"
                    src="/images/user.png"
                  /> */}
                    Hello {user?.username}
                  </div>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
