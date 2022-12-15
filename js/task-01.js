const numberOfCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfCategories.length}`);

const a = document.querySelectorAll("h2");

// for (let i = 0; i < a.length; i += 1) {
//   const b = numberOfCategories[i].querySelectorAll("li");
//   console.log(`Category:${a[i].textContent} \nElements: ${b.length}`);
// }

numberOfCategories.forEach(function (number, i) {
  const b = numberOfCategories[i].querySelectorAll("li");
  console.log(`Category:${a[i].textContent} \nElements: ${b.length}`);
});
