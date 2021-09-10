import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { products } from "../data/Products";
import Ingradients from "./Ingradients";
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

  const ingradients = product.map((product) => (
    <Ingradients data={product.ingredients} />
  ));

  return (
    <div className="product_wrapper">
      <section className="header">
        <i onClick={goBackHandle} className="fas fa-arrow-left" />
        <img src={product[0].picture} />
      </section>
      <div className="details">
        <h2>{product[0].title}</h2>
        <section className="ingradients">
          <h3>Ingradients</h3>
          <ul>{ingradients}</ul>
        </section>
        {/* <section>
        <h3>Nutrition facts</h3>
        <table>
          <td>
            <tr>hello</tr>
            <tr>fucking</tr>
            <tr>Nutrition</tr>
            <tr>facts</tr>
          </td>
          <td>
            <tr>fuck</tr>
            <tr>all </tr>
            <tr>Nutritions</tr>
            🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪🤪
          </td>
        </table>
      </section> */}
      </div>
    </div>
  );
}
