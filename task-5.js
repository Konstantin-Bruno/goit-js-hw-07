const input = document.querySelector('#name-input');
const name = document.querySelector('#name-output');
function textInput() {
    if (input.value) {
        name.textContent = input.value;
    }
    else {
        name.textContent = "незнакомец";
    }
}

input.addEventListener('keyup', textInput);