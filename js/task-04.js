const decrementButtonEl = document.querySelector('button[data-action = "decrement"]');
const incrementButtonEl = document.querySelector('button[data-action = "increment"]');
const counterValue = document.querySelector('#value');

decrementButtonEl.addEventListener('click', () => {
  counterValue.textContent = parseInt(counterValue.textContent) - 1;
});

incrementButtonEl.addEventListener('click', () => {
  counterValue.textContent = parseInt(counterValue.textContent) + 1;
});