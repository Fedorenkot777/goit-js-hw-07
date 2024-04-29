function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');


function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  const array = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.classList.add("box");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    array.push(box);
  }
  boxes.append(...array);
};

createBtn.addEventListener('click', handleClick);
 function handleClick() {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
  

