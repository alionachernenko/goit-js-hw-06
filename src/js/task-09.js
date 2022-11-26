function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const documentBody = document.querySelector("body");
const colorValue = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  colorValue.textContent = getRandomHexColor();
  documentBody.style.backgroundColor = getRandomHexColor();
});
