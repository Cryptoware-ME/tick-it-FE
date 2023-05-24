import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useAuthModalContext } from "../../context/AuthModalProvider";
import TickitButton from "../../components/tickitButton";
import UserDropdown from "../UserDropdown";
import AddedToCartAlert from "../AddedToCartAlert";
import { ToastContainer, toast } from "react-toastify";
import LoginModal from "../LoginModal";
import { useAuth } from "../../auth/useAuth";
import { useRouter } from "next/router";
import { getOrganization } from "../../axios/organization.axios";
import { ConnectWalletComponent, Identicon } from "@cryptogate/react-ui";
import { useEthereum } from "@cryptogate/react-providers";
export default function NavBar() {
  const { setModalOpen } = useAuthModalContext();
  const { logOut, user } = useAuth();
  const { account } = useEthereum();
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [vetted, setVetted] = useState(true);
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

  // useEffect(() => {
  //   if (user?.user) {
  //     getOrganizationDetails(user?.user.id);
  //   } else {
  //     getOrganizationDetails(user?.id);
  //   }
  // }, [user]);

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
              <div onClick={handleRouting} className={styles.navbarLink}>
                Create Event
              </div>

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
             <div      style={{ width:"40px"}}>

                  <ConnectWalletComponent
                    DisabledComponent={<></>}
                    ActiveComponent={<></>}
                  />
             </div>
             

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
