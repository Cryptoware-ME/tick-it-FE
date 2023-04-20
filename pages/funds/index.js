import { Container, Col, Row } from "react-bootstrap";
import styles from "./Funds.module.scss";
import DashboardBar from "../../components/DashboardBar";
import PageTitle from "../../components/pageTitle";
import FundsCard from "../../components/FundsCard";
const Funds = () => {
  return (
    <Container fluid className={styles.wrapper}>
      <FundsCard />
    </Container>
  );
};
export default Funds;
