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

  const handleEdit = () => {
    setLoading(true);
    let tmpObj = vettingData;
    tmpObj.description = description;
    let newVettingObj = JSON.stringify(tmpObj);
    updateOrganization(
      {
        name: name,
        vettingObj: newVettingObj,
      },
      data.id
    ).then((data) => {
      setLoading(false);
      setEditOrganizationModal(false);
    });
  };

  useEffect(() => {
    setVettingData(JSON.parse(data.vettingObj));
  }, [data]);

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
        {/* <div className={styles.socialLink}>
          <p className={styles.socialTitle}>Social Links</p>
          <div className={styles.social} style={{ width: "70%" }}>
            <p className={styles.socialName}>Telegram</p>
            <input className="modalInput" />
            <p className={styles.socialName}>Instagram</p>
            <input className="modalInput" />
            <p className={styles.socialName}>Twitter</p>
            <input className="modalInput" />
            <p className={styles.socialName}>Discord</p>
            <input className="modalInput" />
            <p className={styles.socialName}>Website</p>
            <input className="modalInput" />
          </div>
        </div> */}
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
