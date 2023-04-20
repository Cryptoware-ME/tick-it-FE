import { Container, Col, Row } from "react-bootstrap";
import styles from "./FundsCard.module.scss";
import DashboardBar from "../../components/DashboardBar";
import PageTitle from "../../components/pageTitle";
import Image from "next/image";
const FundsCard = ({inFunds= false}) => {
  return (
    <Container fluid className={styles.wrapper}>
      <Row>
        <Col lg={2} style={{ padding: "0px" }}>
          <DashboardBar />
        </Col>
        <Col lg={10} style={{ padding: "0px" }}>
          <Container fluid>
            <p className={styles.title}>Funds</p>

            <div className={styles.cardContainer}>
              <div className={styles.cardAdd}>
                <div className={styles.cardHeader}>
{  ! inFunds &&  (



                <Image
                  width={38}
                  height={30}
                  alt="icon"
                  src="/images/tick.png"
                />
)
}
              <div className={styles.cardTitle}>
              0xJo6g...007
              </div>
                </div>
              <div className={styles.cardInfo}>
               <p className={styles.amountETH}>0.15 ETH</p>
               <p className={styles.amount}>$270</p>
               <p className={styles.tickets}>Tickets</p>
              </div>
              {
                ! inFunds && (

                
              
              <div className={styles.cardButtons}>
                <div className={styles.depositButton} >

                <Image
                  width={15}
                  height={17}
                  alt="icon"
                  src="/images/deposit.png"
                />
                <p className={styles.depositName}>Deposit</p>
                </div>
                <div className={styles.withDrawButton} >

                <Image
                  width={15}
                  height={17}
                  alt="icon"
                  src="/images/vertical.png"
                />
                <p className={styles.depositName}>Withdraw</p>
                </div>


              </div>
              )}
              </div>
              
            </div>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};
export default FundsCard;
