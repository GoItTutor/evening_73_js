/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія масиву

// const array = [1, 2, 3, 4, 5];

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];

/*
  2. Копія об'єкту

  - Перезапис однакових ключів при копіюванні
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
// };

/*
  3. Spread + Rest

  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

/*

/*
  4. Деструктуризація об'єктів, які проблеми вирішує

  Напишіть деструктуризуюче присвоювання, яке:

  властивість firstName присвоїть у змінну firstName

  властивість age присвоїть у змінну userAge

  властивість isAdmin присвоїть у змінну isAdmin (false, по дефолту
  якщо, у об'єкта данної властивості не буде)

  всі інші властивості зібрати у об'єкт features
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
//   eyeColor: 'green',
//   hobbies: [],
// };

/*
  5. Глубока деструктуризація об'єктів

  Потрібно дістати значення усіх властивостей, включно
  з вкладеними у об'єкт langs
*/

// const team = {
//   number: 4,
//   flag: './images/flag.jpg',
//   employees: ['Anton', 'Oleg', 'Ronnie', 'Carr'],
//   langs: {
//     original: 'uk',
//     secondary: 'en',
//   },
// };

/*
  6. Деструктуризація масивів
*/

/*
  Дістати перший та третій елементи масиву, всі інші після 
  третього занести в окремий масив
*/

// const names = [
//   'Herbert Todd',
//   'Belle Soto',
//   'Roger Marsh',
//   'Ethan Lindsey',
//   'Leo Dicaprio',
//   'Arnold Polo',
// ];

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34];

/*
  У нас є об'єкт salaries з зарплатами

  Створіть функцію topSalary(salaries), яка повертає ім'я найбільш
  високооплачуваного працівника

  Якщо об'єкт salaries пустий то повернути null

  Якщо декілька людей з одною тою самою зарплатою є найбільш високооплачуваними, 
  можна повернути будь-якого з них
 
  Використовуйте Object.entries та деструктуризацію, щоб перебрати пари ключ/значение.
*/

// const salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

/*
  7. Паттерн 'об'єкт параметрів', яку проблему вирішує

  Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
*/

// function sayHi(name, age, height, weight) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }
