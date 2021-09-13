import React from "react"; // you dont need to import react anymore since React 17

export default function Ingradients({ data }) {
  const ingradient = data.map((ingradient) => (
    <li>
      <span>{ingradient.emoji}</span>
      <p>{ingradient.name}</p>
    </li>
  ));

  return <div className="card">{ingradient}</div>;
}
