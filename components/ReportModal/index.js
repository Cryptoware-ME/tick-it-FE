import { Container, Col, Row, Modal } from "react-bootstrap";
import styles from "./ReportModal.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import TickitButton from "../tickitButton";

const ReportModal = ({ setReportModal }) => {
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setReportModal(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Container fluid>
        <div className={styles.reportTitle}>
          <p className="section-title">Report</p>
        </div>
        <div className={styles.container}>
          <p className={styles.title}>Reason for report</p>

          <div className={styles.dropdown}>
            <Dropdown>
              <Dropdown.Toggle
                className="modalInput"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                variant="success"
                id="dropdown-basic"
              >
                Scam
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.drop}>
                <Dropdown.Item className={styles.drop} href="#/action-1">
                  fake
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.reason}>
            <p className={styles.title}>Aditional reasons (optional)</p>
            <textarea className="modalInput" style={{ minHeight: "150px" }} />
          </div>
          <div
            style={{
              marginTop: "24px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TickitButton text="send repport" />
          </div>
        </div>
      </Container>
    </Modal>
  );
};
export default ReportModal;
