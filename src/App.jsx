import { BrowserRouter as Router, Switch, Route, useParams } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import {products} from './data/Products';

import "./App.css";

export default function App() {

  
     
  
  const productList = products.map((products) => products)
  
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/CategoryPage/:category" exact>
          <CategoryPage key={productList.id} productList={productList}/>
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
