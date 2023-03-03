'use strict';

const randomColor = () =>
  '#' + (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();

const sectionElements = document.querySelectorAll('.section');

sectionElements.forEach(section => {
  section.style.backgroundColor = randomColor();
});

const handleDocumentScroll = () => {
  console.log(pageYOffset);

  if (pageYOffset >= 500) {
    const sectionEl = document.querySelector('.animated-section');

    sectionEl.classList.add('active');

    document.removeEventListener('scroll', handleDocumentScroll);
  }
};

const throttledFunction = _.throttle(handleDocumentScroll, 500);

document.addEventListener('scroll', throttledFunction);
