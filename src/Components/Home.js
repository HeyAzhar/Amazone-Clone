import React from "react";
import "./Styles/Home.css";
import { Col, Row } from "react-bootstrap";
import Product from "./Product";

function Home() {
  return (
    <Row>
      <Col xs={12}>
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
      </Col>

      <Col xs={6}>
        <Product
          id="11111111"
          title="All-New Kindle Oasis - Now with adjustable warm light"
          price={299.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61dNnm1DMQL._SL1000_.jpg"
        />
      </Col>
      <Col xs={6}>
        <Product
          id="11111112"
          title="Echo Dot, Black – Improved smart speaker with Alexa"
          price={79.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
        />
      </Col>

      <Col xs={6}>
        <Product
          id="11111114"
          title="EZVIZ Wireless Full HD Home Camera with Night Vision"
          price={139.99}
          rating={3}
          image="https://images-na.ssl-images-amazon.com/images/I/31eOiDpc3QL.jpg"
        />
      </Col>
      <Col xs={6}>
        <Product
          id="11111115"
          title="Echo Plus Smart Home hub (Black)"
          price={149.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/61ZJvf5xWBL._SL1000_.jpg"
        />
      </Col>
      <Col xs={12} md={6}>
        <Product
          id="11111113"
          title="Echo Show - Premium sound and a vibrant HD screen - Black"
          price={199.99}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/51gd3Z8rKmL._SL1000_.jpg"
        />
      </Col>
      <Col xs={12} md={6}>
        <Product
          id="11111116"
          title="
            HP 34-inch Curved Ultra-Thin Bezel Less QHD IPS Monitor"
          price={799.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71BSoHN%2B8lL._SL1500_.jpg"
        />
      </Col>
    </Row>
  );
}

export default Home;
