import { Link } from "react-router-dom";
export default function CategoryBox({ item }) {
  const { description, category, imageFile } = item;
  const image = require("../assets/images/" + imageFile).default;

  return (
    <div id="box" className="categoryBox">
      <div className="left">
        <img src={image} alt="" />
      </div>
      <div className="right">
        <h2>{category}</h2>
        <p>{description}</p>
        <Link scrollToTop to={`/CategoryPage/${category}`}>
          <button>View more</button>
        </Link>
      </div>
    </div>
  );
}
