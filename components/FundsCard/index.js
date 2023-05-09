import styles from "./FundsCard.module.scss";
import Image from "next/image";
import React, { useState } from "react";
import DepositModal from "../DepositModal";
import WithDrawModal from "../WithDrawModal";
const FundsCard = ({ state = 1 }) => {
  const [depositmodal, setDepositModal] = useState(false);
  const [withDrawmodal, setWithDrawModal] = useState(false);
  return (
    <>
      {depositmodal && <DepositModal setDepositModal={setDepositModal} />}
      {withDrawmodal && <WithDrawModal setWithDrawModal={setWithDrawModal} />}

      <div className={styles.cardContainer}>
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
          <p className={styles.cardDetails}>0.15 ETH</p>
          <p className={styles.cardDetails}>$270</p>
          <p className={styles.cardDetails}>Tickets</p>
        </div>
        {state == 1 && (
          <div className={styles.cardButtons}>
            <div
              className={styles.buttonDiv}
              onClick={() => {
                setDepositModal(true);
              }}
            >
              <Image
                width={15}
                height={17}
                alt="icon"
                src="/images/deposit.svg"
              />
              <p className={styles.buttonText}>Deposit</p>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <div
                className={styles.buttonDiv}
                onClick={() => {
                  setWithDrawModal(true);
                }}
              >
                <Image
                  width={15}
                  height={17}
                  alt="icon"
                  src="/images/withdraw.svg"
                />
                <p className={styles.buttonText}>Withdraw</p>
              </div>
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
                src="/images/delete.svg"
              />
              <p className={styles.buttonText}>Unlink</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FundsCard;
