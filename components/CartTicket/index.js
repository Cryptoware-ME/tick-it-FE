import React from "react";
import styles from "./CartTicket.module.scss";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import EventDetails from "../EventDetails";
import Counter from "../Counter";
import EventDate from "../EventDate";
import TickitButton from "../tickitButton";
import { getEventTicketType } from "../../axios/eventTicketType.axios";
import { useCartContext } from "../../cart/cart-context";
import { useRouter } from "next/router";
import Link from "next/link";

const CartTicket = ({ inCart = false, item, itemData }) => {
  const router = useRouter();
  const { cartItems, setCartItems, cartTotal, setCartTotal } = useCartContext();

  const setCounter = (value) => {
    let tmp = [...cartItems];
    const index = tmp.indexOf(item);
    tmp[index].quantity += value;
    setCartItems([...tmp]);
  };

  const handleDeleteItem = () => {
    let tmp = cartItems.filter((item) => item.ticketId != itemData.id);
    setCartItems(tmp);
  };

  return (
    <>
      {itemData ? (
        <Col xl={12} style={{ padding: "10px" }}>
          <div className="cardWrapper">
            <div className={styles.cardContainer}>
              <div className={styles.imageDiv}>
                <Image
                  width={320}
                  height={320}
                  className={styles.cardImage}
                  alt={itemData.name}
                  src={itemData.image}
                />
                <div className={styles.imageGradient} />
              </div>
              <div className={styles.cardDetails}>
                <div className={styles.cardHeader}>
                  <h1 className="section-title">{itemData.name}</h1>
                  {inCart && (
                    <div className={styles.cardRightLinks}>
                      <Image
                        onClick={handleDeleteItem}
                        width={14}
                        height={18}
                        style={{ marginLeft: "20px", cursor: "pointer" }}
                        alt="delete"
                        src="/images/pinkDelete.svg"
                      />
                    </div>
                  )}
                </div>
                <Link
                  href={`/event/${itemData.event?.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <p className={styles.eventName}>{itemData.event?.name}</p>
                </Link>
                <div style={{ marginBottom: "24px" }}>
                  <EventDate data={itemData.event?.eventDate} />
                </div>

                <EventDetails details={itemData.description} />
                {inCart && (
                  <Row className={styles.cardCounter}>
                    <h1 className={styles.cardQuantity}>Enter Quantity</h1>
                    <div style={{ width: "fit-content" }}>
                      <Counter
                        counter={item.quantity}
                        setCounter={setCounter}
                      />
                    </div>
                    <h1 className={styles.cardPrice}>
                      {Number(itemData.price / 10 ** 18) * item.quantity} ETH
                    </h1>
                  </Row>
                )}
                {!inCart && (
                  <Row className={styles.cardCounter}>
                    <TickitButton style2 text="SEND TICKET" />
                    <div style={{ marginLeft: "12px", width: "fit-content" }}>
                      <TickitButton text="ENTER EVENT" />
                    </div>
                  </Row>
                )}
              </div>
            </div>
          </div>
        </Col>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartTicket;
