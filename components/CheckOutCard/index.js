import React, { useState } from "react";
import styles from "./CheckOutCard.module.scss";
import YellowButton from "../YellowButton";
import PayUsdModal from "../PayUsdModal";
import PayCrypto from "../PayCryptoModal";

const CheckOutCard = () => {

  const [usdmodal, setUsdModal] = useState(false);
  const [cryptomodal, setCryptoModal] = useState(false);

  return (

    <>
    { usdmodal &&  <PayUsdModal  setUsdModal={setUsdModal} />  }
   { cryptomodal && <PayCrypto    setCryptoModal={setCryptoModal}/>  } 
   
    <div style={{ padding: "10px" }}>
      <div className={styles.checkOutCard}>
        <p className={styles.title}>Check Out</p>
        <input
          type="text"
          // value={}
          placeholder="Enter Promo Code"
          onChange={(e) => {}}
          className={styles.input}
        />
        <div className={styles.checkOutDetailsDiv}>
          <div className={styles.checkOutDetails}>
            <p>Discount</p>
            <p>-10%</p>
          </div>
          <div className={styles.checkOutDetails}>
            <p>Tax</p>
            <p>+2%</p>
          </div>
          <div className={styles.checkOutDetails}>
            <p>Total</p>
            <p>82$</p>
          </div>
        </div>
        <YellowButton
          onClick={() => {
            setCryptoModal(true);
          }}
          text="Pay with crypto"
          minWidth="90%"
          />

        <div style={{ margin: "12px 0px", width: "90%" }}>
          <YellowButton  onClick={() => {
            setUsdModal(true);
          }} text="Pay in USD" visa style2={true} minWidth="100%" />
        </div>
      </div>
    </div>
            </>
  );
};

export default CheckOutCard;
