import React from "react";
import "./Styles/Product.css";
import { useStateValue } from "../StateProvider";
import { Col, Row } from "react-bootstrap";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <Row className="product">
      <Col className="product__info">
        <p>{title}</p>
        <div className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </Col>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to cart</button>
    </Row>
  );
}

export default Product;
