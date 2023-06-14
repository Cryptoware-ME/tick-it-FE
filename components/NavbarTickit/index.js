import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

import { ConnectWalletComponent } from "@cryptogate/react-ui";
import { useEthereum } from "@cryptogate/react-providers";

import { useAuth } from "../../auth/useAuth";
import { getOrganization } from "../../axios/organization.axios";
import { useCartContext } from "../../cart/cart-context";
import { useAuthModalContext } from "../../context/AuthModalProvider";

import UserDropdown from "../UserDropdown";
import TickitButton from "../tickitButton";
import LoginModal from "../LoginModal";

import styles from "./NavbarTickit.module.scss";

const NavbarTickit = () => {
  // States
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [added, setAdded] = useState(false);
  const [totalCartItems, setTotalCartItems] = useState(0);

  // Hooks
  const { setModalOpen } = useAuthModalContext();
  const { cartItems } = useCartContext();
  const { logOut, user } = useAuth();
  const router = useRouter();
  const { account } = useEthereum();

  // Functions
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

  // Use Effects
  useEffect(() => {
    if (added) {
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }
  }, [added]);

  useEffect(() => {
    setTotalCartItems(
      cartItems.reduce((count, item) => {
        return count + item.quantity;
      }, 0)
    );
  }, [cartItems]);

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
      <Navbar bg="dark" variant="dark" expand="lg">
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

              {/* <div className={styles.navbarLink}>Support</div> */}
            </Nav>
            {/* {!isMobile && ( */}
            <Nav className={styles.navbarUserRelated}>
              {account && (
                <div className={styles.connected}>
                  <ConnectWalletComponent ActiveComponent={<></>} />
                </div>
              )}
              <div
                onClick={() => {
                  user ? router.push("/cart") : setModalOpen(true);
                }}
                className={styles.cart}
              >
                <Image
                  width={35}
                  height={35}
                  alt="icon"
                  src="/images/cartLogo.svg"
                />
                {totalCartItems ? (
                  <div className={styles.cartCount}>{totalCartItems}</div>
                ) : (
                  <></>
                )}
              </div>

              {!user && (
                <div className={styles.logIn}>
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
                <div className={styles.logIn}>
                  <Image
                    onClick={() => {
                      setShowUserDropdown(true);
                    }}
                    width={38}
                    height={38}
                    alt="icon"
                    src="/images/user.png"
                  />
                </div>
              )}
            </Nav>
            {/* )} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTickit