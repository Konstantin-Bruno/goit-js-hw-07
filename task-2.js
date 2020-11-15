const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientRef = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => console.log(ingredient));
const ingredient = ingredients.map(ingredient => ingredient);
console.log(ingredients);


console.log(ingredientRef);

const ingredientRefChild1 = document.createElement('li');
// console.log(ingredientRefChild1);
ingredientRef.appendChild(ingredientRefChild1);
ingredientRefChild1.textContent = ingredient[0];
// console.log(ingredientRef);

const ingredientRefChild2 = document.createElement('li');
// console.log(ingredientRefChild2);
ingredientRef.appendChild(ingredientRefChild2);
ingredientRefChild2.textContent = ingredient[1];
// console.log(ingredientRef);

const ingredientRefChild3 = document.createElement('li');
// console.log(ingredientRefChild3);
ingredientRef.appendChild(ingredientRefChild3);
ingredientRefChild3.textContent = ingredient[2];
// console.log(ingredientRef);

const ingredientRefChild4 = document.createElement('li');
// console.log(ingredientRefChild4);
ingredientRef.appendChild(ingredientRefChild4);
ingredientRefChild4.textContent = ingredient[3];
// console.log(ingredientRef);

const ingredientRefChild5 = document.createElement('li');
// console.log(ingredientRefChild5);
ingredientRef.appendChild(ingredientRefChild5);
ingredientRefChild5.textContent = ingredient[4];
// console.log(ingredientRef);

const ingredientRefChild6 = document.createElement('li');
// console.log(ingredientRefChild6);
ingredientRef.appendChild(ingredientRefChild6);
ingredientRefChild6.textContent = ingredient[5];

console.log(ingredientRef);

