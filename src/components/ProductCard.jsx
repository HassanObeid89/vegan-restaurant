import React from "react";

export default function ProductCard({ dish }) {
  return (
    <div className="productCard">
      <div className="left">
        <img src={dish.picture} />
      </div>
      <div className="right">
        <h3>{dish.title}</h3>
        <p>ftuygbukjgvjhgbk</p>
      </div>
    </div>
  );
}
