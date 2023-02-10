/*
  1. Блогер

  Поняття клас та екземпляр, визначення, призначення

  Прототипне наслідування в інстансів класу

  Напиши клас Blogger для створення об'єкта блогера з 
  наступними властивостями:

  email - пошта, рядок
  age - вік, число
  numberOfPosts - кількість постів, число
  topics - масив тем, на яких спеціалізується блогер

  Клас очікує один параметр – об'єкт налаштувань з 
  однойменними властивостями.

  Додай метод getInfo(), який повертає рядок: 
  User ${пошта} is ${вік} years old and has ${у постів} posts

  Додай метод updatePostCount(value), який у параметрі value 
  приймає кількість постів, які потрібно додати користувачеві
*/

// class Blogger {
//   name = `YouTube blogger`;

//   constructor({ email, age, numberOfPosts, topics }) {
//     this.email = email;
//     this.age = age;
//     this.numberOfPosts = numberOfPosts;
//     this.topics = topics;
//   }

//   getInfo() {
//     return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts}`;
//   }

//   updatePostCount(value) {
//     this.numberOfPosts += value;
//   }
// }

// const obj = new Blogger();

// console.log(obj);

// const obj = {};

// console.log(obj);
// console.log(obj.toString());

// 1
// const mango = new Blogger({
//   email: 'mango@mail.com',
//   age: 24,
//   numberOfPosts: 20,
//   topics: ['tech', 'cooking'],
//   fsdfdsfdsfds: 553535,
// });

// console.log(mango);

// console.log(mango.getInfo());

// mango.updatePostCount(5);

// console.log(mango.getInfo());

// 2
// const poly = new Blogger({
//   email: 'poly@mail.com',
//   age: 19,
//   numberOfPosts: 17,
//   topics: ['sports', 'gaming', 'health'],
// });

// console.log(poly);

// console.log(poly.getInfo());

// poly.updatePostCount(4);

// console.log(poly.getInfo());

/*
  2. Сховище
 
  Напиши клас Storage, який створює об'єкти для управління складом товарів. При виклику отримуватиме один аргумент - початковий масив товарів, і записуватиме його у властивість items

  Додай методи класу:

  getItems() – повертає масив товарів

  addItem(item) - отримує новий товар та додає його до поточних
*/

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(item) {
//     this.items.push(item);
//   }
// }

// const coursesStorage = new Storage(['HTML', 'JS', 'CSS']);
// console.log(coursesStorage);

// console.table(coursesStorage.getItems());

// coursesStorage.addItem('🍌');
// console.log(coursesStorage.getItems());

/*
  3. User

  Приватні властивості
  
  Напиши клас User який створює об'єкт із властивостями login та email
  
  Оголоси приватні властивості #login та #email, доступ до яких зроби через геттер та сеттер login та email
*/

// class User {
//   #login;
//   #email;

//   constructor(props) {
//     const { login, email } = props;

//     this.#email = email;
//     this.#login = login;
//   }

//   get login() {
//     return this.#login;
//   }

//   set login(value) {
//     this.#login = value;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(value) {
//     this.#email = value;
//   }
// }

// const mango = new User({
//   login: 'Mango',
//   email: 'mango@dog.woof',
// });

// // mango.#email = 32311;

// console.log(mango);
// console.log(mango.login);

// mango.login = `dasdsadas`;

// console.log(mango);

/*
  4. Нотатки

  Статичні властивості

  Напиши клас Notes, який управляє колекцією нотаток у властивості items. Нотатка це об'єкт із властивостями text та priority. Додай класу статичну властивість Priority, у якій зберігатиметься об'єкт із пріоритетами.

  {
    LOW: 'low',
    NORMAL: 'normal',
    HIGH: 'high'
  }
  
  Додай метод addNote(note) для додавання нотатки
*/

// class Notes {
//   static Priority = {
//     LOW: 'low',
//     NORMAL: 'normal',
//     HIGH: 'high',
//   };

//   static number = 4242;

//   constructor(notes) {
//     this.items = notes;
//   }

//   addNote(note) {
//     this.items.push(note);
//   }

//   getNumber() {
//     console.log(Notes.number);
//   }
// }

// const myNotes = new Notes([]);

// myNotes.getNumber();

// console.log(Notes.Priority);
// console.log(Notes.number);

// myNotes.addNote({
//   text: 'Моя перша нотатка',
//   priority: Notes.Priority.LOW,
// });

// myNotes.addNote({
//   text: 'Моя друга нотатка',
//   priority: Notes.Priority.HIGH,
// });

// console.log(myNotes.items);

// console.dir(Array.from('вфвфвфі'));

// console.log([]);

/*
  5. Прототипне наслідування детальніше

  Метод Object.create

  Власні/невласні властивості, перебір циклом for in
  та метод hasOwnProperty
*/

// const obj1 = {
//   a: 1,
//   b: 2,
// };

// const obj2 = Object.create(obj1);

// obj2.c = 55;

// for (let key in obj2) {
//   if (obj2.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// console.log(Object.values(obj2));

// class User {
//   name = `dasdas`;

//   method = () => {
//     console.log(this.name);
//   };
// }

// const user = new User();

// user.method();

// class User1 {
//   username = 1313113;
// }

// class User2 extends User1 {
//   name = 31131;
// }

// const user = new User2();

// console.log(user);

// function User(name) {
//   this.name = name
// }
