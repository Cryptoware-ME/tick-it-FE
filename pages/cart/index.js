import React from "react";
import styles from "./Cart.module.scss";
import { Container, Col, Row } from "react-bootstrap";
import CartTicket from "../../components/CartTicket";
import CheckOutCard from "../../components/CheckOutCard";
import { useCartContext } from "../../cart/cart-context";
import { getEventTicketType } from "../../axios/eventTicketType.axios";

const Cart = () => {
  const { cartItems, setCartTotal } = useCartContext();
  const [cartItemsData, setCartItemsData] = React.useState([]);

  const getTickets = React.useCallback(async () => {
    getEventTicketType(
      JSON.stringify({
        where: cartItems.map((item) => ({
          id: item.ticketId,
        })),
        relations: ["event"],
      })
    ).then((data) => {
      setCartItemsData(data.data);
    });
  }, [cartItems]);

  React.useEffect(() => {
    if (cartItems && cartItems.length) getTickets();
  }, [cartItems]);

  React.useEffect(() => {
    if (cartItemsData && cartItemsData.length) {
      const total = cartItems.reduce((accumulator, currentValue) => {
        const data = cartItemsData.filter(
          (_item) => _item.id == currentValue.ticketId
        )[0];
        return accumulator + data.price * currentValue.quantity;
      }, 0);
      setCartTotal(total);
    }
  }, [cartItemsData]);

  return (
    <div className={styles.profileWrapper}>
      <Container style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <Row>
          <Col lg={8}>
            {cartItems?.map((item, index) => (
              <CartTicket
                inCart
                key={index}
                item={item}
                itemData={
                  cartItemsData.filter((_item) => _item.id == item.ticketId)[0]
                }
              />
            ))}
          </Col>
          <Col lg={4}>

            <CheckOutCard cartItemData={cartItemsData}/>

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
