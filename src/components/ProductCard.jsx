import React from "react";

export default function ProductCard({ dish }) {
  return (
    <div>
      <img src={dish.picture} />
      <li>{dish.title}</li>
    </div>
  );
}
