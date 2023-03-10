'use strict';

// import number, { add as addFunc, sub } from './math';

// import * as moduleFiles from './math';

// console.log(addFunc(2, 5));
// console.log(sub(2, 5));

// console.log(number);

// const user = {
//   firstName: 'Andrii',
//   age: 50,
//   showName() {
//     console.log(this.firstName);
//   },
//   name: null,
// };

// const userJSON = JSON.stringify(user);

// const userJS = JSON.parse(userJSON);

// console.log(userJSON);
// console.log(userJS);

// console.log(1);

// const welcomeString = '"Hi!"';

// let string = null;

// try {
//   string = JSON.parse(welcomeString);
// } catch (err) {
//   console.log(err);
// }

// console.log(2);

const user = {
  firstName: 'Andrii',
  age: 50,
};

localStorage.setItem('user', JSON.stringify(user));

console.log(JSON.parse(localStorage.getItem('user')));

console.log(localStorage.length);

localStorage.setItem('luckyNumber', JSON.stringify(618));

// localStorage.removeItem('user');

// localStorage.clear();
