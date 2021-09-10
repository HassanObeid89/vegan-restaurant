import React from "react";
import { Link } from "react-router-dom";
import CategoryBox from "./CategoryBox";

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <h3>Vegetal</h3>
        <i className="fas fa-leaf" />
        <p>Be a part of the Vegan Revolution!</p>
      </div>
      <Link to={`/CategoryPage/Dishes`}>
        <CategoryBox category={"Dishes"} />
      </Link>
      <Link to={`/CategoryPage/Desserts`}>
        <CategoryBox category={"Desserts"} />
      </Link>
      <Link to={`/CategoryPage/Drinks`}>
        <CategoryBox category={"Drinks"} />
      </Link>
    </div>
  );
}
