import React, { useEffect, useState } from "react";
import "./Styles/Payment.css";
import { Link, useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Row, Col } from "react-bootstrap";
import axios from "../axios";

import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";
import { db } from "../firebase";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  // console.log("Client Secret>>> ", clientSecret);

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <h1>
        Checkout (<Link to="/checkout">{basket?.length} items</Link>)
      </h1>
      <Row className="p-4 m-1 payment__section">
        <Col md={2}>
          <h3>Delivery Address</h3>
        </Col>
        <Col md={10}>
          <p>{user?.email}</p>
          <p>111 React Lane</p>
          <p>Kolata, WB</p>
        </Col>
      </Row>
      <Row className="p-4 m-1 payment__section">
        <Col md={2}>
          <h3>Review items and delivery</h3>
        </Col>
        <Col md={10}>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </Col>
      </Row>
      <Row className="p-4 m-1 payment__section">
        <Col md={2}>
          <h3>Payment Method</h3>
        </Col>
        <Col md={3}>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__priceContainer">
              <CurrencyFormat
                renderText={(value) => <h3>Order Total: {value}</h3>}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                className="buyButton"
                disabled={processing || disabled || succeeded}
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default Payment;
