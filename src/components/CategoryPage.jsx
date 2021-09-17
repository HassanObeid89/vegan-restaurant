import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/Products";
import Products from "../data/Products.json";
import Category from "../data/Category.json";
export default function CategoryPage() {
  const params = useParams();
  const category = Category.filter(
    (category) => category.category === params.category
  );
  const filteredItems = Products.filter(
    (items) => items.category === params.category
  );
  const cards = filteredItems.map((item) => (
    <ProductCard key={item.id} item={item} />
  ));

  return (
    <div className="categoryPage">
      <div className={`categoryHeader ${category[0].category}`}>
        <h1>{category[0].category}</h1>
      </div>
      <span>{category[0].description}</span>
      <div>
        <ul>{cards}</ul>
      </div>
    </div>
  );
}
