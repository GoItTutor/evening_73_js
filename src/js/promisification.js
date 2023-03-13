'use strict';
// https://api.github.com/users/GoItTutor

// function myAsyncFunction(url) {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', url);
//     xhr.send();

//     xhr.addEventListener('load', () => {
//       resolve(xhr.responseText);
//     });

//     xhr.addEventListener('error', () => {
//       reject(xhr.statusText);
//     });
//   });
// }

// myAsyncFunction('https://api.github.com/users/GoItTutor')
//   .then(data => {
//     console.log(JSON.parse(data));
//   })
//   .catch(console.log);

//? Запит за користувачем на колбэках
// const fetchUserByName = (name, onSuccess, onError) => {
//   console.log('Робимо запит на сервер...');

//   setTimeout(() => {
//     const isDone = Math.random();

//     if (isDone < 0.5) {
//       const user = {
//         firstName: name,
//         lastName: 'Francis',
//         age: 30,
//       };

//       onSuccess(user);
//     } else {
//       onError("Користувача з таким ім'ям не знайдено");
//     }
//   }, 2000);
// };

// const handleSuccessFetch = data => {
//   console.log(data);
// };

// const handleErrorFetch = err => {
//   console.error(err);
// };

// fetchUserByName('Ida', handleSuccessFetch, handleErrorFetch);

//? Запит за користувачем на промісах
