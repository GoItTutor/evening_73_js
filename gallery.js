/*
  5. Метод document.createElement('tagname')

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const listEl = document.querySelector('.gallery');

// // console.log(listEl);

// const listItemEl = document.createElement('li');

// listItemEl.classList.add('gallery-item');

// // console.log(listItemEl);

// const listAnchorEl = document.createElement('a');

// listAnchorEl.href = '#';

// // console.log(listAnchorEl);

// listItemEl.append(listAnchorEl);

// const listImgEl = document.createElement('img');

// listImgEl.src = 'https://picsum.photos/id/237/200/300';
// listImgEl.alt = 'Labrador';

// listAnchorEl.append(listImgEl);

// console.log(listItemEl);

// listEl.append(listItemEl);

/* 
  6. Властивості innerHtml і textContent

  Створити картку галереї і вставити у елемент з класом gallery:

  <li class="gallery-item">
    <h1>Some text</h1>
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

// const listEl = document.querySelector('.gallery');

// listEl.innerHTML = `
//   <li class="gallery-item">
//     <h1>Some text</h1>
//       <a href="#">
//         <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
//       </a>
//   </li>`;

// listEl.textContent = `<h1>3433</h1>`;

/*
  7. Створити галерею і вставиити у елемент з класом gallery через
  метод elem.insertAdjacementHTML :)

  Розмітка картки:

  <li class="gallery-item">
    <a href="#">
      <img src="https://picsum.photos/id/237/200/300" alt="Labrador">
    </a>
  </li>
*/

const pictures = [
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/0/700/460',
    alt: 'laptop',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1/700/460',
    alt: 'developer',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/10/700/460',
    alt: 'forest',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/100/700/460',
    alt: 'beach',
  },
  {
    width: 700,
    height: 460,
    url: 'https://picsum.photos/id/1000/700/460',
    alt: 'mountain',
  },
];

// Написати функцію яка створить розмітку картки
const makeGalleryCard = ({
  width,
  height,
  url,
  alt,
}) => `<li class="gallery-item">
    <a href="#">
      <img src="${url}" alt="${alt}" height="${height}" width="${width}">
    </a>
  </li>`;

// Cтворити масив із розмітки і вставити у список .gallery
const listEl = document.querySelector('.gallery');

const markup = pictures.map((data) => makeGalleryCard(data)).join('');

// listEl.innerHTML = markup;

listEl.insertAdjacentHTML('afterbegin', markup);
console.log(markup);
