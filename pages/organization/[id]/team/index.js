import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  getOrganization,
  getOrganizationMember,
} from "../../../../axios/organization.axios";
import { getUsers } from "../../../../axios/user.axios";
import { getMemberRoles } from "../../../../axios/organization.axios";

import OrganizationProfile from "../../../../components/organization-profile";
import OrganizationSidebar from "../../../../components/OrganizationSidebar";
import TickitButton from "../../../../components/tickitButton";
import ComingSoonModal from "../../../../components/ComingSoonModal";
import AddStaffModal from "../../../../components/add-staff-modal";
import TransferOwnershipModal from "../../../../components/transfer-ownership-modal";

import styles from "../organization.module.scss";

const Team = () => {
  const [orgData, setOrgData] = useState();
  const [orgMembers, setOrgMembers] = useState([]);
  const [rolesData, setRolesData] = useState([]);
  const [membersData, setMembersData] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const [comingSoon, setComingSoon] = useState(false);
  const [addStaff, setAddStaff] = useState(false);
  const [transferOwnership, setTransferOwnership] = useState(false);

  const getMembersData = async () => {
    const membersData = [];

    await Promise.all(
      orgMembers.map(async (member) => {
        const { userId, memberRoleId } = member;
        const userDataPromise = await getUsers(
          JSON.stringify({
            where: { id: userId },
          })
        );
        const memberRolePromise = await getMemberRoles(
          JSON.stringify({
            where: { id: memberRoleId },
          })
        );
        const [userData, memberRoleData] = await Promise.all([
          userDataPromise,
          memberRolePromise,
        ]);
        membersData.push({
          userName: userData.data[0].username,
          userEmail: userData.data[0].email,
          roleName: memberRoleData.data[0].roleName,
        });
      })
    );
    setMembersData(membersData);
  };

  const getOrganizationDetails = async () => {
    await getOrganization(
      JSON.stringify({
        where: { id: id },
      })
    ).then((data) => {
      setOrgData(data.data[0]);
    });
    await getOrganizationMember(
      JSON.stringify({
        where: { organizationId: id },
      })
    ).then((data) => {
      setOrgMembers(data.data);
    });
  };

  useEffect(() => {
    if (orgMembers.length > 0) {
      getMembersData();
    }
  }, [orgMembers]);
  useEffect(() => {
    if (id) {
      getOrganizationDetails();
      getMemberRoles().then((data) => {
        setRolesData(data.data);
      });
    }
  }, [id]);

  return (
    <>
      {comingSoon && <ComingSoonModal />}
      {addStaff && (
        <AddStaffModal
          setAddStaff={setAddStaff}
          orgId={id}
          rolesData={rolesData}
        />
      )}
      {transferOwnership && (
        <TransferOwnershipModal
          setTransferOwnership={setTransferOwnership}
          orgId={id}
        />
      )}
      <Container fluid className={styles.organization}>
        <Row>
          <OrganizationProfile data={orgData} />
        </Row>
        <Row>
          <Col lg={3} style={{ padding: "0px" }}>
            <OrganizationSidebar data={orgData} selected="team" />
          </Col>

          <Col lg={9} style={{ padding: "10px" }}>
            <Container fluid>
              <div className={styles.title}>
                <p className="pageTitle">Team</p>
                <div
                  className={styles.addStaffDiv}
                  onClick={() => {
                    setAddStaff(true);
                  }}
                >
                  <Image
                    width={22}
                    height={22}
                    alt="search"
                    src="/images/addButton.svg"
                  />
                  <p className={styles.addTitle}>Add Staff</p>
                </div>
              </div>
              <Row>
                <div className="cardWrapper">
                  <div className={styles.tableContainer}>
                    <Table
                      striped
                      style={{
                        color: "white",
                        borderRadius: "20px",
                      }}
                    >
                      <thead>
                        <tr>
                          <th className={styles.tableHead}>Name</th>
                          <th className={styles.tableHead}>Email</th>
                          <th className={styles.tableHead}>Position</th>
                        </tr>
                      </thead>
                      {membersData.length > 0 ? (
                        <tbody>
                          {membersData.map((member, index) => (
                            <tr key={index}>
                              <td
                                className={styles.bodyText}
                                style={{ color: "red" }}
                              >
                                {member.userName}
                              </td>
                              <td className={styles.bodyText}>
                                {member.userEmail}
                              </td>
                              <td className={styles.bodyText}>
                                {member.roleName}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      ) : (
                        <tbody>
                          <tr>
                            <td className={styles.bodyText}>
                              you don't have any member in your team yet
                            </td>
                            <td className={styles.bodyText}></td>
                            <td className={styles.bodyText}></td>
                          </tr>
                        </tbody>
                      )}
                    </Table>
                  </div>
                </div>
              </Row>

              <Row
                style={{
                  padding: "30px 0px 0px 25px",
                }}
              >
                <TickitButton
                  text="TRANSFER OWNERSHIP"
                  padding="15px 20px"
                  fontSize="20px"
                  onClick={() => {
                    setTransferOwnership(true);
                  }}
                />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Team;
