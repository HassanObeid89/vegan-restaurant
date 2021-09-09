import React from "react";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <i class="fas fa-leaf">Vegetal</i>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/CategoryPage/Dishes">Dishes</Link>
          </li>
          <li>
            <Link to="/CategoryPage/Desserts">Deserts</Link>
          </li>
          <li>
            <Link to="/CategoryPage/Drinks">Drinks</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
