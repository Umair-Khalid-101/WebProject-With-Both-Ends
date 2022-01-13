import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignUp from "../forms/SignUp";
import Products from "../pages/Products";
import Cart from "../pages/Cart";
import Test from "../components/Test";
import NavBar from "../components/NavBar";
import ShippingForm from "../forms/ShippingForm";
import Users from "../pages/Users";
import UpdateUser from "../pages/UpdateUser";
import Login from "../forms/Login";
import Success from "../pages/Success";
function Routes() {
  const [data, setData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [counter, setCounter] = useState(0);

  return (
    <Router>
      <Switch>
        <Route exact path="/Success/:id">
          <Success />
        </Route>
        <Route exact path="/UpdateUser/:id">
          <UpdateUser />
        </Route>
        <Route exact path="/Users">
          <Users />
        </Route>
        <Route exact path="/Test">
          <Test />
        </Route>
        <Route exact path="/Login">
          <Login />
        </Route>
        <Route exact path="/ShippingForm">
          <ShippingForm />
        </Route>
        <Route
          exact
          path="/Cart"
          render={(props) => (
            <Cart
              setCounter={(a) => setCounter(a)}
              product={productData}
              counter={counter}
            />
          )}
        />
        <Route
          exact
          path="/Products"
          render={(props) => (
            <Products
              handleStateChange={(d) => setProductData(d)}
              productData={productData}
              counter={counter}
              setCounter={(a) => setCounter(a)}
              data={data}
            />
          )}
        />

        <Route
          exact
          path="/SignUp"
          render={(props) => (
            <SignUp handleStateChange={(d) => setData(d)} data={data} />
          )}
        />

        <Route exact path="/NavBar">
          <NavBar />
        </Route>
        <Route exact path="/">
          <Home counter={counter} setCounter={(a) => setCounter(a)} />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
