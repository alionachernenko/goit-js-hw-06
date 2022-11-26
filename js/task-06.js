const validationInput = document.querySelector("input[data-length='6']");
validationInput.addEventListener("blur", () => {
  if (
    validationInput.value.trim().length ===
    Number.parseInt(validationInput.dataset.length)
  ) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
});
