/*
  1. Деструктуризація

  Перепиши функцію так, щоб вона приймала один об'єкт параметрів
  замість набору незалежних аргументів
*/

// function calcBMI(weight, height) {
//   const numericWeight = Number(weight.replace(',', '.'));
//   const numericHeight = Number(height.replace(',', '.'));

//   return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// console.log(calcBMI('68,3', '1.65'));
// console.log(calcBMI('118,3', '1.95'));

/*
  2. Деструктуризація

  Перепиши функцію так, щоб вона приймала один об'єкт параметрів
  замість набору незалежних аргументів
*/

// function printContactsInfo(names, phones) {
//   const nameList = names.split(',');
//   const phoneList = phones.split(',');

//   for (let i = 0; i < nameList.length, i < phoneList.length; i += 1) {
//     console.log(`${nameList[i]}: ${phoneList[i]}`);
//   }
// }

/*
  3. Глибока деструктуризація

  Перепиши функцію так, щоб вона приймала один об'єкт параметрів
  замість набору незалежних аргументів
*/

// function getBotReport(companyName, repairBots, defenceBots) {
//   return `${companyName} has ${repairBots + defenceBots} bots in stock`;
// }

// Було так:
// console.log(getBotReport('Cyberdyne Systems', 150, 50))

// Має стати так:
// console.log(getBotReport({
//     companyName: 'Cyberdyne Systems',
//     bots: {
//         repairBots: 150,
//         defenceBots: 50,
//     }

/*
  4. Деструктуризація

  Напиши функцію щоб вона приймала об'єкт параметрів із властивостями 
  companyName і stock та виводила репорт про кількість товарів на 
  складі будь-якої компанії.
*/

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     }),
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     }),
// ); // "Belacci has 35 item in stock"

/* 
  5. Spread
  Доповни функцію createContact(partialContact) так, щоб вона повертала 
  новий об'єкт контакту з доданою властивістю id, а також list зі 
  значенням "default" якщо у partialContact немає такої властивості.
*/

// function createContact(partialContact) {
// }

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     }),
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     }),
// );

/*
  6. Rest
  Напиши функцію transformUsername(user) так, щоб вона повертала новий 
  об'єкт із властивістю fullName, замість firstName та lastName зі збережнням
  усіх інших полів
*/

// console.log(
//     transformUsername({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     }),
// );

// console.log(
//     transformUsername({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     }),
// );
