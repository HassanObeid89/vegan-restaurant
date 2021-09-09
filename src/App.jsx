import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

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
          <Route path="/CategoryPage" exact>
            <CategoryPage />
          </Route>
          <Route path="/ContactUs" exact>
            <ContactUs />
          </Route>
          <Route path="/Footer" exact>
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
