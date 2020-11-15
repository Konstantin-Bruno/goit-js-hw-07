function textInput() {    
    name.textContent = input.value ? input.value : 'незнакомец';
}
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('keyup', textInput);