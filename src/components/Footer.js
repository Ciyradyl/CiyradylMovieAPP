import { Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Row className="footer">
        <Col className="footer_header">
          <h4 className="footer_header">MovieDB App</h4>
        </Col>
        <Col className="footer_column">
          <h6>Home</h6>
          <h6>Movies</h6>
          <h6>Details</h6>
        </Col>
        <Col className="footer_column">
          <h6>Contact</h6>
          <h6>Recruit</h6>
          <h6>Job Offers</h6>
        </Col>
        <Col className="footer_column">
          <h6>Facebook</h6>
          <h6>Twitter</h6>
          <h6>Instagram</h6>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
