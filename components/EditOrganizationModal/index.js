import { Container, Modal } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import { updateOrganization } from "../../axios/organization.axios";

import TickitButton from "../tickitButton";

import styles from "./EditOrganizationModal.module.scss";

const EditOrganizationModal = ({ setEditOrganizationModal, data }) => {
  const [vettingData, setVettingData] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState(false);
  const [telegram, setTelegram] = useState();
  const [instagram, setInstagram] = useState();
  const [twitter, setTwitter] = useState();
  const [discord, setDiscord] = useState();
  const [website, setWebsite] = useState();
  const [socialsData, setSocialsData] = useState();

  const handleEdit = () => {
    setLoading(true);
    let tmpObj = vettingData;
    let tempSocials = socialsData;
    tmpObj.description = description;
    tempSocials.Telegram = telegram;
    tempSocials.Twitter = twitter;
    tempSocials.Discord = discord;
    tempSocials.Instagram = instagram;
    let newVettingObj = JSON.stringify(tmpObj);
    let newSocialsObj = JSON.stringify(tempSocials);
    updateOrganization(
      {
        name: name,
        vettingObj: newVettingObj,
        socials: newSocialsObj,
        website: website,
      },
      data.id
    ).then((data) => {
      setLoading(false);
      setEditOrganizationModal(false);
    });
  };

  useEffect(() => {
    setVettingData(JSON.parse(data.vettingObj));
    setSocialsData(JSON.parse(data.socials));
    setName(data?.name);
  }, [data]);
  useEffect(() => {
    setDescription(vettingData?.description);
  }, [vettingData]);
  useEffect(() => {
    setTelegram(socialsData?.Telegram);
    setInstagram(socialsData?.Instagram);
    setTwitter(socialsData?.Twitter);
    setDiscord(socialsData?.Discord);
    setWebsite(socialsData?.Website);
  }, [socialsData]);
  useEffect(() => {
    console.log("instagram: ", instagram);
  }, [instagram]);
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setEditOrganizationModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Container fluid>
        <div className={styles.reportTitle}>
          <p className="section-title">Edit Organization Profile</p>
        </div>
        <div style={{ marginTop: "24px" }}>
          <div style={{ width: "70%" }}>
            <input
              className="modalInput"
              placeholder="Organization Name"
              defaultValue={data.name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          {/* <div
            style={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <input type="checkbox" onclick="myFunction()" />
            <p
              style={{
                marginBottom: "0",
              }}
            >
              Used Tickets
            </p>
          </div> */}
          <textarea
            className="modalInput"
            placeholder="Description"
            defaultValue={vettingData?.description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            style={{
              minHeight: "100px",
              marginTop: "24px",
              marginBottom: "24px",
            }}
          />
        </div>

        <div className={styles.socialLink}>
          <p className={styles.socialTitle}>Social Links</p>
          <div className={styles.social} style={{ width: "70%" }}>
            <p className={styles.socialName}>Telegram</p>
            <input
              className="modalInput"
              defaultValue={socialsData?.Telegram}
              onChange={(e) => {
                setTelegram(e.target.value);
              }}
            />
            <p className={styles.socialName}>Instagram</p>
            <input
              className="modalInput"
              defaultValue={socialsData?.Instagram}
              onChange={(e) => {
                console.log("2121", e.target.value);
                setInstagram(e.target.value);
              }}
            />
            <p className={styles.socialName}>Twitter</p>
            <input
              className="modalInput"
              defaultValue={socialsData?.Twitter}
              onChange={(e) => {
                setTwitter(e.target.value);
              }}
            />
            <p className={styles.socialName}>Discord</p>
            <input
              className="modalInput"
              defaultValue={socialsData?.Discord}
              onChange={(e) => {
                setDiscord(e.target.value);
              }}
            />
            <p className={styles.socialName}>Website</p>
            <input
              className="modalInput"
              defaultValue={data.website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
            />
          </div>
        </div>

        <div
          style={{
            paddingBottom: "24px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TickitButton
            text="edit"
            isLoading={loading}
            disabled={loading || !name || !description}
            onClick={() => {
              handleEdit();
            }}
          />
        </div>
      </Container>
    </Modal>
  );
};
export default EditOrganizationModal;
