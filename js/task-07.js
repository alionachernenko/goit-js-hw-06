const fontSizeControl = document.querySelector("input#font-size-control");
const text = document.querySelector("#text");
fontSizeControl.value = "16";
fontSizeControl.addEventListener("input", () => {
  text.style.fontSize = fontSizeControl.value + "px";
  console.log(text.style.fontSize);
});
