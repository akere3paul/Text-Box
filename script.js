const textBox = document.querySelector('.text-box');
const colors = ['blue', 'red', 'green', 'yellow', 'pink'];

let colorIndex = 0;

setInterval(() => {
    textBox.classList.add('color-change');
    textBox.style.borderColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}, 2000);

setTimeout(() => {
    textBox.classList.remove('color-change');
}, 2000);