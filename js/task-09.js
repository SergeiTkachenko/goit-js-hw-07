function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const textEl = document.querySelector(".color");

btnEl.addEventListener("click", () => {
  const randomHexColor = getRandomHexColor();
  bodyEl.setAttribute("style", `background-color: ${randomHexColor}`);
  // bodyEl.style.backgroundColor = `${randomHexColor}`;
  textEl.textContent = `${randomHexColor}`;
});
