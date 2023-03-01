'use strict';
/*
 * Поширення подій (занурення, таргетинг, спливання)
 */

const sectionEl = document.querySelector('.section');
const divEl = document.querySelector('.div');
const textEl = document.querySelector('.text');

sectionEl.addEventListener('click', event => {
  console.group('Listener on section(Bubbling phase)');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
  console.groupEnd();
});

sectionEl.addEventListener(
  'click',
  event => {
    console.group('Listener on section(Capturing phase)');
    console.log('Target', event.target);
    console.log('CurrentTarget', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

divEl.addEventListener('click', event => {
  console.group('Listener on div(Bubbling phase)');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
  console.groupEnd();
});

divEl.addEventListener(
  'click',
  event => {
    console.group('Listener on div(Capturing phase)');
    console.log('Target', event.target);
    console.log('CurrentTarget', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);

textEl.addEventListener('click', event => {
  console.group('Listener on p(Bubbling phase)');
  console.log('Target', event.target);
  console.log('CurrentTarget', event.currentTarget);
  console.groupEnd();
});

textEl.addEventListener(
  'click',
  event => {
    console.group('Listener on p(Capturing phase)');
    console.log('Target', event.target);
    console.log('CurrentTarget', event.currentTarget);
    console.groupEnd();
  },
  { capture: true }
);
