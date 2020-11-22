import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

//import components
import Header from "./Components/Header";
import Home from "./Components/Home";
import Checkout from "./Components/Checkout";
import Login from "./Components/Login";
import Payment from "./Components/Payment";
import Orders from "./Components/Orders";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Footer from "./Components/Footer";

const promise = loadStripe(
  "pk_test_51HEtXIHjhdKNNxto5JH0tOZXx6aKKzMebznsiTzgiQ7vDRSCX4qe3tYeshHvU6i6PQiuPgqLzD9itSukjxF1VvCY00KuI1ZXiU"
);

function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>>", authUser);

      if (authUser) {
        //User exist
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //No User
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/orders">
          <Header />
          <Orders />
          <Footer />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/checkout">
          <Header />
          <Checkout />
          <Footer />
        </Route>
        <Route path="/payment">
          <Header />
          <Elements stripe={promise}>
            <Payment />
          </Elements>
          <Footer />
        </Route>
        <Route path="/">
          <Header />
          <Home />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
