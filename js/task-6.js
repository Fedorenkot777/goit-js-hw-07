function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]'); const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount); input.value = '';
  } else {
    alert('Please enter a number between 1 and 100');
  }
});
destroyBtn.addEventListener('click',() => {destroyBoxes(); });
function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = "49px";
    box.style.height = "24px";
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    let size = 30 + i * 10;
  }
}

function destroyBoxes();

