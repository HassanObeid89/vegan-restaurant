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
  const productList = products.map((products) => products);
  const [navToggle, setToggle] = useState(false);
  
  return (
    <div className="App">
      <Router>
        {navToggle === true ? null : <NavBar />}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/CategoryPage/:category" exact>
            <CategoryPage key={productList.id} productList={productList} />
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
