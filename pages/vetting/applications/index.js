import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";

import { useAuth } from "../../../auth/useAuth";
import { useAuthModalContext } from "../../../context/AuthModalProvider";
import { getOrganization } from "../../../axios/organization.axios";

import EventDetails from "../../../components/EventDetails";
import TickitButton from "../../../components/tickitButton";
import Loader from "../../../components/loader/loader";

import styles from "../Vetting.module.scss";

const Applications = () => {
  const [organization, setOrganization] = useState();
  const [ownerId, setOwnerId] = useState();

  const { setModalOpen } = useAuthModalContext();
  const { user } = useAuth();
  const router = useRouter();

  const handleRouting = async () => {
    if (user) {
      if (user.user) {
        setOwnerId(user.user.id);
      } else {
        setOwnerId(user.id);
      }
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
    getOrganizationDetails(ownerId);
  };

  const getOrganizationDetails = async (id) => {
    let organizations = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      })
    );
    console.log("organizations: ", organizations);
    setOrganization(organizations.data);
    if ((organizations.data.length = 1 && organizations.data[0].isVetted)) {
      ////change////
      // router.push("/create-event");
      router.push("/vetting/applications");
    } else if (organizations.data.length < 1) {
      router.push("/vetting");
    } else {
      router.push("/vetting/applications");
    }
  };

  useEffect(() => {
    handleRouting();
  }, [user]);

  useEffect(() => {
    if (organization) {
      console.log("organization: ", organization);
    }
  }, [organization]);
  return (
    <div className={styles.wrapper}>
      <Container style={{ padding: "50px 10px" }}>
        <Row style={{ paddingTop: "36px " }}>
          <Col md={6}>
            <p className="pageTitle">Applications</p>
          </Col>
          <Col md={6}>
            <div className={styles.buttons}>
              <TickitButton
                style2
                text="BACK TO HOME"
                minWidth="250px"
                onClick={() => {
                  router.push("/");
                }}
              />
            </div>
          </Col>
        </Row>
        {organization && organization.length > 0 ? (
          <>
            {organization?.map((organization, index) => (
              <div style={{ marginTop: "36px" }} key={index}>
                <div className="cardWrapper">
                  <div className={styles.appCard}>
                    <div>
                      <p className="section-title ">
                        organization name: {organization.name}
                      </p>
                      <p className="section-title ">
                        Status:{" "}
                        {organization.isVetted ? "Approved" : "Under Review"}
                      </p>
                    </div>

                    <div className={styles.event}>
                      {!organization.isVetted && (
                        <EventDetails details="Check your inbox for the approval email. Meanwhile, you can buy tickets for the best events in your region." />
                      )}
                    </div>
                    <div className={styles.appButton}>
                      <TickitButton
                        text={
                          organization.isVetted
                            ? "Create Event"
                            : "SEE APPLICATION"
                        }
                        minWidth="250px"
                        onClick={() => {
                          if (organization.isVetted) {
                            router.push("/create-event");
                          } else {
                            router.push("/application");
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div
            style={{
              height: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Applications;
