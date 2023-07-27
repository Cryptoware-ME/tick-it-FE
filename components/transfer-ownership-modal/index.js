import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";

import { getUsersSearch } from "../../axios/user.axios";

import TickitButton from "../tickitButton";

import styles from "./transfer-ownership-modal.module.scss";

const TransferOwnershipModal = ({ setTransferOwnership, orgId }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [userId, setUserId] = useState();
  const [userError, setUserError] = useState(false);
  const [usersData, setUserData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleTransfer = async () => {
    setLoading(true);
  };

  const userSearch = async (email) => {
    try {
      getUsersSearch(email).then((data) => {
        if (data.data.length > 0) {
          setUserData(data?.data);
          setShowDropdown(true);
        } else {
          setUserData([]);
          setShowDropdown(false);
        }
      });
    } catch {
      setUserData([]);
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    if (search.length > 2) userSearch(search);
    else setShowDropdown(false);
  }, [search]);

  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setTransferOwnership(false);
        }}
        className={styles.closeButton}
        closeButton
      />

      <Modal.Body>
        <Container>
          <p className={styles.title}>Transfer ownership</p>

          <Row>
            <Dropdown
              show={showDropdown}
              onBlur={() => {
                if (!selectedUser) {
                  setUserError(true);
                } else {
                  setUserError(false);
                }
              }}
            >
              <InputGroup>
                <FormControl
                  type="text"
                  value={selectedUser?.email}
                  onChange={(e) => {
                    setSelectedUser([]);
                    setSearch(e.target.value);
                  }}
                  placeholder="Search for user email"
                />
              </InputGroup>

              <Dropdown.Menu style={{ width: "95%" }}>
                {usersData.map((user, index) => (
                  <Dropdown.Item
                    eventKey={user.email}
                    key={index}
                    onClick={() => {
                      setSelectedUser(user);
                      setShowDropdown(false);
                      setUserId(user.id);
                    }}
                  >
                    {user.email}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <div style={{ height: "20px" }}>
              {userError ? (
                <div className={styles.errors}>
                  <p className={styles.error}>Email is required</p>
                </div>
              ) : null}
            </div>
          </Row>

          <div className={styles.buttonAdd}>
            <TickitButton
              isLoading={loading}
              disabled={
                loading || search.length < 3 || selectedUser.length == 0
              }
              text="Transfer"
              onClick={() => {
                handleTransfer();
              }}
            />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default TransferOwnershipModal;
