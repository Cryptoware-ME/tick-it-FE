import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import TickitButton from "../../components/tickitButton";
import UserDropdown from "../UserDropdown";
import AddedToCartAlert from "../AddedToCartAlert";
import { toast } from "react-toastify";
import LoginModal from "../LoginModal";
import { useAuth } from "../../auth/useAuth";
import { useRouter } from "next/router";
import { getOrganization } from "../../axios/organization.axios";
import { ConnectWalletComponent } from "@cryptogate/react-ui";

export default function NavBar() {
  const { setModalOpen } = useAuthModalContext();
  const { logOut, user } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [added, setAdded] = useState(false);
  const router = useRouter();
  const handleRouting = async () => {
    if (user) {
      checkVettingDetails();
    } else {
      setModalOpen(true);
      let userDetails = await user;
      if (userDetails) {
        checkVettingDetails();
      }
    }
  };
  const checkVettingDetails = async () => {
    if (user?.user) {
      getOrganizationDetails(user?.user.id);
    } else {
      getOrganizationDetails(user?.id);
    }
  };
  const getOrganizationDetails = async (id) => {
    let organization = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      })
    );
    if (organization.data[0]) {
      if (organization.data[0].isVetted) {
        router.push("/create-event");
      } else {
        router.push("/explore");
      }
    } else {
      router.push("/vetting");
    }
  };

  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }, [added]);
  return (
    <>
      <LoginModal />
      <UserDropdown
        onClose={() => {
          setShowUserDropdown(false);
        }}
        isOpen={showUserDropdown}
        logOut={logOut}
        user={user}
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
          <Link href="/">
            <Navbar.Brand>
              <Image
                width={180}
                height={30}
                className={styles.mainLogo}
                alt="icon"
                src="/images/logo.svg"
              />
            </Navbar.Brand>
          </Link>
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
              <div
                onClick={() => {
                  router.push("/explore");
                }}
                className={styles.navbarLink}
              >
                Explore
              </div>

              <div onClick={handleRouting} className={styles.navbarLink}>
                Create Event
              </div>

              <div className={styles.navbarLink}>Support</div>
            </Nav>
            <Nav>
              <div className={styles.rightLinks}>
                <div style={{ width: "40px" }}>
                  <ConnectWalletComponent
                    DisabledComponent={<></>}
                    ActiveComponent={<></>}
                  />
                </div>
                                       
                <Link href="/cart" scroll className={styles.navbarLink}>
                  <Image
                    style={{ marginRight: "15px" }}
                    width={33}
                    height={33}
                    alt="icon"
                    src="/images/cartLogo.svg"
                  />
                </Link>

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
                    className={styles.userDetails}
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
                    {user.user
                      ? user?.user.username?.toUpperCase()
                      : user?.username?.toUpperCase()}
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
