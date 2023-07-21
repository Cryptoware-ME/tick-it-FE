import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useRouter } from "next/router";
import Image from "next/image";

import { getOrganization } from "../../../../axios/organization.axios";

import OrganizationProfile from "../../../../components/organization-profile";
import OrganizationSidebar from "../../../../components/OrganizationSidebar";
import UpcomingEventsCard from "../../../../components/UpcomingEventsCard";
import ComingSoonModal from "../../../../components/ComingSoonModal";

import styles from "../organization.module.scss";

const AllEvents = () => {
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
            <OrganizationSidebar data={orgData} selected="events" />
          </Col>

          <Col lg={9} style={{ padding: "10px" }}>
            <Container fluid>
              <div className={styles.title}>
                <p className="pageTitle">All Events</p>
                {/* <div className={styles.userName}>
                  <p className={styles.userTitle}>Factory People</p>
                  <Image
                    width={13}
                    height={8}
                    alt="search"
                    src="/images/downArrow.png"
                    className={styles.arrowDown}
                  />
                </div> */}
              </div>
              <Row>
                <div className="cardWrapper">
                  <div className={styles.cardContainer}>
                    <p className={styles.sectionTitle}>Upcoming Events</p>
                    <Row>
                      {[0, 1, 2, 3]?.map((event, index) => (
                        <UpcomingEventsCard key={index} columns={4} />
                      ))}
                    </Row>
                  </div>
                </div>
              </Row>
              <Row style={{ marginTop: "24px" }}>
                <div className="cardWrapper">
                  <div className={styles.cardContainer}>
                    <p className={styles.sectionTitle}>Ended</p>
                    <Row>
                      {[0, 1, 2, 3]?.map((event, index) => (
                        <UpcomingEventsCard key={index} columns={4} />
                      ))}
                    </Row>
                  </div>
                </div>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AllEvents;
