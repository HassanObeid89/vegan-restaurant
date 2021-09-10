import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { products } from "../data/Products";
import Ingradients from "./Ingradients";
import NutritionFacts from "./NutritionFacts";

export default function ProductPage({ setToggle }) {
  const params = useParams();
  const location = useHistory();

  function goBackHandle() {
    setToggle(false);
    location.goBack();
  }

  useEffect(() => {
    setToggle(true);
  }, []);

  const product = products.filter(
    (dishes) => dishes.id === parseInt(params.id)
  );
  const nutritionFacts = product.map((product) => (
    <NutritionFacts data={product.nutritionFacts} />
  ));
  const ingradients = product.map((product) => (
    <Ingradients data={product.ingredients} />
  ));

  return (
    <div className="product_wrapper">
      <section className="header_wrapper">
        <i onClick={goBackHandle} className="fas fa-arrow-left" />
        <img src={product[0].picture} alt="" />
      </section>
      <div className="details">
        <h2>{product[0].title}</h2>
        <section className="ingradients">
          <h3>Ingradients</h3>
          <ul>{ingradients}</ul>
        </section>
        <section className="table-container">
          <h3>Nutrition facts</h3>
          <table className="content-table">{nutritionFacts}</table>
        </section>
      </div>
    </div>
  );
}
