function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButton = document.querySelector(".change-color");
const documentBody = document.querySelector("body");
const colorValue = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorValue.textContent = randomColor;
  documentBody.style.backgroundColor = randomColor;
});
