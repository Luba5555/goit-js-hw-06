function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('#controls input');
const creatyBtn = document.querySelector('#controls [data-create]');
const destroyBtn = document.querySelector('#controls [data-destroy]');
const boxes = document.querySelector('#boxes');

let amount;

input.addEventListener('input', onInput);
creatyBtn.addEventListener('click', onCreatyBtn);
destroyBtn.addEventListener('click', onDestroyBtn);

function onInput(event) {
  amount = parseInt(event.currentTarget.value);
}

function onCreatyBtn(event) {
  createBoxes(amount);
}

function onDestroyBtn(event) {
destroyBoxes();
}

function createBoxes(amount) {
  let startWidth = 30;
  let startHeight = 30;
  let Stringhtml = '';

  for (let i = 0; i < amount; i += 1) {
    startWidth += 10;
    startHeight += 10;
    Stringhtml += createBoxHtml(startWidth, startHeight, getRandomHexColor());
  }
  boxes.insertAdjacentHTML('afterbegin', Stringhtml);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

function createBoxHtml(width, height, color) {
  return `<div style="width: ${width}px; height: ${height}px; background-color: ${color};"></div>`;
}