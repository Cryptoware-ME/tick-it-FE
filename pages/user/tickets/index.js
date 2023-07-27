import React, { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useAuth } from "../../../auth/useAuth";
import DashboardBar from "../../../components/DashboardBar";
import CartTicket from "../../../components/CartTicket";
import Loader from "../../../components/loader/loader";
import styles from "./Tickets.module.scss";
import { getTicketByAddress } from "../../../axios/ticket.axios";
import { getWalletsByUser } from "../../../axios/wallets.axios";

const Tickets = () => {
  const [walletsList, setWalletsList] = useState([]);
  const router = useRouter();
  const { user } = useAuth();
  const [tickets, setTickets] = useState({});
  const [refetch, setRefetch] = useState(Date.now());

  const getWallets = async () => {
    getWalletsByUser(
      JSON.stringify({
        where: { userId: user?.id },
      })
    ).then((data) => {
      setWalletsList(data.data);
    });
  };
  useEffect(() => {
    if (user) {
      getWallets();
    } else {
      router.push("/");
    }
  }, [user]);

  const getTickets = async (address) => {
    getTicketByAddress(address).then((data) => {
      setTickets({ ...tickets, [address]: data.data });
    });
  };

  useEffect(() => {
    if (walletsList && walletsList.length > 0) {
      walletsList.forEach((wallet) => {
        getTickets(wallet.address);
      });
    }
  }, [walletsList, refetch]);

  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar selected="tickets" />
        </Col>
        <Col lg={10} style={{ paddingBottom: "48px" }}>
          <div className={styles.section}>
            <p style={{ marginBottom: "40px" }} className="section-title">
              My Tickets
            </p>
            {walletsList && walletsList.length > 0 ? (
              <div>
                {walletsList?.map((wallet, index) => (
                  <div key={index}>
                    <p
                      style={{
                        color: "white",
                        textDecoration: "underline",
                        textDecorationColor: "var(--primary)",
                      }}
                    >
                      Wallet Address: {wallet.address}
                    </p>

                    {tickets[wallet.address]?.length > 0 ? (
                      tickets[wallet.address].map((ticket, index) => (
                        <CartTicket
                          key={index}
                          itemData={ticket}
                          query
                          wallet={wallet}
                          setRefetch={setRefetch}
                        />
                      ))
                    ) : (
                      <p style={{ color: "white" }}>
                        No Tickets Minted By This Wallet
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <Loader />
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Tickets;
