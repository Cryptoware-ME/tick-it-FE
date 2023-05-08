import { Container, Col, Row, Modal } from "react-bootstrap";
import styles from "./ReportModal.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import WithDrawButton from "../WithDrawButton";
const ReportModal = ({ setAddTicket }) => {
  return (
    <Modal show onHide={() => {}} centered>
      <Modal.Header
        onClick={() => {
          setAddTicket(false);
        }}
        className={styles.closeButton}
        closeButton
      />
      <Container fluid>
        <div className={styles.reportTitle}>
          <p className="section-title">Report</p>
        </div>
        <div className={styles.container}>
          <p>Reason for report</p>

          <div className={styles.dropdown}>
            <Dropdown>
              <Dropdown.Toggle
                className={styles.dropDown}
                variant="success"
                id="dropdown-basic"
              >
                Scam
              </Dropdown.Toggle>

              <Dropdown.Menu className={styles.drop}>
                <Dropdown.Item className={styles.drop} href="#/action-1">
                  {/* text */}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className={styles.reason}>
            <p>Aditional reasons (optional)</p>
          </div>
          <div className={styles.messageInput}>
            <textarea
              name="description"
              type="description"
              className="modalInput"
              style={{ minHeight: "150px" }}
            />
          </div>
        </div>
      
      </Container>
    </Modal>
  );
};
export default ReportModal;
