import React from "react";
import CategoryBox from "./CategoryBox";

export default function Home() {
  return (
    <div class="home">
      <div className="hero">
        <h3>Vegetal</h3>
        <i class="fas fa-leaf" />
        <p>Be a part of the Vegan Revolution!</p>
      </div>
      <CategoryBox category={'Dishes'} />
      <CategoryBox category={'Desserts'} />
      <CategoryBox category={'Drinks'} />
    </div>
  );
}
