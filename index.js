
var input = document.getElementById('name');
var inputValue = document.getElementById('input-value');
var debounceValue = document.getElementById('debounce-value');


const updateInputValue = () => {
  inputValue.innerHTML = input.value;
}

const updateDebounceValue = () => {
  debounceValue.innerHTML = input.value;
}

let debounceTimer;

const debounce = (callback, time) => {
  window.clearTimeout(debounceTimer);
  debounceTimer = window.setTimeout(callback, time);
};

input.addEventListener(
  "input",
  () => {
    updateInputValue();
    debounce(updateDebounceValue, 500)
  },
  false
);