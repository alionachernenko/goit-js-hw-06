function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const numberInput = document.querySelector("input");
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

const creatBoxes = (amount) => {
  let boxSize = 30;
  const box = document.createElement("div");
  box.style.width = boxSize + "px";
  box.style.height = boxSize + "px";
  divBoxes.append(box);
  box.style.backgroundColor = getRandomHexColor();
  for (let i = 1; i < amount; i += 1) {
    const box = document.createElement("div");
    boxSize += 10;
    box.style.width = boxSize + "px";
    box.style.height = boxSize + "px";
    box.style.backgroundColor = getRandomHexColor();
    divBoxes.append(box);
  }
};

createButton.addEventListener("click", () => {
  const amount = numberInput.value;
  creatBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  while (divBoxes.firstChild) {
    divBoxes.removeChild(divBoxes.firstChild);
  }
});
