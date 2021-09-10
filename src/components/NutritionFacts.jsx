import React from "react";

export default function NutritionFacts({ data }) {
  const nutrition = data.map((nutrition) => (
    <tr>
      <td>{nutrition.name}</td>
      <td>{nutrition.value}</td>
    </tr>
  ));

  return <div>{nutrition}</div>;
}
