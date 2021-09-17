import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/Products";

export default function CategoryPage() {
  const params = useParams();

  const dishes = products.filter(
    (dishes) => dishes.category === params.category
  );
  const card = dishes.map((dish) => <ProductCard key={dish.id} dish={dish} />);
  return (
    <div className="categoryPage">
      <div className={`categoryHeader ${dishes[0].category}`}>
        <h1>{dishes[0].category}</h1>
      </div>
      <span>{dishes[0].shortDescription}</span>
      <div>
        <ul>{card}</ul>
      </div>
    </div>
  );
}
