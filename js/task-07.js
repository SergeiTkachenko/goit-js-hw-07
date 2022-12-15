const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", () => {
  textEl.setAttribute("style", `font-size: ${inputEl.value}px`);
});
