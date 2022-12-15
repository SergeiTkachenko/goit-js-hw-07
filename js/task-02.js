const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = ingredients.map((ingredient, i) => {
  const item = document.createElement("li");
  item.textContent = `${ingredients[i]}`;
  item.classList.add("item");
  return item;
});
list.append(...markup);

// for (let i = 0; i < ingredients.length; i += 1) {
//   const item = document.createElement("li");
//   item.textContent = `${ingredients[i]}`;
//   list.append(item);
//   item.classList.add("item");
// }
