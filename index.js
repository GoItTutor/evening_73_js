/*
  1. Приклади з областями видимості
*/

// -------------------------------//

// let a = 10;

// if (true) {
//   // const a = 5;
//   // console.log(a);
// }

// {
//   const a = 50;
// }

// console.log("in global", a);

// ------------------------------//
// const a = 10;

// if (true) {
//   let a = 5;
//   a = 15;
//   console.log("in local", a);
// }

// console.log("in global", a);

// ------------------------------//
// let a = 10;

// if (true) {
//   // let a = 100;
//   a = 1;
//   if (true) {
//     let a = 25;
//     a = 15;
//   }
// }

// console.log("global", a);

// const a = 5;

// {
//   // const a = 10;

//   {
//     // const a = 15;

//   }
// }

// console.log(a);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {
//   total += number;
//   console.log(total);
// }

// console.log(total);

// const array = ["1", "2"];

// {
//   const array = ["вфвфі", "віфвфі"];

//   // console.log(array);

//   array[2] = `dadas`;
//   console.log(array);
// }

/*
  2. Створення та види функцій
*/

// function declaretion

// getSum(50);

// function getSum(number1 = 0, number2 = 0, number3 = 0) {
//   // console.log(number1);
//   // console.log(number2);
//   // console.log(number3);
//   // console.log(`sum is: ${number1 + number2 + number3}`);

//   console.log(1);

//   return number1 + number2 + number3;

//   console.log(2);
// }

// getSum(60);

// const sum1 = getSum(10, 20, 30);

// console.log(sum1);

// getSum(2, 7);
// getSum(50, 7);
// getSum(10);

// function expression
// викликається тільки після оголошення

// const getSum = function (number1 = 0, number2 = 0, number3 = 0) {
//   return number1 + number2 + number3;
// };

// getSum();

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

// function getSum() {
//   let sum = 0;

//   for (let number of arguments) {
//     sum += number;
//   }

//   return sum;
// }

// console.log(getSum(10, 144, 300, 500, 600, 200));

// const sum = getSum(10, 144, 300, 500, 600, 200);

// console.log(sum);

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//   console.log("start foo");
//   console.log("end foo");
// }

// function boo() {
//   console.log("start boo");
//   foo();
//   console.log("end boo");
// }

// boo();

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/

// const courses = ["python", "fullstack developer", "frontend developer"];

// function addCourse(name) {
//   if (!courses.includes(name)) {
//     courses.push(name);
//   }
// }

// function removeCourse(name) {
//   const courseIdx = courses.indexOf(name);

//   if (courseIdx === -1) {
//     return;
//   }

//   courses.splice(courseIdx, 1);
// }

// function updateCourse(oldName, newName) {
//   const courseIdx = courses.indexOf(oldName);

//   if (courseIdx === -1) {
//     return;
//   }

//   courses.splice(courseIdx, 1, newName);
// }

// console.log(courses);

// addCourse(`java`);
// addCourse(`html`);

// console.log(courses);

// removeCourse("frontend developer");

// removeCourse("frontend developer");

// console.log(courses);

// updateCourse("python", "qa");

// console.log(courses);

// function getExtremeElements(array) {
//   const result = [];
//   result.push(array[0], array[array.length - 1]);
//   return result;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// function getExtremeElements(array) {
//   const result = [];
//   return result.push(array[0], array[array.length - 1]);
// }

// // console.log(getExtremeElements([1, 2, 3, 4, 5]));

// const array = [1, 2];

// const length = array.push(3, 4);

// console.log(length);

// const numbers = [1, 2, 3, 4, 5];

// for (let number of numbers) {
//   console.log(number);
// }

// function sayHi(name) {
//   return `Hi, ${name}!`;
// }

// console.log(sayHi);
// console.log(sayHi("Andrii"));

// console.log(console.log(Math.random() * (10 - 1) + 1));

// function findLongestWord(string) {
//   let word = "";

//   const arrayWords = string.split(" ");

//   for (let phrase of arrayWords) {
//     if (phrase.length > word.length) {
//       word = phrase;
//     }
//   }

//   return word;
// }

// const longestWord = findLongestWord("Welcome to the future");

// console.log(longestWord);
