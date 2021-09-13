import React from "react";
import Dishes from "../../assets/Dishes_box.jpg";
import Desserts from "../../assets/Desserts.jpg";
import Drinks from "../../assets/Drinks.jpg";

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
    /**
     * This code is hard to understand, you can achieve the same effect in pure CSS withouth adding JSX logic.
     * Thus generating nested code -1
     * The minus one sounds harsh and it is.
     * But this happens when you are too much used to frameworks like Bootstrap, Tailwind, etc
     * You don't realize that there is an easy way to do it in pure CSS.
     * In this case the property :even and :odd
     */
    <div>
      {category !== "Desserts" ? (
        <div className="categoryBox">
          <div className="left">
            {/* You don't need to use a function to get the imports. */}
            {/* You can use dynamic imports */}
            <img src={getBackgroundImage()} alt="" />
          </div>
          <div className="right">
            <h2>{category}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>View more </p>
          </div>
        </div>
      ) : (
        <div className="categoryBox">
          <div className="right">
            <h2>{category}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>View more </p>
          </div>
          <div className="left">
            {/* Same here */}
            <img src={getBackgroundImage()} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}
