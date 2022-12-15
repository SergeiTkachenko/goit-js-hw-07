const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
const defaultText = outputEl.textContent;

inputEl.addEventListener('input', () => {
  outputEl.textContent = inputEl.value;
  if (outputEl.textContent === '') {
    outputEl.textContent = defaultText;
  }
});
