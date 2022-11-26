const userInfo = {};

const loginForm = document.querySelector(".login-form");
const loginFormInputs = document.querySelectorAll("input");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  for (let i = 0; i < loginFormInputs.length; i += 1) {
    if (loginFormInputs[i].value.length === 0) {
      alert("Всі поля повинні бути заповнені");
      break;
    }
    userInfo[loginFormInputs[i].getAttribute("type")] =
      loginFormInputs[i].value;
  }
  console.log(userInfo);
  loginForm.reset();
});
