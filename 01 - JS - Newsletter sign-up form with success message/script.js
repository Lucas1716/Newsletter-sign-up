const container = document.querySelector(".container");
const email = document.querySelector(".email__input");
const inputBtn = document.querySelector(".email__btn");
const successBtn = document.querySelector(".success__btn");
const successWindow = document.querySelector(".success__window");
const successInfo = document.querySelector(".success__info");
const textBold = document.querySelector(".bold__info");
const emailError = document.querySelector(".email__info");

function validateEmail(email) {
  // Regular expression for basic email validation
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}

inputBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const emailInput = email.value;

  if (validateEmail(emailInput)) {
    successWindow.classList.remove("display");
    container.classList.add("display");
    textBold.innerHTML = `${emailInput}`;
  } else {
    emailError.classList.add("email__error");
    emailError.innerHTML = "Valid email required";
    email.classList.add("btn__error");
    email.style.border = "1px solid red";
    email.value = "";
  }
});

successBtn.addEventListener("click", function () {
  successWindow.classList.add("display");
  container.classList.remove("display");
  emailError.classList.remove("email__error");
  email.classList.remove("btn__error");
  emailError.innerHTML = "";
  email.style.border = "1px solid hsla(231, 7%, 60%, 0.453)";
  email.value = "";
});
