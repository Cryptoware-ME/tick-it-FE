import React, { useEffect, useState } from "react";
import styles from "./TicketCard.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import TicketCounter from "../TicketCounter";
import EventDetails from "../EventDetails";
import TickitButton from "../tickitButton";
import Counter from "../Counter";
import EditTicket from "../EditTicketModal";

import { useCartContext } from "../../cart/cart-context";
import { toast } from "react-toastify";

const TicketCard = ({ ticket, ticketFromContract, isOwner ,handlePause,handleResume }) => {
  const [counter, setCounter] = useState(1);
  const [editTicket, setEditTicket] = useState(false);
  const { cartItems, setCartItems } = useCartContext();

  const handleAddToCart = () => {
    const foundItem = cartItems.filter((item) => item.ticketId == ticket.id);
    if (foundItem?.length) {
      let tmp = [...cartItems];
      const index = tmp.indexOf(foundItem[0]);
      tmp[index].quantity += counter;
      setCartItems([...tmp]);
    } else
      setCartItems([...cartItems, { ticketId: ticket.id, quantity: counter }]);
    setCounter(1);
    toast("Item Added To Cart");
  };

  return (
    <>
      {editTicket && <EditTicket setEditTicket={setEditTicket} />}
      <Col xl={12} style={{ padding: "10px" }}>
        <div className="cardWrapper">
          <div className={styles.cardContainer}>
            <div className={styles.imageDiv}>
              <Image
                width={512}
                height={512}
                className={styles.cardImage}
                alt="card-image"
                src={ticket.image}
              />
              <div className={styles.imageGradient} />
            </div>

            <div className={styles.cardDetails}>
              <div className={styles.cardHeader}>
                <h1 className="section-title">{ticket.name}</h1>

                {isOwner && (
                  <div>
                    {ticket.isSoldout ? (
                      <Image
                        width={26}
                        height={26}
                        style={{ marginRight: "24px", cursor: "pointer" }}
                        alt="resumesales"
                        src="/images/resumesales.png"
                        onClick={handleResume}
                      />
                    ) : (
                      <Image
                        width={26}
                        height={26}
                        style={{ marginRight: "24px", cursor: "pointer" }}
                        alt="pausesales"
                        src="/images/pausesales.png"
                        onClick={handlePause}
                      />
                    )}

                    {/* <Image
                      width={24}
                      height={24}
                      alt="edit"
                      src="/images/edit.png"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setEditTicket(true);
                      }}
                    /> */}
                  </div>
                )}
              </div>

              <TicketCounter
                sold={`${Number(ticketFromContract?.currentTokenId) - 1}`}
                total={ticket.supply}
              />
              <EventDetails details={ticket.description} />
              <div
                style={{
                  marginTop: "16px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <h1 className={styles.priceCurrency}>ETH </h1>
                <h1 style={{ marginLeft: "5px" }} className={styles.cardPrice}>
                  {ticket.price / 10 ** 18}
                </h1>
              </div>
              <Row>
                <Col className={styles.cardCounter}>
                  <h1 className={styles.cardQuantity}>Enter Quantity</h1>
                  <div style={{ marginLeft: "8px" }}>
                    <Counter
                      counter={counter}
                      setCounter={(value) => setCounter(counter + value)}
                    />
                  </div>
                </Col>
                <Col>
                  <TickitButton text="ADD TO CART" onClick={handleAddToCart} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
};

export default TicketCard;
