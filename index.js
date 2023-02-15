'use strict';

// 1

// let counter = 0;

// function makeBigger() {
//   counter += 1;
// }

// makeBigger();
// makeBigger();
// makeBigger();
// makeBigger();

// {
//   let counter = 0;

//   makeBigger();

//   console.log(counter);
// }

// console.log(counter);

// 2

// const user = {
//   name: 'Andrii',
// };

// user.username = user.name;

// delete user.name;

// console.log(user);

// 3

// const user = {};

// user.name = 'Vitaliy';

// const key = 'age';

// user[key + `Value`] = 18;

// console.log(user);

// const HOF = (callback) => {
//   callback();
// };

// const consoleLog = () => {
//   console.log(`fddsfasdas`);
// };

// HOF(() => {
//   console.log(`fddsfasdas`);
// });

// [1, 2, 3, 4, 5].map((el, index, array) => {})

// const obj = { key: 'value' };

// const freezedObj = Object.freeze(obj);

// console.log(obj === freezedObj);

// obj.city = 'Lviv';

// console.log(obj);

// let sum = 0;

// let i = 1;

// function calculateSum() {
//   if (i === 11) {
//     return sum;
//   }

//   sum += i;

//   i += 1;

//   calculateSum();
// }

// debugger;

// calculateSum();

// console.log(sum);

// let a = false;

// let b = a;

// b = true;

// const a = { key: 'value' };

// const b = a;

// b.key = 'key';

// console.log(a.key);
// console.log(b.key);

// let myString = 'РеГіСтР';
// // myString = [2, 3, 4, "text", "РеГіСтР" ];

// const fccRegex = /регістР/i;

// let result = fccRegex.test(myString);

// console.log(result);

// function calc() {
//   let sum = 0;

//   return function () {
//     return ++sum;
//   };
// }

// const funcCalc = calc();

// console.log(funcCalc());
// console.log(funcCalc());
// console.log(funcCalc());

// const copyObj = (obj) => ({ ...obj });
// const copyObj = (obj) => Object.assign({}, obj);

// const user = { name: 'Olena', age: 25 };

// const copiedUser = copyObj(user);

// console.log(copiedUser === user);

// const age = 28;
// const name = 'Yuliya';

// ('Your age is age. Your name is name');

// // const string = 'Your ' + age + ' is age. Your name is ' + name;

// const string = `Your ${age} is age. Your name is ${name}`;

// console.log(string);

// const PASSWORD = 'ВЛІФВОФІЛДЛВО3289283298ВФДІЛВФІШ'

// const age = 20

// console.log(Boolean(0));
// console.log(Boolean(-0));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(false));

// console.log(Boolean(true));
// console.log(Boolean(-400));
// console.log(Boolean(' fsfsd '));

// console.log(-0 === 0);

// console.log(true + Number(``));

// console.log(true || false);

// const result = 5 > 7 ? Math.abs() : `Менше`

// console.log(result)

// for (let value of 'вфівфі') {
//   console.log(value);
// }

// for (let key in 44) {
//   console.log(key);
// }

// const a = 10;

// function foo() {
//   const b = 20;

//   for (let i = 0; i < 5; i++) {
//     const c = 30;

//     if (i === 3) {
//       const d = 40;

//       console.log(a);
//       console.log(b);
//       console.log(c);
//       console.log(d);
//     }
//   }
// }

// foo();

// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// const getUserWithEmail = (users, email) =>
//   users.find((user) => user.email === email);

// function func() {
//   var a = 5;
// }

// console.log(a);
