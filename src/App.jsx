import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CategoryPage from "./components/CategoryPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

export default function App() {
  return (
    <div className="App">
      <NavBar />

      <Home />
      <CategoryPage />
      <ContactUs />
      <Footer />
    </div>
  );
}
