const counterValue = document.querySelector("#value");

let counter = counterValue.textContent;

const counterDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

counterDecrement.addEventListener("click", () => {
  counter = Number(counter) - 1;
  counterValue.textContent = counter;
});

const counterIncrement = document.querySelector(
  'button[data-action="increment"]'
);

counterIncrement.addEventListener("click", () => {
  counter = Number(counter) + 1;
  counterValue.textContent = counter;
});

// const counterValue = document.querySelector("#value");

// const counterDecrement = document.querySelector(
//   'button[data-action="decrement"]'
// );
// counterDecrement.addEventListener("click", () => {
//   counterValue.textContent -= 1;
// });

// const counterIncrement = document.querySelector(
//   'button[data-action="increment"]'
// );

// counterIncrement.addEventListener("click", () => {
//   counterValue.textContent = Number(counterValue.textContent) + 1;
// });
