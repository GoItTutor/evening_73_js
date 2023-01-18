// https://www.codewars.com/join?language=javascript
// ---------------Kahoot---------//

// const array = [`string`, 4848, Boolean, undefined];

// console.log(array);

// Мутабельні та імутабельні типи даних
// https://developer.mozilla.org/en-US/docs/Glossary/Mutable

// const clients = ["Mango", "Poly", "Ajax"];
// const string = "script";

// console.log(string[1]);

// // Імутабельні
// string[0] = "q";

// console.log(string);

// // Мутабельні

// clients[0] = "Andrii";

// clients.splice(1, 1);
// console.log(clients);

// За посиланням
// Складні (якщо говорити правильно то тільки Object)
//  Object
//  Array

// const arr1 = [1, 2, 3];
// const arr2 = arr1;

// arr2[0] = 10;

// console.log(arr1);
// console.log(arr2);

// console.log(arr1 === arr2);

// console.log(typeof arr1);

// За значенням
// Примітивні
// String
// Number
// Boolean
// null
// undefined

// let a = 10;

// let b = a;

// b = 5;

// console.log(a);
// console.log(b);

/*
  Example 1 - Базові операції з масивом

  [] літерал масиву

  Властивість length та індексація
  
  Створіть масив genres з елементами Jazz і Blues

  Додайте 'Rock&roll' у кінець масиву

  Виведіть у консоль перший елемент масиву

  Виведіть у консоль останній елемент масиву. 
  Код має працювати для масиву довільної довжини.

  Вставте 'Contry' та 'Reggie' на початок масиву

  Подивиттсь методи push unshift shift splice
*/

// const genres = ["Jazz", "Blues"];

// genres[2] = "Rock&roll";

// genres.push("Rock&roll");

// console.log(genres[0]);

// console.log(genres);

// console.log(genres.length);

// console.log(genres[genres.length - 1]);

// genres.unshift("Contry", "Reggie");

// console.log(genres);

/*  
  Example 2 - Масиви та рядки

  Напиши скрипт для обчислення площі прямокутника зі сторонами, 
  значення яких зберігаються в змінній величин у вигляді рядка.
  Значення гарантовано розділені пробілом. 

  Метод split
*/

// const values = "8 11";

// const array = values.split(" ");

// const square = array[0] * array[1];

// console.log(square);

/*
  Example 3 - Перебір масиву

  Напиши скрипт для перебору масиву fruits циклом for.
  Для кожного елемента масиву виведіть у консоль рядок у 
  форматі номер_елемента: значення_елемента. 
  
  Нумерація елементів має починатися з першого.
*/

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let index = 0; index < fruits.length; index += 1) {
//   console.log(`${index + 1}: ${fruits[index]}`);
// }

/*
  Example 4 - Масиви та цикли

  Напиши скрипт, який виводить у консоль ім'я та телефонний 
  номер користувача. У змінних names і phones зберігаються 
  рядки імен та телефонних номерів, розділені комами. 
  
  Порядковий номер імен та телефонів у рядках вказують на 
  відповідність. Кількість імен та телефонів гарантовано однакова.

  Метод split
*/

// const names = "Jacob,William,Solomon,Kate";
// const phones = "38001234567,38001112233,380055566377,38099912233";

// const namesArray = names.split(",");

// const phonesArray = phones.split(",");

// console.log(namesArray);
// console.log(phonesArray);

// for (let index = 0; index < namesArray.length; index += 1) {
//   console.log(`${namesArray[index]} - ${phonesArray[index]}`);
// }

/*
  Example 5 - Масиви та рядки

  Напиши скрипт який виводить у консоль усі слова рядка крім першого 
  та останнього. Результуючий рядок не повинен починатися або закінчуватися 
  пробілом. Скрипт повинен працювати для будь-якого рядка.

  методи pop shift join
*/

// const stringEl = "Welcome to the future";

// const array = stringEl.split(" ");

// console.log(array);

// array.pop();

// array.shift();

// const newString = array.join(" ");

// console.log(newString);

// console.log(array);

/*
  Example 6 - Масиви та рядки
  Напиши скрипт, який «розвертає» рядок (зворотній порядок літер)
  і виводить його в консоль.

  Методи split reverse join
*/

// Variant with words
// const string = "Welcome to the future";

// const array = string.split(" ");

// console.log(array);

// array.reverse();

// const newString = array.join(" ");

// console.log(newString);

// Variant with letters

// const string = "Welcome to the future";

// let newString = "";

// for (let index = 0; index < string.length; index += 1) {
//   // 1 iteration - W, ""
//   // 2 iteration - e, "W"
//   // 3 iteration - l, "eW"
//   // final result - `lew`

//   newString = string[index] + newString;
// }

// console.log(newString);

// const stringEl = `dadasdasdas`;

// const newStringEl = string[0].toUpperCase() + stringEl.slice(1);

// console.log(newStringEl);

/*
  Example 7 - Пошук елемента

  Напиши скрипт пошуку найменшого числа у масиві. 
  Код має працювати для будь-якого масиву чисел. 
  Використовуй цикл for of для розв'язання задачі.
*/

// const numbers = [100, 120, 10, Infinity];

// let minNumber = Infinity;

// for (let el of numbers) {
//   // 1 iteration: minNumber - Infinity, el - 100
//   // 2 iteration: minNumber - 100, el -5
//   // 3 iteation: minNumber -5, el - 2

//   if (el < minNumber) {
//     minNumber = el;
//   }
// }

// console.log(minNumber);

// const array = [1, 2, 3, 4, 5, 6];

// console.log(array.slice(1, 3));

// const fruit = "cherry";

// // Проверяем наличие элемента
// const hasFruit = redFruits.includes(fruit);

// if (hasFruit) {
//   console.log(`${fruit} is a red fruit!`);
// }

// const clients = ["Mango", "Ajax", "Poly"];

// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }

// const array = [1, 2, 3, 4, 5];

// array.splice(3, 1, 6);

// console.log(array);

// const colors = ["red", `blue`, `green`];

// colors.splice(2, 1, "purple");

// console.log(colors);

// const array = [1, 2, 4];

// console.log(array[array.length - 1]);

// const array = [1, 2, 3, 4, 5];

// for (let el of array) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// }
