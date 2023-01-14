/*
  1. Приклади з областями видимості
*/

// -------------------------------//
// let a = 10

// if (true) {

//     const a = 5;
// }

// console.log('in global', a);

// ------------------------------//
// const a = 10;

// if(true){
//     let a = 5;
//     a = 15;
//     console.log('in local',a);
// }
// console.log('in global',a);

// ------------------------------//
// let a = 10;

// if (true) {
//     // let a = 100;
//     a = 1
//     if (true) {
//         // let a = 25;
//         a = 15;

//     }

// }

// console.log('global', a);

// ------------------------------//

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// let total = 0;

// for (const number of numbers) {

//     total += number;
//     console.log(total);

// }
// console.log(total);

/*
  2. Створення та види функцій
*/

// function declaretion

// function expression
// викликається тільки після оголошення

/*
  3. Псевдомасив arguments

  Написати функцію getSum, яка повертає суму переданих у неї
  аргументів

  Використати цикл for для вирішення задачі
*/

/*
  4. Стек викликів

  Розібрати роботу стеку викликів на прикладі функцій:
*/

// function foo() {
//     console.log('start foo');
//     console.log('end foo');
// }

// function boo(){
//     console.log('start boo');
//     foo()
//     console.log('end boo');
// }

// boo()

/*
  5. Практичне завдання

  Напишіть функції для роботи з колекцією навчальних курсів courses:
  
  addCourse(name) - додає курс в кінець колекції, якщо раніше він не 
  був доданий

  removeCourse(name) - видаляє курс з колекції

  updateCourse(oldName, newName) - замінює назву курсу на нову
*/
