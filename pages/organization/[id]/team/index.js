import React, { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

import { getOrganization } from "../../../../axios/organization.axios";

import OrganizationProfile from "../../../../components/organization-profile";
import OrganizationSidebar from "../../../../components/OrganizationSidebar";
import TickitButton from "../../../../components/tickitButton";
import ComingSoonModal from "../../../../components/ComingSoonModal";

import styles from "../organization.module.scss";

const Team = () => {
  const [orgData, setOrgData] = useState();
  const router = useRouter();
  const { id } = router.query;
  const [comingSoon, setComingSoon] = useState(false);

  const getOrganizationDetails = async () => {
    await getOrganization(
      JSON.stringify({
        // relations: [],
        where: { id: id },
      })
    ).then((data) => {
      setOrgData(data.data[0]);
    });
  };

  useEffect(() => {
    if (id) {
      getOrganizationDetails();
    }
  }, [id]);

  return (
    <>
      {comingSoon && <ComingSoonModal></ComingSoonModal>}

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
                <div className={styles.addStaffDiv}>
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
                        backgroundColor: "#0c0c0c",
                        color: "white",
                        borderRadius: "20px",
                        height: "100%",
                      }}
                    >
                      <thead>
                        <tr>
                          <th className={styles.tableHead}> Name</th>
                          <th className={styles.tableHead}>Email</th>
                          <th className={styles.tableHead}>Position</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td className={styles.bodyText}>Edward</td>
                          <td className={styles.bodyText}>
                            edward.king@gmail.com
                          </td>
                          <td className={styles.bodyText}>Super Admin</td>
                        </tr>
                        <tr>
                          <td className={styles.bodyText}>Edward</td>
                          <td className={styles.bodyText}>
                            edward.king@gmail.com
                          </td>
                          <td className={styles.bodyText}>Admin</td>
                        </tr>
                      </tbody>
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
