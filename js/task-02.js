const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((elem) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = elem;
  ingredientItem.classList.add("item");
  ingredientsList.append(ingredientItem);
});
