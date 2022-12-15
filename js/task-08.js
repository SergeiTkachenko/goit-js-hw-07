const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const { email, password } = e.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    return alert("все поля должны быть заполнены");
  }

  const formValue = {
    email: email.value,
    password: password.value,
  };

  console.log(formValue);

  document.querySelector(".login-form").reset();
});
