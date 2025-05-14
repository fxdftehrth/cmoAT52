// Реакция кнопок "Купить"
const buyButtons = document.querySelectorAll('.btn');
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Товар добавлен в корзину!');
  });
});