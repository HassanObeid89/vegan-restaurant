import { useHistory, useParams } from "react-router-dom";
import { products } from "../data/Products";
import Ingradients from "./sections/Ingradients";
import NutritionFacts from "./sections/NutritionFacts";

export default function ProductPage() {
  const params = useParams();
  const location = useHistory();

  function goBackHandle() {
    location.goBack();
  }

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
    <div id="productPage">
      <section className="header_wrapper">
        <img src={product[0].picture} alt="" />
        <div className="sub-wrapper">
          <h2>{product[0].title}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
