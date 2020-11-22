import React from "react";
import "./Styles/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    } else {
    }
  };

  return (
    <Row className="header">
      <Col className="d-flex" xs={12} sm={12} md={8} lg={9}>
        <Link to="/">
          <img
            id="top"
            className="header__logo"
            alt="logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          />
        </Link>
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>
      </Col>
      <Col xs={12} sm={12} md={4} lg={3}>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuth} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user?.email}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </Col>
    </Row>
  );
}

export default Header;
