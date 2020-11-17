
const ingredientRef = document.querySelector('#ingredients');
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientRefChild = document.createElement('li');
let ingredient = ingredients.map(elem => {
  const li = ingredientRefChild.cloneNode(true);
  li.textContent = elem;
  return li;
});
ingredientRef.append(...ingredient);








