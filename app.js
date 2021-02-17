const menuToggle = document.querySelector(".toggle-menu");
const nav = document.querySelector("nav ul");
const form = document.getElementById("form");
const email = document.getElementById("email");
const data = document.getElementById("data");
const username = document.getElementById("username");

// Toggle
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("slide");
});

// Validasi email
form.addEventListener("click", (e) => {
  e.preventDefault();
  checkInput();
});

function checkInput() {
  const emailValue = email.value;

  if (emailValue === "") {
    setErrorfor(email, "Please Check Your Email");
  } else {
    setSuccessfor(email);
  }
}

function setErrorfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  small.innerText = massage;
  control.className = "form-control erorr";
}

function setSuccessfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  small.innerText = massage;
  control.className = "form-control success";
}

// validasi username

data.addEventListener("click", (e) => {
  e.preventDefault();
  identitas();
});

function identitas() {
  const usernameValue = username.value;

  if (usernameValue === "") {
    setErrorfor(username, "Please Check Your Email");
  } else {
    setSuccessfor(username);
  }
}

function setErrorfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  small.innerText = massage;
  control.className = "form-control erorr";
}

function setSuccessfor(input, massage) {
  const control = input.parentElement;
  const small = control.querySelector("small");
  small.innerText = massage;
  control.className = "form-control success";
}
