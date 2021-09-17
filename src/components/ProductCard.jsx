import { Link } from "react-router-dom";

export default function ProductCard({ item }) {
  const image = require("../assets/images/" + item.imageFile).default;
  return (
    <Link to={`/product/${item.id}`}>
      <div className="productCard">
        <div className="left">
          <img src={image} alt="" />
        </div>
        <div className="right">
          <h3>{item.title}</h3>
          <p>{item.shortDescription}</p>
        </div>
      </div>
    </Link>
  );
}
