/*
  Виведіть у консоль загальну кількість яблук та винограду та їх різницю
*/

const apples = 47;

const grapes = 135;

const totalSum = apples + grapes;

// console.log(totalSum);

const difference = grapes - apples;

// console.log(difference);

/*
  Заміни вираз перевизначення комбінованим оператором +=
*/

let students = 100;

// students = students + 50;
students += 50;

// console.log(students);

/*
  Розбери пріоритет операторів в інструкції присвоєння
*/

const result = 108 + 223 - 2 * 5;

// console.log(result);

/*
  Напиши скрипт, який виводить у консоль заокруглені значення value

  Використовуй методи Math.round(), Math.floor(), Math.ceil()

  Перевірте, що буде в консолі при значеннях 27.3 та 27.9
*/

const value = 27.9;

const ceil = Math.ceil(value);
const floor = Math.floor(value);
const round = Math.round(value);

// console.log(ceil, floor, round);

/*
  Склади за допомогою шаблонних рядків речення: A has B bots in stock,
  де A та В - змінні вставлені в рядок
*/

const companyName = "Cyberdyne Systems";

const repairBots = 150;

const defenceBots = 50;

const sentence = `${companyName} has ${repairBots + defenceBots} in stock`;

const sentenceTwo =
  companyName + " has " + (repairBots + defenceBots) + " in stock";

// console.log(sentenceTwo);

/*
  Методи рядків та чейнінг

  Напиши скрипт, який розраховує індекс маси тіла людини

  Для цього потрібно розділити вагу в кілограмах на квадрат висоти у метрах

  Вага та висота зберігаються в змінних weight і height, але не як числа, а у вигляді рядків (спеціально для завдання)

  Нецілі числа можуть бути задані у вигляді 24.7 або 24,7 тобто як роздільник дробної частини числа може бути кома

  Індекс маси тіла необхідно округлити до однієї цифри після коми
  */

let weight = "88,3";
let height = "1.98";

const numericWeight = Number.parseFloat(weight.replace(",", "."));

const numericHeight = Number.parseFloat(height.replace(",", "."));

console.log(numericWeight);

console.log(numericHeight);

const bmi = numericWeight / numericHeight ** 2;

// console.log(Math.floor(bmi * 10) / 10);

console.log(Number(bmi.toFixed(1)));

// console.log(bmi)

// console.log(1 && 5); // true && true -> 5

// console.log(5 && 1); // true && true -> 1

// console.log(5 == "5");

// const productName = "Repair droid";

// console.log(productName.length);

// console.log(productName.slice(0, 3));

// "Repair droid"  Чому виводить не Repair droi?

// console.log("100\n\n\n60");
