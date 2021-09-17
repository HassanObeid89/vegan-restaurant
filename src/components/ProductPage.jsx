import { useHistory, useParams } from "react-router-dom";
// import { products } from "../data/Products";
import Ingradients from "./sections/Ingradients";
import NutritionFacts from "./sections/NutritionFacts";
import Products from "../data/Products.json";

export default function ProductPage() {
  const params = useParams();
  const location = useHistory();

  function goBackHandle() {
    location.goBack();
  }

  const product = Products.filter((item) => item.id === parseInt(params.id));

  const image = require("../assets/images/" + product[0].imageFile).default;
  const nutritionFacts = product.map((item) => (
    <NutritionFacts data={item.nutritionFacts} />
  ));
  const ingradients = product.map((item) => (
    <Ingradients data={item.ingredients} />
  ));

  return (
    <div id="productPage">
      <section className="header_wrapper">
        <img src={image} alt="" />
        <div className="sub-wrapper">
          <h2>{product[0].title}</h2>
          <p>{product[0].longDescription}</p>
        </div>
      </section>
      <section className="ingradients">
        <h2>Ingradients</h2>
        <ul>{ingradients}</ul>
      </section>
      <section className="table-container">
        <h2>Nutrition facts</h2>
        <table className="content-table">{nutritionFacts}</table>
      </section>
      <button className="button" onClick={goBackHandle}>
        Go back
      </button>
    </div>
  );
}
