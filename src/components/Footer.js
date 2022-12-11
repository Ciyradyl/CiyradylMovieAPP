import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Row className="footer">
        <Col className="footer_header">
          <h5 className="footer_header">MovieDB App</h5>
        </Col>
        <Col className="footer_column">
          <h7>Home</h7>
          <h7>Movies</h7>
          <h7>Details</h7>
        </Col>
        <Col className="footer_column">
          <h7>Contact</h7>
          <h7>Recruit</h7>
          <h7>Job Offers</h7>
        </Col>
        <Col className="footer_column">
          <h7>Facebook</h7>
          <h7>Twitter</h7>
          <h7>Instagram</h7>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
