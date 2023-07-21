import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../../auth/useAuth";
import { getOrganization } from "../../../axios/organization.axios";
import { getTicketByAddress } from "../../../axios/ticket.axios";
import { getWalletsByUser } from "../../../axios/wallets.axios";
import { getEvents } from "../../../axios/event.axios";

import DashboardBar from "../../../components/DashboardBar";
import OrganizationCard from "../../../components/OrganizationCard";
import AddOrganizationCard from "../../../components/AddOrganizationCard";
import UpcomingEventsCard from "../../../components/UpcomingEventsCard";

import styles from "./Dashboard.module.scss";

const Dashboard = ({}) => {
  const [organizationData, setOrganizationData] = useState();
  const [tickets, setTickets] = useState([]);
  const [events, setEvents] = useState([]);
  const [sortedEvents, setSortedEvents] = useState([]);
  const [walletsList, setWalletsList] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  const getOrganizationDetails = async (id) => {
    let organization = await getOrganization(
      JSON.stringify({
        where: { ownerId: id },
      })
    );
    setOrganizationData(organization?.data);
  };

  useEffect(() => {
    if (user) {
      getOrganizationDetails(user?.id);
      getWallets();
    } else {
      router.push("/");
    }
  }, [user]);

  const getWallets = async () => {
    getWalletsByUser(
      JSON.stringify({
        where: { userId: user?.id },
      })
    ).then((data) => {
      setWalletsList(data.data);
    });
  };

  const getTickets = async (address) => {
    getTicketByAddress(address).then((data) => {
      setTickets([...tickets, ...data.data]);
    });
  };

  const getAllEvents = async () => {
    const contractIdsArray = [
      ...new Set(tickets.map((ticket) => ticket.token.contractId)),
    ];
    contractIdsArray.map((address) => getEventDetails(address));
  };
  const getEventDetails = async (address) => {
    await getEvents(
      JSON.stringify({
        relations: ["organization", "category"],
        where: { contractAddress: address },
      })
    ).then((data) => {
      setEvents([...events, ...data.data]);
    });
  };
  const compareEventDates = (a, b) => {
    const dateA = new Date(a.eventDate);
    const dateB = new Date(b.eventDate);
    return dateA - dateB;
  };

  useEffect(() => {
    if (events) {
      setSortedEvents(events.sort(compareEventDates));
    }
  }, [events]);

  useEffect(() => {
    if (walletsList && walletsList.length > 0) {
      walletsList.forEach((wallet) => {
        getTickets(wallet.address);
      });
    }
  }, [walletsList]);

  useEffect(() => {
    if (tickets) {
      getAllEvents();
    }
  }, [tickets]);

  return (
    <Container fluid className="dashboardWrapper">
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="dashboard" />
        </Col>

        <Col lg={10} style={{ paddingBottom: "48px" }}>
          <div className={styles.section}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <p className="section-title">Organizations</p>
                <Row className={styles.organizations}>
                  {organizationData?.map((organization, index) => (
                    <OrganizationCard key={index} data={organization} />
                  ))}
                  <Col lg={3} md={6} className={styles.addOrganizations}>
                    <AddOrganizationCard />
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className={styles.section} style={{ marginTop: "48px" }}>
            <div className="cardWrapper">
              <div className={styles.sectionContent}>
                <div className={styles.header}>
                  <p className="section-title">Upcoming Events</p>
                  {tickets && (
                    <Link href="/user/tickets" className={styles.viewAll}>
                      View All Tickets
                    </Link>
                  )}
                </div>
                {sortedEvents ? (
                  <Row>
                    {sortedEvents?.map((event, index) => (
                      <UpcomingEventsCard key={index} event={event} />
                    ))}
                  </Row>
                ) : (
                  <Row>
                    <Link href="/explore" className={styles.viewAll}>
                      Explore Upcoming Events To Buy Tickets
                    </Link>
                  </Row>
                )}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
