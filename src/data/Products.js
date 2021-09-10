import tacos from "../assets/Dishes/avocado_tacos.png";
import dishes_hero from "../assets/Dishes/dishes_hero.png";

export const products = [
  {
    id: 1,
    picture: tacos,
    hero: dishes_hero,
    category: "Dishes",
    title: "Avocado Tacos",
    shortDescription: "",
    longDescription: "",
    ingredients: [{"emoji":"🥑", "name":"Avocado"}, {"emoji":"🍍", "name": "Onion"},{"emoji":"🧄", "name":  "Garlic"},{"emoji":"🌽", "name": "Corn"}],
    nutritionFacts: [

        {"name": "Protein", "value": "5.3g"},
        {"name":"Carbohydrates", "value": "32.8g"},
        {"name":"DietaryFiber", "value": "10.4g"},
        {"name":"Sugars", "value": "1.5g"},
        {"name":"Fat", "value": "16.3g"},
        {"name":"SaturatedFat", "value": "2.4g"},
        {"name":"Folate", "value": "91.1mcg"},
        {"name":"Calcium", "value": "62.2mg"},
        {"name":"Iron", "value": "1.4mg"},
        {"name":"Magnesium", "value": "69.8mg"},
        {"name":"Potassium", "value": "643.3mg"},
        {"name":"Sodium", "value": "110.5mg"},
        {"name":"Thiamin", "value": "0.2mg"},
        {"name":"CaloriesFromFat", "value": "146.4"},
      
    ],
  },
  {
    id: 2,
    picture: "url",
    category: "Dishes",
    title: "",
    shortDescription: "",
    longDescription: "",
    ingredients: [],
    nutritionFacts: [],
  },
  {
    id: 3,
    picture: "url",
    category: "Dishes",
    title: "",
    shortDescription: "",
    longDescription: "",
    ingredients: [],
    nutritionFacts: [],
  },
  {
    id: 4,
    picture: "url",
    category: "Dishes",
    title: "",
    shortDescription: "",
    longDescription: "",
    ingredients: [],
    nutritionFacts: [],
  },
];
