import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage";
import ProductPage from "./components/ProductPage";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route scrollToTop path="/CategoryPage/:category">
            <CategoryPage />
          </Route>
          <Route path="/product/:id">
            <ProductPage />
          </Route>
          <Route path="/ContactUs">
            <ContactUs />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}
