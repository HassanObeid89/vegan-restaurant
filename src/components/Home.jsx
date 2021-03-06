import CategoryBox from "./CategoryBox";
import data from "../data/Category.json";

export default function Home() {
  const boxes = data.map((item) => <CategoryBox key={item.id} item={item} />);
  return (
    <div className="home">
      <div className="hero">
        <p>Be a part of the Vegan Revolution!</p>
      </div>
      <section className="boxes">{boxes}</section>
    </div>
  );
}
