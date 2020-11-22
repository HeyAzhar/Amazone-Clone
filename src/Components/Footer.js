import React from "react";
import "./Styles/Footer.css";
import { Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <div className="footer">
      <button onClick={() => (document.body.scrollTop = 0)}>Back to top</button>
      <Row className="footer__container">
        <Col sm={3} xs={6}>
          <h6>Get to Know Us</h6>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Cares</li>
            <li>Gift a Smile</li>
          </ul>
        </Col>
        <Col sm={3} xs={6}>
          <h6>Connect with Us</h6>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Col>
        <Col sm={3} xs={6}>
          <h6>Make Money with Us</h6>
          <ul>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </Col>
        <Col sm={3} xs={6}>
          <h6>Let Us Help You</h6>
          <ul>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </Col>
      </Row>
      <div className="credit">Amazon Clone by {"{ Az }"}</div>
    </div>
  );
}

export default Footer;
