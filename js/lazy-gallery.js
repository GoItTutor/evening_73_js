'use strict';

const galleryEl = document.querySelector('.gallery');
const bannerImgEl = document.querySelector('.banner__img');
const galleryImgEls = document.querySelectorAll('.gallery__img');

galleryEl.addEventListener('click', event => {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bannerUrl = event.target.dataset.bannerUrl;

  bannerImgEl.src = bannerUrl;
});

galleryImgEls.forEach(picture => {
  picture.addEventListener(
    'load',
    ({ target }) => {
      target.classList.add('appear');
    },
    { once: true }
  );
});

const addSrcAttrToImg = () => {
  const imageEls = document.querySelectorAll('img');

  imageEls.forEach(el => {
    el.src = el.dataset.src;
  });
};

const createLazySizesScript = () => {
  const script = document.createElement('script');

  script.src =
    'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';

  script.setAttribute(
    'integrity',
    'sha512-q583ppKrCRc7N5O0n2nzUiJ+suUv7Et1JGels4bXOaMFQcamPk9HjdUknZuuFjBNs7tsMuadge5k9RzdmO+1GQ=='
  );

  script.setAttribute('crossorigin', 'anonymous');

  script.setAttribute('referrerpolicy', 'no-referrer');

  return script;
};

if ('loading' in HTMLImageElement.prototype) {
  console.log('Аттрибут loading поддерживается');
  addSrcAttrToImg();
} else {
  console.log('Аттрибут loading не поддерживается');
  document.body.append(createLazySizesScript());
}
