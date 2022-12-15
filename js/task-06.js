const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", () => {
  if (Number(inputEl.dataset.length) === Number(inputEl.value.length)) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
});

inputEl.addEventListener("focus", () => {
  inputEl.classList.remove("valid");
  inputEl.classList.remove("invalid");
});
