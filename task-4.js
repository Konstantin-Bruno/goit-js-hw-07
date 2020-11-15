
// const btn = document.querySelector('#counter');


// let counterValue = 0;

// function decrement() {
//     counterValue -= 1;

//     render();
// }

// function increment() {
//     counterValue += 1;

//     render();
// }



//     const buttonDecrement = document.querySelector('button[data-action="decrement"]');
//     const buttonIncrement = document.querySelector('button[data-action="increment"]') ,
//     const htmlValue = document.querySelector('#value');

// function render() {
//     htmlValue.textContent = counterValue;
// }

// buttonDecrement.addEventListener('click', decrement);
// buttonIncrement.addEventListener('click', increment);


const value = document.querySelector('#value');
function increment() {
    value.textContent ++;
}
function decrement() {
    value.textContent --;
}
const buttonIncrement= document.querySelector('button[data-action="increment"]',);
const buttonDecrement = document.querySelector('button[data-action="decrement"]',);

buttonDecrement.addEventListener('click', decrement);
buttonIncrement.addEventListener('click', increment);
