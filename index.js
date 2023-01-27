/*
  1. Операція spread як заміна concat і slice
*/

//*  Копія масиву

// const array = [1, 2, 3, 4, 5];

// const newArray = array.concat()

// const newArray = [...array];

// console.log(newArray);

// console.log(newArray === array);

//* Об'єднання масивів через spread замість concat

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9];

// const allElements = array1.concat(array2);

// const allElementsArr = [...array1, ...array2];

// console.log(allElementsArr);

/*
  2. Копія об'єкту

  - Перезапис однакових ключів при копіюванні
*/

// const user = {
//   firstName: 'Andrii',
//   lastName: 'Shevchuk',
//   age: 30,
// };

// const user2 = { ...user, hobbies: [] };

// console.log(user2);
// console.log(user === user2);

/*
  3. Spread + Rest

  Напишіть функцію getMinNumber яка приймає довільну кількість чисел
  та повертає найменше із них
*/

// function getMinNumber(...args) {
//   // console.log(arguments);
//   // console.log(args);

//   return Math.min(...args);
// }

// const minNumber = getMinNumber(1, 300, 5);

// console.log(minNumber);

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

// const {
//   firstName,
//   age: userAge,
//   isAdmin: isPremium = false,
//   lastName,
//   ...features
// } = user;

// console.log(firstName, userAge, isPremium);

// console.log(features);

// const data = {
//   username: 'Olya',
//   'hobbies-array': [],
// };

// const { hobbies_array: hobbiesArray, 'hobbies-array': hobbies } = data;

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

// const {
//   langs: { original, secondary },
//   flag,
//   employees,
//   number,
// } = team;

// console.log(number, flag, employees, original, secondary);

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

// const [first, , third, ...others] = names;

// console.log(first);
// console.log(third);
// console.log(others);

/*
  Дістати значення кольорів та властивість alpha
*/

// const rgb = [0, 255, 34, 0.5];

// const [red, green, blue, alpha = 1] = rgb;

// console.log(red);
// console.log(green);
// console.log(blue);

// console.log(alpha);

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

// function topSalary(salaries) {
//   const entries = Object.entries(salaries);

//   // console.log(entries);

//   if (entries.length === 0) {
//     return null;
//   }

//   let topPaidEmployee = '';
//   let topSalary = 0;

//   // Normal case
//   // for (let entry of entries) {
//   //   if (topSalary < entry[1]) {
//   //     topSalary = entry[1];
//   //     topPaidEmployee = entry[0];
//   //   }
//   // }

//   for (let [name, salary] of entries) {
//     if (topSalary < salary) {
//       topSalary = salary;
//       topPaidEmployee = name;
//     }
//   }

//   return topPaidEmployee;
// }

// console.log(topSalary(salaries));

/*
  7. Паттерн 'об'єкт параметрів', яку проблему вирішує

  Перепишіть функцію sayHi, щоб вона відповідала заданому паттерну
*/

// function sayHi(name, age, height, weight) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// function sayHi(props) {
//   const { name, age, height, weight } = props;

//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// function sayHi({ name, age, height, weight }) {
//   console.log(
//     `Hi, ${name}! Your age is ${age}, your heigth is ${height}, your weight is ${weight}`
//   );
// }

// const props = {
//   name: 'Olya',
//   weight: 55,
//   age: 55,
//   height: 160,
// };

// sayHi(props);

// const arr = [1, 2, 3];

// const obj = {
//   length: 0,
//   0: 12,
// };

// console.log(arr);
// console.log(obj);

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getAllPropValues(propName) {
//   let allPropValues = [];
//   for (const product of products) {

//     if (propName in product)
//     allPropValues.push(product[propName]);
//     return allPropValues;
//   }
//   //зробив із перевіркою, щоб отримати пустий масив, бо не міг отримати його в попередньому варіанті, в той же час не розумію чому?
//   for (const product of products) {
//     allPropValues.push(product[propName]);
//     if (!Object.keys(product).includes(propName)) {
//       return (allPropValues = []);
//     }
//   }
// }

// const salaries = {
//   Andrii: 3000,
//   Anna: 1200,
//   Sofiya: 2000,
// };

// function getResult(salaries) {
//   // 1 variant
//   // const arrayOfValues = Object.values(salariesObj);

//   // let total = 0;

//   // for (let salary of arrayOfValues) {
//   //   total += salary;
//   // }

//   // return total;

//   //2 variant

//   let total = 0;

//   for (let key in salariesObj) {
//     total += salariesObj[key];
//   }

//   return total;
// }

// const result = getResult(salaries);

// console.log(result);
