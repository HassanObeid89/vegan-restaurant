import React from "react";

export default function Ingradients({ data }) {
  const ingradient = data.map((ingradient) => (
    <li>
      <span>{ingradient.emoji}</span>
      <p>{ingradient.name}</p>
    </li>
  ));
  return <div className="card">{ingradient}</div>;
}
