/* Элементы кнопок-переключателей раскладки */
let tileViewButton = document.querySelector('.card-view-tile');
let standardViewButton = document.querySelector('.card-view-standard');

/* Элемент списка карточек */
let cardsList = document.querySelector('.cards');

tileViewButton.onclick = function () {
  cardsList.classList.remove('standard');
  tileViewButton.classList.add('active');
  standardViewButton.classList.remove('active');
};

standardViewButton.onclick = function () {
  cardsList.classList.add('standard');
  tileViewButton.classList.remove('active');
  standardViewButton.classList.add('active');
};
