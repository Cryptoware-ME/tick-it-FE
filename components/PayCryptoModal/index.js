import React, { useEffect, useState } from "react";
import styles from "./PayCrypto.module.scss";
import { Modal, Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Dropdown from "react-bootstrap/Dropdown";
import TickitButton from "../tickitButton";
import { ConnectWalletComponent } from "@cryptogate/react-ui";
import { useEthereum } from "@cryptogate/react-providers";
import { writeContractCall } from "@cryptogate/react-providers";
import NFTix721 from "../../abis/NFTix721.json";
import { postCustodialMint } from "../../axios/ticket.axios";
import { getEventTicketType } from "../../axios/eventTicketType.axios";
const PayCrypto = ({
  cartItemData,
  setCryptoModal,
  cartItemsCount,
  cartTotal,
}) => {
  const { account, errors } = useEthereum();
  const [state, setState] = useState(1);
  const [payWithCustodial, setPayWithCustodial] = useState(false);
  const [eventId, setEventId] = useState();
  const [eventTickets, setEventTickets] = useState();

  const mint = writeContractCall({
    address: cartItemData[0]?.event.contractAddress,
    abi: NFTix721.abi,
    // contract: "NFTix721",
    method: "mint",
  });

  const custodialWallet = () => {
    postCustodialMint({
      eventId: cartItemData[0].eventId,
      ticketTypeCounts: [1],
      proof: "",
    });
  };

  

  const getTickets = async () => {
    getEventTicketType(
      JSON.stringify({
        where: { eventId: eventId },
      })
    ).then((data) => {
      setEventTickets(data.data);
    });
  };

  useEffect(() => {
    if (eventId) {
      getTickets();
    }
  }, [eventId]);
  useEffect(() => {
    if (eventTickets) {
    }
  }, [eventTickets]);
  useEffect(() => {
    if (cartItemData) {
      setEventId(cartItemData[0].eventId);
    }
  }, [cartItemData]);

  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setCryptoModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <div className={styles.payTitle}>
        <p className="section-title">Pay in Crypto</p>
      </div>
      <Modal.Body>
        <Container fluid>
          <div
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className={styles.checkOutDetailsDiv}>
              {/* <div className={styles.checkOutDetails}>
                <p>Discount</p>
                <p>-10%</p>
              </div>
              <div className={styles.checkOutDetails}>
                <p>Tax</p>
                <p>+2%</p>
              </div> */}
              <div className={styles.checkOutDetailsTotal}>
                <p>Total</p>

                <p>{cartTotal}</p>
              </div>
            </div>
            {state == 1 && (
              <Row className={styles.box}>
                <div style={{ width: "80%", display: "flex" }}>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        className={styles.roundCheckbox}
                        type="checkbox"
                        onClick={() => {
                          setPayWithCustodial(!payWithCustodial);
                        }}
                      />
                      <p className={styles.checkboxText}>Tick-It wallet</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        className={styles.roundCheckbox}
                        type="checkbox"
                        onClick={() => {
                          setState(2);
                        }}
                      />
                      <p className={styles.checkboxText}>Connect wallet</p>
                    </div>
                  </Col>
                </div>
              </Row>
            )}
            {state == 3 && (
              <Row className={styles.box}>
                <div style={{ width: "80%", display: "flex" }}>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        className={styles.roundCheckbox}
                        type="checkbox"
                        onclick="myFunction()"
                      />
                      <p className={styles.checkboxText}>Tick-It wallet</p>
                    </div>
                  </Col>
                  <Col>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <input
                        className={styles.roundCheckbox}
                        type="checkbox"
                        onclick="myFunction()"
                      />
                      <p className={styles.checkboxText}>Connect wallet</p>
                    </div>
                  </Col>
                </div>
                <div
                  style={{
                    marginTop: "16px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      marginBottom: "8px",
                    }}
                  >
                    <p className={styles.walletConnected}>Wallet connected: </p>
                    <Image
                      width={15}
                      height={17}
                      alt="icon"
                      src="/images/icon6.svg"
                      style={{
                        marginLeft: "8px",
                      }}
                    />
                  </div>

                  <p className={styles.wallet}>
                    0x6802707eE12CE3d91CA4294740dcFa1CAf931B4f
                  </p>
                </div>
              </Row>
            )}
            {state == 2 && (
              <div
                style={{
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <ConnectWalletComponent
                  ActiveComponent={
                    <TickitButton style2 text="Connect wallet" />
                  }
                  // ConnectedComponent={<></>}
                />
              </div>
            )}

            <div className={styles.checkOutDetailsDiv}>
              <div className={styles.checkOutDetails}>
                <p className={styles.paymentTitle}>Choose paymnet method</p>
              </div>
              <div>
                <input className="modalInput" value={"ETH"} />
                {/* <Dropdown>
                  <Dropdown.Toggle
                    className="modalInput"
                    style={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    variant="success"
                    id="dropdown-basic"
                  >
                    USDC
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.drop}>
                    <Dropdown.Item className={styles.drop} href="#/action-1">
                      USDT
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
              <p className={styles.walletBallance}>Wallet ballance: 0 ETH</p>
              <div>
                {state == 1 && (
                  <p className={styles.info}>
                    *Not enough funds in wallet. Please send {cartTotal} eth to
                    0x6802707eE12CE3d91CA4294740dcFa1CAf931B4f on Polygon
                    network
                  </p>
                )}
              </div>
            </div>

            <TickitButton
              minWidth="100%"
              style1
              text="Pay"
              disabled={!payWithCustodial && !account}
              onClick={() => {

                payWithCustodial
                  ? custodialWallet()
                  : mint.send([account, [1]], {
                      value: cartItemData[0].price,
                      gasPrice: "80000000000",
                      gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
                    });
              }}
            />
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default PayCrypto;
