import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

import { getOrganization } from "../../../axios/organization.axios";

import EventDetails from "../../../components/EventDetails";
import TickitButton from "../../../components/tickitButton";
import Loader from "../../../components/loader/loader";

import styles from "./see-application.module.scss";

const SeeApplication = () => {
  const [orgData, setOrgData] = useState();
  const [vettingData, setVettingData] = useState();
  const [socialsData, setSocialsData] = useState();
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { orgId } = router.query;

  const getOrganizationById = async (id) => {
    let tempOrg = await getOrganization(
      JSON.stringify({
        where: { id: id },
      })
    );
    setOrgData(tempOrg.data[0]);
    setVettingData(JSON.parse(tempOrg.data[0].vettingObj));
    setSocialsData(JSON.parse(tempOrg.data[0].socials));
    setLoading(false);
  };
  useEffect(() => {
    if (orgId != undefined) {
      getOrganizationById(orgId);
    } else {
      router.push("/");
    }
  }, [orgId]);

  useEffect(() => {
    if (socialsData) {
      console.log(socialsData);
    }
  }, [socialsData]);
  return (
    <div className={styles.wrapper}>
      {!loading ? (
        <Container style={{ padding: "50px  10px" }}>
          <p className="pageTitle">{vettingData.name} vetting application</p>
          <Row>
            <Col
              md={6}
              style={{
                marginTop: "24px ",
                marginBottom: "24px ",
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <EventDetails details="Banner Image" />
              <div>
                <Image
                  width={512}
                  height={512}
                  className={styles.bannerImage}
                  alt="image"
                  src={vettingData.banner}
                />
              </div>
            </Col>

            <Col
              md={6}
              style={{
                marginTop: "24px ",
                marginBottom: "24px ",
                alignContent: "center",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <EventDetails details="Profile Image" />
              <div>
                <Image
                  width={512}
                  height={512}
                  className={styles.profileImage}
                  alt="image"
                  src={vettingData.profile}
                />
              </div>
            </Col>
          </Row>
          <div className={styles.inputDiv}>
            <p className={styles.title}>Name</p>
            <input
              type="text"
              defaultValue={vettingData.name}
              className="modalInput"
              disabled
            />
          </div>
          <div className={styles.descriptionDiv}>
            <p className={styles.title}>Description</p>
            <input
              type="text"
              defaultValue={vettingData.description}
              className="modalInput"
              disabled
              style={{ height: "fit-content" }}
            />
          </div>
          <div className={styles.descriptionDiv}>
            <p className={styles.title}>
              What kind of events will you be creating?
            </p>
            <input
              type="text"
              defaultValue={vettingData.eventKind}
              className="modalInput"
              disabled
              style={{ height: "fit-content" }}
            />
          </div>
          {orgData.website && 
          <div className={styles.descriptionDiv}>
            <p className={styles.title}>Website</p>
            <input
              type="text"
              defaultValue={orgData.website}
              className="modalInput"
              disabled
              style={{ height: "fit-content" }}
            />
          </div>
          }
          {Object.entries(socialsData)?.map(([key, value], index) => (
            <>
              {value && (
                <div className={styles.descriptionDiv} key={index}>
                  <p className={styles.title}>{key}</p>
                  <input
                    type="text"
                    defaultValue={value}
                    className="modalInput"
                    disabled
                    style={{ height: "fit-content" }}
                  />
                </div>
              )}
            </>
          ))}
        </Container>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};

export default SeeApplication;
