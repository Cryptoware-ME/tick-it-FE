import Image from "next/image";
import React, { useState } from "react";

import DepositModal from "../DepositModal";
import WithDrawModal from "../WithDrawModal";
import Shortner from "../../utils/addressShortner";
import { useAccount } from "@cryptogate/react-providers";
import { unlinkWallet } from "../../axios/wallets.axios";

import styles from "./FundsCard.module.scss";

const FundsCard = ({ data, refetch }) => {
  const [depositmodal, setDepositModal] = useState(false);
  const [withDrawmodal, setWithDrawModal] = useState(false);

  const { ethBalance } = useAccount(data?.address.toString());
  return (
    <>
      {depositmodal && <DepositModal setDepositModal={setDepositModal} />}
      {withDrawmodal && <WithDrawModal setWithDrawModal={setWithDrawModal} />}

      <div className={styles.cardContainer}>
        <div className={styles.cardHeader}>
          {data.type == "custodial" && (
            <Image
              width={38}
              height={30}
              alt="icon"
              src="/images/tick.png"
              className={styles.tickImage}
            />
          )}
          <div className={styles.cardTitle}>{Shortner(data?.address)}</div>
        </div>
        <div className={styles.cardInfo}>
          <p className={styles.cardDetails}>
            {parseFloat(ethBalance).toFixed(5)} ETH
          </p>
          <p className={styles.cardDetails}>$270</p>
          {/* <p className={styles.cardDetails}>Tickets</p> */}
        </div>
        {data.type == "custodial" && (
          <div className={styles.cardButtons}>
            <div
              className={styles.buttonDiv}
              onClick={() => {
                setModal(true);
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
        {data.type != "custodial" && (
          <div className={styles.unLink}>
            <div
              className={styles.unLinkBtn}
              onClick={async () => {
                await unlinkWallet(data.id);

                console.log("sddddddddddddddddddddddddddd");
                refetch();
              }}
            >
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
