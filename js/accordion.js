/*
  4. Практичне завдання:

  Реалізувати функціонал 'акордеону', коли ми натискаємо
  на кнопку елементу та в нас відкривається або закривається
  вміст який до цього елементу відноситься
*/

const btnEls = document.querySelectorAll('.js-accordion-btn');

console.log(btnEls);

const handleTogglePanel = (event) => {
  const panelEl = event.target.nextElementSibling;

  panelEl.classList.toggle('closed');
};

btnEls.forEach((el) => {
  el.addEventListener('click', handleTogglePanel);
});
