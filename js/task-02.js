const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");
const ingredientsItems = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = ingredients[i];
  ingredientItem.classList.add("item");
  ingredientsItems.push(ingredientItem);
}

ingredientsList.append(...ingredientsItems);
