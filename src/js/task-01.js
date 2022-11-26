const categoriesItemsNumber =
  document.querySelector("#categories").children.length;

console.log(`Number of categories: ${categoriesItemsNumber}`);
const categoriesItem = document.querySelectorAll(".item");

categoriesItem.forEach((elem) => {
  console.log(`Category: ${elem.firstElementChild.textContent}
    Elements: ${elem.lastElementChild.children.length}`);
});
