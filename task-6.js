function textInput() {
  const length = input.getAttribute('data-length');
  classListAdd(input.value.length === Number(length) ? true : false);
}
function classListAdd(added) {
  if (added) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } 
    input.classList.add('invalid');
    input.classList.remove('valid');
  
}
const input = document.querySelector('#validation-input');

input.addEventListener('blur', textInput);