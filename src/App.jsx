import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { products } from "./data/Products";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  // this variable does not do anything. -1
  const productList = products.map((products) => products);
  const [navToggle, setToggle] = useState(false);

  return (
    <div className="App">
      <Router>
        {/* You don't need the === true. navToggle withouth anything do the same */}
        {/* You can use the && for a IF that does not have an ELSE */}
        {/* Is better to have something in the IF  */}

        {/* Only the "/" route needs the exact keyword */}
        {!navToggle && <NavBar />}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/CategoryPage/:category" exact>
            {/* Why there is a key here, if you did not create multiple copies of CategoryPage. -1 */}
            <CategoryPage productList={productList} />
          </Route>
          <Route path="/product/:id" exact>
            <ProductPage setToggle={setToggle} />
          </Route>
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
