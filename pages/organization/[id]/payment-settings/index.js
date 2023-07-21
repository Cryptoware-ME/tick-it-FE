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

const PaymentSettings = () => {
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
            <OrganizationSidebar data={orgData} selected="settings" />
          </Col>

          <Col lg={9} style={{ padding: "10px" }}>
            <Container fluid>
              <div className={styles.title}>
                <p className="pageTitle">Payment Settings</p>
              </div>
              <Row>
                <div className="cardWrapper">
                  <div className={styles.cardContainer}>
                    <p className={styles.paymentFunds}>
                      Funds Available: $ 52,968.78
                    </p>
                    <Row>
                      <Col>
                        <TickitButton
                          text="WITHDRAW IN CRYPTO"
                          minWidth="100%"
                          fontSize="20px"
                          padding="15px 10px"
                        />
                      </Col>
                      <Col>
                        <TickitButton
                          text="WITHDRAW IN FIAT"
                          minWidth="100%"
                          fontSize="20px"
                          padding="15px 10px"
                          style2
                        />
                      </Col>
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
export default PaymentSettings;
