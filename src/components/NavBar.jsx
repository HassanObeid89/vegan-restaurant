import React from "react";

export default function NavBar() {
  return (
    <div className="header">
      <div className="logo">
        <i class="fas fa-leaf">Vegetal</i>
      </div>
      <nav>
        <ul>
          <li>
            <a>Dishes</a>
          </li>
          <li>
            <a>Deserts</a>
          </li>
          <li>
            <a>Drinks</a>
          </li>
          <li>
            <a>Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
