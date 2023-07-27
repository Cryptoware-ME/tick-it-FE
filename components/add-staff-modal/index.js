import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import Image from "next/image";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";

import { postOrganizationMember } from "../../axios/organization.axios";
import { getUsersSearch } from "../../axios/user.axios";
import { useAuth } from "../../auth/useAuth";

import TickitButton from "../tickitButton";

import styles from "./add-staff-modal.module.scss";

const AddStaffModal = ({ setAddStaff, orgId, rolesData }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedRole, setSelectedValue] = useState();
  const [selectedUser, setSelectedUser] = useState();
  const [roleId, setRoleId] = useState([]);
  const [userId, setUserId] = useState([]);
  const [roleError, setRoleError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [usersData, setUserData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const { user } = useAuth();

  const postMember = async () => {
    setLoading(true);

    postOrganizationMember({
      memberRoleId: roleId,
      userId: userId,
      organizationId: orgId,
    }).then((data) => {
      setAddStaff(false);
    });
  };

  const handleDropdownSelect = (eventKey) => {
    setSelectedValue(eventKey);
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
          setAddStaff(false);
        }}
        className={styles.closeButton}
        closeButton
      />

      <Modal.Body>
        <Container>
          <p className={styles.title}>Add Staff</p>

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
          <Row>
            <div className={styles.dropdown}>
              <Dropdown
                onBlur={() => {
                  if (!selectedRole) {
                    setRoleError(true);
                  } else {
                    setRoleError(false);
                  }
                }}
                onSelect={handleDropdownSelect}
              >
                <Dropdown.Toggle
                  className="modalInput"
                  style={{
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                  variant="success"
                  id="dropdown-basic"
                >
                  {selectedRole ? selectedRole : "Select Role"}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    width: "100%",
                  }}
                >
                  {rolesData.map((role, index) => (
                    <Dropdown.Item
                      eventKey={role.roleName}
                      key={index}
                      onClick={() => {
                        setRoleId(role.id);
                      }}
                    >
                      {role.roleName}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ height: "20px" }}>
              {roleError ? (
                <div className={styles.errors}>
                  <p className={styles.error}> Role is required field</p>
                </div>
              ) : null}
            </div>
          </Row>

          <div className={styles.buttonAdd}>
            <TickitButton
              isLoading={loading}
              disabled={
                loading ||
                !selectedRole ||
                search.length < 3 ||
                selectedUser.length == 0
              }
              text="ADD Staff"
              onClick={() => {
                postMember();
              }}
            />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default AddStaffModal;
