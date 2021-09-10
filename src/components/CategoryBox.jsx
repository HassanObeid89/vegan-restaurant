import React from "react";
import Dishes from "../assets/Dishes_box.jpg";
import Desserts from "../assets/Desserts.jpg";
import Drinks from "../assets/Drinks.jpg";

export default function CategoryBox({ category }) {
  const getBackgroundImage = () => {
    switch (category) {
      case "Dishes":
        return Dishes;
      case "Desserts":
        return Desserts;
      case "Drinks":
        return Drinks;
      default:
        return null;
    }
  };
  return (
    <div className="categoryBox">
      <div className="left">
        <img src={getBackgroundImage()} alt="" />
      </div>
      <div className="right">
        <h2>{category}</h2>
        <p>fgcv dscquwb wxbwxblbx wxbwbwxlj xwbxjabx.</p>
        <button>View menu</button>
      </div>
    </div>
  );
}
