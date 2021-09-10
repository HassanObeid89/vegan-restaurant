import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

export default function CategoryPage({ productList }) {
  const params = useParams();
  
  const dishes = productList.filter(
    (dishes) => dishes.category === params.category
  );
  const card = dishes.map((dish) => <ProductCard key={dish.id} dish={dish} />);
  return (
    <div className="categoryPage">
      <div className="top">
        <img src={dishes[0].hero} alt='' />
        <h1>{dishes[0].category}</h1>
      </div>
      {/* <p>{dishes[0].shortDescription}</p> */}
      <ul>{card}</ul>
    </div>
  );
}
