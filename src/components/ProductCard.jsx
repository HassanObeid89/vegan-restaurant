import React from "react";
import {Link} from 'react-router-dom'

export default function ProductCard({ dish }) {
  return (
    <Link to={`/product/${dish.id}`} >
    <div className="productCard">
      <div className="left">
        <img src={dish.picture} alt='' />
      </div>
      <div className="right">
        <h3>{dish.title}</h3>
        <p>ftuygbukjgvjhgbk</p>
      </div>
    </div>
    </Link>
  );
}
