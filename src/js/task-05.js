const nameInput = document.querySelector("input#name-input");
const nameOutput = document.querySelector("span#name-output");

nameInput.addEventListener("input", () => {
  nameOutput.textContent = "Anonymous";
  if (nameInput.value.length > 0) {
    nameOutput.textContent = nameInput.value.trim();
  }
});
