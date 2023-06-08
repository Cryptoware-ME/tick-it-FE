import React, { useState } from "react";
import styles from "./CheckOutCard.module.scss";
import TickitButton from "../tickitButton";
import PayUsdModal from "../PayUsdModal";
import PayCrypto from "../PayCryptoModal";
import { useCartContext } from "../../cart/cart-context";

const CheckOutCard = ({ cartItemData }) => {
  // Use States
  const [usdmodal, setUsdModal] = useState(false);
  const [cryptomodal, setCryptoModal] = useState(false);

  // Hooks
  const { cartTotal, cartItems } = useCartContext();

  return (
    <>
      {usdmodal && (
        <PayUsdModal
          setUsdModal={setUsdModal}
          cartItemData={cartItemData}
          cartItemsCount={cartItems}
          total={(cartTotal / 10 ** 18).toFixed(4)}
        />
      )}

      {cryptomodal && (
        <PayCrypto
          setCryptoModal={setCryptoModal}
          cartItemData={cartItemData}
          cartItemsCount={cartItems}
          total={(cartTotal / 10 ** 18).toFixed(4)}
        />
      )}

      <div style={{ padding: "10px" }}>
        <div className="cardWrapper">
          <div className={styles.checkOutCard}>
            <p className={styles.title}>Check Out</p>
            <input
              type="text"
              // value={}
              placeholder="Enter Promo Code"
              onChange={(e) => {}}
              className="modalInput"
              style={{ maxWidth: "90%" }}
            />
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
                <p>{(cartTotal / 10 ** 18).toFixed(4)} ETH</p>
              </div>
            </div>
            <TickitButton
              onClick={() => {
                setCryptoModal(true);
              }}
              text="Pay with crypto"
              minWidth="90%"
            />

            <div style={{ margin: "12px 0px", width: "90%" }}>
              <TickitButton
                onClick={() => {
                  setUsdModal(true);
                }}
                text="Pay in USD"
                visa
                style2={true}
                minWidth="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOutCard;
