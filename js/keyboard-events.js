'use strict';
/*
  3. Події клавіатури: keydown, keyup
*/

const outputEl = document.querySelector('.js-output');

document.addEventListener('keyup', (event) => {
  outputEl.insertAdjacentHTML(
    'beforeend',
    `code: ${event.code} <br> key: ${event.key} <br> <hr>`
  );
});
