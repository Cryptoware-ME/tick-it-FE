import React, { useEffect, useState } from "react";
import { Modal, Container, Row, Col, Form } from "react-bootstrap";
import { Dropdown, FormControl, InputGroup } from "react-bootstrap";

import { useEvm } from "@cryptogate/react-providers";

import { use721 } from "../../hooks/use721";
import { getUsersSearch } from "../../axios/user.axios";
import { sendTicket } from "../../axios/ticket.axios";
import { getWalletsByUser } from "../../axios/wallets.axios";

import TickitButton from "../tickitButton";
import ConnectWallet from "../connect-wallet";

import styles from "./send-ticket-modal.module.scss";

const SendTicketModal = ({
  setSendTicket,
  data,
  tokenId,
  wallet,
  setRefetch,
}) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState();
  const [userId, setUserId] = useState();
  const [userWallet, setUserWallet] = useState();
  const [error, setError] = useState(false);
  const [usersData, setUserData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isEmailChecked, setEmailChecked] = useState(true);
  const [isAddressChecked, setAddressChecked] = useState(false);
  const [privateWallet, setPrivatewallet] = useState(false);
  const [address, setAddress] = useState("");
  const [eventAddress, setEventAddress] = useState("");

  const { account } = useEvm();
  const { transferTicket, transferState } = use721(eventAddress);

  const handleSend = async () => {
    if (privateWallet) {
      transferTicket(
        [wallet.address, isAddressChecked ? address : userWallet, tokenId],
        {
          gasPrice: Number(process.env.NEXT_PUBLIC_GAS_PRICE),
          gasLimit: Number(process.env.NEXT_PUBLIC_GAS_LIMIT),
        }
      );
    } else {
      setLoading(true);
      if (isAddressChecked) {
        sendTicket({
          eventId: data.eventId,
          address: address,
          tokenId: tokenId,
        }).then((data) => {
          setLoading(false);
          setSendTicket(false);
          setRefetch(Date.now());
        });
      }
      if (isEmailChecked) {
        sendTicket({
          eventId: data.eventId,
          userId: userId,
          tokenId: tokenId,
        }).then((data) => {
          setLoading(false);
          setSendTicket(false);
          setRefetch(Date.now());
        });
      }
    }
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

  const getUserWallet = async (id) => {
    getWalletsByUser(
      JSON.stringify({
        where: { userId: id, type: "custodial" },
      })
    ).then((data) => {
      setUserWallet(data.data[0].address);
    });
  };

  useEffect(() => {
    if (
      transferState.status == "PendingSignature" ||
      transferState.status == "Mining"
    ) {
      setLoading(true);
    }
    if (transferState.status == "Success") {
      setLoading(false);
      setSendTicket(false);
      setRefetch(Date.now());
    }
  }, [transferState]);

  useEffect(() => {
    if (search.length > 2) userSearch(search);
    else setShowDropdown(false);
  }, [search]);
  useEffect(() => {
    if (wallet.type == "private") setPrivatewallet(true);
  }, [wallet]);
  useEffect(() => {
    if (data) {
      setEventAddress(data?.event?.contractAddress);
    }
  }, [data]);

  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setSendTicket(false);
        }}
        className={styles.closeButton}
        closeButton
      >
        <div className={styles.titleDiv}>
          <p className={styles.title}>Send Ticket</p>
        </div>
      </Modal.Header>

      <Modal.Body>
        <Container>
          <Row className={styles.ticketData}>
            <p className={styles.eventName}>{data?.event.name}</p>
            <p className={styles.ticketName}>{data?.name}</p>
          </Row>
          <Row className={styles.box}>
            <div style={{ width: "80%", display: "flex" }}>
              <Col>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    className={styles.roundCheckbox}
                    type="checkbox"
                    checked={isEmailChecked}
                    defaultChecked
                    onClick={() => {
                      setEmailChecked(true);
                      setAddressChecked(false);
                      setError(false);
                    }}
                  />
                  <p className={styles.checkboxText}>use email</p>
                </div>
              </Col>
              <Col>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <input
                    className={styles.roundCheckbox}
                    type="checkbox"
                    checked={isAddressChecked}
                    onClick={() => {
                      setAddressChecked(true);
                      setEmailChecked(false);
                      setError(false);
                    }}
                  />
                  <p className={styles.checkboxText}>use wallet address</p>
                </div>
              </Col>
            </div>
          </Row>
          {isEmailChecked && (
            <Row style={{ marginTop: "24px" }}>
              <Dropdown
                show={showDropdown}
                onBlur={() => {
                  if (!selectedUser) {
                    setError(true);
                  } else {
                    setError(false);
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
                        getUserWallet(user.id);
                      }}
                    >
                      {user.email}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <div style={{ height: "20px" }}>
                {error ? (
                  <div className={styles.errors}>
                    <p className={styles.error}>Email is required</p>
                  </div>
                ) : null}
              </div>
            </Row>
          )}
          {isAddressChecked && (
            <Row style={{ marginTop: "24px" }}>
              <input
                id="name"
                placeholder="Enter wallet address"
                type="text"
                onBlur={() => {
                  if (!address) {
                    setError(true);
                  } else {
                    setError(false);
                  }
                }}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="modalInput"
                style={{ color: "#656565" }}
              />

              <div style={{ height: "20px" }}>
                {error ? (
                  <div className={styles.errors}>
                    <p className={styles.error}>Address is required</p>
                  </div>
                ) : null}
              </div>
            </Row>
          )}

          <div className={styles.buttonAdd}>
            {privateWallet ? (
              !account ? (
                <ConnectWallet
                  active={<TickitButton text="connect wallet" style2 />}
                />
              ) : account.toLocaleLowerCase() !=
                wallet.address.toLocaleLowerCase() ? (
                <p>please connect to same wallet your are transfaring from</p>
              ) : (
                <TickitButton
                  isLoading={loading}
                  disabled={
                    loading ||
                    (isEmailChecked && search.length < 3) ||
                    (isEmailChecked && selectedUser.length == 0) ||
                    (isAddressChecked && address.length == 0)
                  }
                  text="send"
                  onClick={() => {
                    handleSend();
                  }}
                />
              )
            ) : (
              <TickitButton
                isLoading={loading}
                disabled={
                  loading ||
                  (isEmailChecked && search.length < 3) ||
                  (isEmailChecked && selectedUser.length == 0) ||
                  (isAddressChecked && address.length == 0)
                }
                text="send"
                onClick={() => {
                  handleSend();
                }}
              />
            )}
          </div>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default SendTicketModal;
