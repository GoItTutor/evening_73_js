'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

// const handleDocumentScroll = () => {
//   console.log(window.pageYOffset);

//   if (window.pageYOffset > 150) {
//     const sectionEl = document.querySelector('.animated-section');

//     sectionEl.classList.add('active');
//     document.removeEventListener('scroll', throttledHandlerFunction);
//   }
// };

// const throttledHandlerFunction = _.throttle(handleDocumentScroll, 700);

// document.addEventListener('scroll', throttledHandlerFunction);

// const buttonEl = document.querySelector('button');

// const debouncedFunc = _.debounce(
//   () => {
//     console.log(`Hello!`);
//   },
//   600,
//   { leading: true, trailing: false }
// );

// buttonEl.addEventListener('click', debouncedFunc);

//  function getRandomHexColor() {
//    return `#${Math.floor(Math.random() * 16777215)
//      .toString(16)
//      .padStart(6, 0)}`;
//  }

// const obj1 = {
//   a: {},
// };

// const obj2 = _.cloneDeep(obj1);

// console.log(obj1.a === obj2.a);
