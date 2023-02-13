'use strict';
/*
  2. Події елементів форм: focus, blur, change, input, submit

  Об'єкт події

  Реалізувати функціонал додавання та прибирання кастомного 
  outline у інпуту імені

  Реалізувати функціонал виведення введено ім'я у елемент span

  Реалізувати функціонал за яким кнопка сабміту стане 
  активною коли введене ім'я та вибраний checkbox

  Реалізувати функціонал при сабміті за яким у консоль 
  виводиться введене ім'я користувача, очищається форма та
  не перезавантажується сторінка - preventDefault
*/

const formEl = document.querySelector('.js-contact-form');
const formInputEl = document.querySelector('.js-username-input');
const formCheckboxEl = document.querySelector('.js-policy-checkbox');
const userNameOutputEl = document.querySelector('.js-username-output');
const formSubmitBtnEl = document.querySelector('.js-contact-form-submit');
