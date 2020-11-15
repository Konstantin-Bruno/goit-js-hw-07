function changeFontSize() {
  text.style.fontSize = `${input.value}px`;}

const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', changeFontSize);