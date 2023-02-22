/*
  1. Об'єкти window та document

  Cучасні методи пошуку елементів (querySelector, querySelectorAll)

  Поняття вузлів та їх типи

  Представлення документу як дерева об'єктів
  
  Навігація по DOM дереву (children, etc.)
*/

// const element = document.querySelectorAll('*');

// console.log(element);

// const paragraphEl = document.querySelector('.description');

// console.log(paragraphEl.nextElementSibling.children);

/* 
  2. Доступ до атрибутів у елемента

  elem.attributes
  elem.hasAttribute(name)
  elem.getAttribute(name)
  elem.setAttribute(name, value)
  elem.removeAttribute(name)

  доступ до атрибуту через .

  show on img with class some-img
*/

// const imgEl = document.querySelector('.some-img');

// imgEl.setAttribute('src', 'https://picsum.photos/id/239/200/300');

// console.log(imgEl.getAttribute('alfsdfdst'));

// imgEl.removeAttribute('src');

// imgEl.src = 'https://picsum.photos/id/239/200/300';

/*
  3. Об'єкт style, властивість cssText

  show on heading with class main-title
*/

// const titleEl = document.querySelector('#title');

// console.log(titleEl);

// titleEl.style.color = 'green';
// titleEl.style.backgroundColor = 'tomato';
// titleEl.style.fontSize = '60px';

// titleEl.style.cssText =
//   'color: green; background-color: tomato; font-size: 60px';

/*
  4. Об'єкт classList та його методи (add, remove, toggle, contains)

  take dissapear and red classes from main.css
*/

// const imgEl = document.querySelector('.some-img');

// imgEl.classList.add('dissapear');
// imgEl.classList.remove('dissapear');

// imgEl.classList.toggle('dissapear');

// console.log(imgEl.classList.contains('some-img'));

// imgEl.classList.replace('some-img', 'red');
