import styles from "./FundsCard.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import DepositButton from "../DepositButton";
import WithDrawButton from "../WithDrawButton";
const FundsCard = ({ state = 1 }) => {
  const [depositmodal, setDepositModal] = useState(false);
  const [withDrawmodal, setWithDrawModal] = useState(false);
  return (
    <>
    { depositmodal && <DepositButton setDepositModal={setDepositModal} />}
    { withDrawmodal && <WithDrawButton setWithDrawModal={setWithDrawModal} />}
   
    <div className={styles.cardContainer}>
      <div className={styles.cardAdd}>
        <div className={styles.cardHeader}>
          {state == 1 && (
            <Image
              width={38}
              height={30}
              alt="icon"
              src="/images/tick.png"
              className={styles.tickImage}
            />
          )}
          <div className={styles.cardTitle}>0xJo6g...007</div>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.amountETH}>0.15 ETH</p>
          <p className={styles.amount}>$270</p>
          <p className={styles.tickets}>Tickets</p>
        </div>
        {state == 1 && (
          <div className={styles.cardButtons}>
            <div className={styles.depositButton}>
              <Image
                width={15}
                height={17}
                alt="icon"
                src="/images/deposit.png"
                onClick={() => {
                  setDepositModal(true);
                }} 
              />
              <p className={styles.depositName}>Deposit</p>
            </div>
            <div className={styles.withDrawButton}>
              <Image
                width={15}
                height={17}
                alt="icon"
                src="/images/vertical.png"
                onClick={() => {
                  setWithDrawModal(true);
                }} 
              />
              <p className={styles.depositName}>Withdraw</p>
            </div>
          </div>
        )}
        {state == 2 && (
          <div className={styles.unLink}>
            <div className={styles.unLinkBtn}>
              <Image
                width={13}
                height={17}
                alt="icon"
                src="/images/delete2.png"
              />
              <p className={styles.depositName}>Unlink</p>
            </div>
          </div>
        )}
      </div>
    </div>
                </>
  );
};
export default FundsCard;
