'use strict';

/*
  1. Контекст виклику this, визначення, призначення

  this в методах об'єкту

  this існує лише всередині функцій і є динамічним значенням
  На контекст не впливає де функція була об'явлена
  На контекст впливає де функція викликається
*/

const user1 = {
  name: 'Anna',
  age: 22,
  city: 'Kyiv',

  showThis() {
    console.log(this);
  },

  sayHi() {
    console.log(`Hi, ${this.name}!`);
  },

  sayFromWhere() {
    console.log(`${this.name} is from ${this.city}!`);
  },
};

// user1.showThis();

// user1.sayHi();

// user1.sayFromWhere();

const user2 = {
  name: 'Andrii',
  age: 30,
  city: 'Lviv',

  showThis: user1.showThis,

  // sayHi: user1.sayHi

  // sayFromWhere: user1.sayFromWhere
};

// user2.showThis();

/*
  2. Значення this залежно від місця звернення
  і режиму роботи скрипту (strict mode)

  Втратa контексту

  На контекст не впливає де функція була об'явлена
  На контекст впливає де функція викликається
*/

// this у глобальній області видимості

// function showThis() {
//   console.log(this);
// }

// const user = {
//   name: 'Anna',
//   showThis,
// };

// user.showThis();

// this в callback-функціях

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',

//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },

//   showThis(name, age) {
//     console.log(this);
//     console.log(name);
//     console.log(age);
//   },
// };

// console.log(user.getFullName());

// function HOF(callback, ...args) {
//   callback(...args);
// }

// HOF(user.showThis, 'Vitaliy', 50);

// function makeInvoice(callback) {
//   console.log(`Обробляємо заявку від ${callback()}.`);
// }

// makeInvoice(user.getFullName);

// this у стрілочних функціях, прив'язка до батькіської функції

// 1.
// const showThis = () => {
//   console.log(this);
// };

// showThis();

// const user = {
//   age: 50,
//   city: 'Dnipro',
//   showThis: () => {
//     console.log(this);
//   },
// };

// user.showThis();

// 2.

// const data = {
//   date: '12-03-2019',
//   extensions: ['.pdf', '.txt', '.html'],

//   showDate() {
//     console.log(this);

//     const arrowFunc = () => {
//       console.log(this.date);
//     };

//     arrowFunc();
//   },
// };

// data.showDate();

/*
  3. Методи функцій bind, call, apply
*/

// Метод call

// function getData() {
//   if (!('username' in this) && !('age' in this)) {
//     return;
//   }

//   console.log(`${this.username} is ${this.age} years old.`);
// }

// const userFirst = {
//   username: 'Max',
//   age: 29,
// };

// const userSecond = {
//   username: 'Anatoliy',
//   age: 33,
// };

// const auto = {
//   wheels: 4,
// };

// debugger;

// getData.call(userFirst);
// getData.call(userSecond);
// getData.call(auto);

// Метод apply

// function greetGuest(greeting) {
//   console.log(`${greeting}, ${this.username}.`);
// }

// const firstUser = {
//   username: 'Alina',
//   age: 30,
// };

// const secondUser = {
//   username: 'Vitaliy',
//   age: 35,
// };

// greetGuest.apply(secondUser, ['Hello']);

// Метод bind

// const fordAuto = {
//   make: 'Ford',
//   mark: 'Mondeo',
//   wheels: 4,

//   getInfo() {
//     console.log(`${this.make} ${this.mark} has ${this.wheels} wheels`);
//   },

//   props: {
//     showThis() {
//       console.log(this);
//     },
//   },
// };

// const bogdanAuto = {
//   make: 'Isuzu',
//   mark: 'Bogdan',
// };

// fordAuto.props.showThis();

// const getInfo = fordAuto.getInfo.bind(fordAuto).bind(bogdanAuto);

// getInfo();
// getInfo.call(bogdanAuto);
// getInfo();
// getInfo();

// console.log(getInfo === fordAuto.getInfo);

// getInfo();

/*
  4. Калькулятор
  
  Доповніть об'єкт calculator трьома методами:

  write(a, b) - приймає два значення та зберігає їх як властивості об'єкта
  getSum() - повертає суму збережених значень
  getMulti() - перемножує збережені значення та повертає результат
*/

// const calculator = {
//   a: 0,
//   b: 0,

//   write(a, b) {
//     this.a = a;
//     this.b = b;
//   },

//   getSum() {
//     return this.a + this.b;
//   },

//   getMulti() {
//     return this.a * this.b;
//   },
// };

// calculator.write(500, 700);

// console.log(calculator.getSum());
// console.log(calculator.getMulti());

// console.log(calculator);

/*
  5. Це ladder (драбина) – об'єкт, який дозволяє підніматись вгору
  та спускатись

  Напишіть методи об'єкта ladder:
  
  up - піднятись на сходинку вище
  down - опуститись на сходинку нижче
  showStep - показати сходинку
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;
//   },

//   down() {
//     this.step -= 1;
//   },

//   showStep() {
//     console.log(this.step);
//   },
// };

// ladder.up();
// ladder.up();
// ladder.up();
// ladder.up();
// ladder.down();

// ladder.showStep();

/* 
  Змініть код методів up, down та showStep таким чином, щоб 
  їх виклик можна було зробити по ланцюжку, наприклад так:

  ladder.up().up().down().showStep()
*/

// const ladder = {
//   step: 0,

//   up() {
//     this.step += 1;

//     return this;
//   },

//   down() {
//     this.step -= 1;

//     return this;
//   },

//   showStep() {
//     console.log(this.step);
//   },
// };

// ladder.up().up().up().down().showStep();

/*
  6. Напишіть метод calcTotalPrice(stoneName), який приймає назву
  каменю, розраховує та повертає загальну вартість каміння з таким
  ім'ям із властивості stones
*/

// const chopShop = {
//   stones: [
//     { name: 'Emerald', price: 1300, quantity: 4 },
//     { name: 'Diamond', price: 2700, quantity: 3 },
//     { name: 'Sapphire', price: 1400, quantity: 7 },
//     { name: 'Ruby', price: 800, quantity: 2 },
//   ],

//   calcTotalPrice(stoneName) {
//     const stoneObj = this.stones.find(
//       ({ name }) => name.toLowerCase() === stoneName.trim().toLowerCase()
//     );

//     if (!stoneObj) {
//       return `Каміння з назвою ${stoneName} не має!`;
//     }

//     const { price, quantity } = stoneObj;

//     return price * quantity;
//   },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('DiaMoNd')); // 8100
