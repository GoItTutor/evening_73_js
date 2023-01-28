// Колекція об'єктів для всіх прикладів з автомобілями

const cars = [
  {
    make: 'Honda',
    model: 'CR-V',
    type: 'suv',
    amount: 14,
    price: 24045,
    onSale: true,
  },
  {
    make: 'Honda',
    model: 'Accord',
    type: 'sedan',
    amount: 2,
    price: 22455,
    onSale: true,
  },
  {
    make: 'Mazda',
    model: 'Mazda 6',
    type: 'sedan',
    amount: 8,
    price: 24195,
    onSale: false,
  },
  {
    make: 'Mazda',
    model: 'CX-9',
    type: 'suv',
    amount: 7,
    price: 31520,
    onSale: true,
  },
  {
    make: 'Toyota',
    model: '4Runner',
    type: 'suv',
    amount: 19,
    price: 34210,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Sequoia',
    type: 'suv',
    amount: 16,
    price: 45560,
    onSale: false,
  },
  {
    make: 'Toyota',
    model: 'Tacoma',
    type: 'truck',
    amount: 4,
    price: 24320,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'F-150',
    type: 'truck',
    amount: 11,
    price: 27110,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Fusion',
    type: 'sedan',
    amount: 13,
    price: 22120,
    onSale: true,
  },
  {
    make: 'Ford',
    model: 'Explorer',
    type: 'suv',
    amount: 6,
    price: 31660,
    onSale: false,
  },
];

/*
  1. Метод map

  Нехай функція getModels повертає масив моделей (поле model) всіх автомобілів
*/

// const getModels = (arr) => {};

// console.log(cars);
// console.log(getModels(cars));

/*
  2. Метод map

  Нехай функція makeCarsWithDiscount повертає новий масив об'єктів із змінeнним 
  значенням властивості price залежно від переданої знижки
*/

// const makeCarsWithDiscount = (cars, discount) => {};

// console.table(cars);
// console.table(makeCarsWithDiscount(cars, 2000));

/*
  3. Метод filter
  
  Нехай функція filterByPrice повертає масив автомобілів ціна яких менша за 
  значення параметра threshold
*/

// const filterByPrice = (cars, threshold) => {};

// console.table(cars);
// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 25000));

/*
  4. Метод filter

  Нехай функція getCarsOnSale повертає масив автомобілів властивість onSale яких true
*/

// const getCarsOnSale = (cars) => {};

// console.table(cars);
// console.table(getCarsOnSale(cars));

/*
  5. Метод filter

  Нехай функція getCarsWithType повертає масив автомобілів, тип яких збігається 
  зі значенням параметра type
*/

// const getCarsWithType = (cars, type) => {};

// console.table(cars);
// console.table(getCarsWithType(cars, 'suv'));
// console.table(getCarsWithType(cars, 'sedan'));

/*
  6. Метод find

  Нехай функція getCarByModel повертає об'єкт автомобіля властивість model
  якого та параметр model однакові
*/

// const getCarByModel = (cars, model) => {};

// console.log(getCarByModel(cars, 'F-150'));
// console.log(getCarByModel(cars, 'CX-9'));

/*
  7. Метод sort
  
  Нехай функція sortByAscendingAmount повертає НОВИЙ масив автомобілів відсортований 
  за збільшенням значення властивості amount
*/

// const sortByAscendingAmount = (cars) => {};

// console.table(cars);
// console.table(sortByAscendingAmount(cars));

/*
  8. Метод sort

  Нехай функція sortByDescendingPrice повертає НОВИЙ масив автомобілів, відсортований 
  за зменшенням значення властивості price
*/

// const sortByDescendingPrice = cars => {};

// console.table(cars);
// console.table(sortByDescendingPrice(cars));

/*
  9. Метод sort

  Нехай функція sortByModel повертає НОВИЙ масив автомобілів відсортований за назвою 
  моделі в алфавітному або зворотньому алфавітному порядку, залежно від значення параметра order

  - localeCompare
*/

// const sortByModel = (cars, order) => {};

// console.table(cars);
// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

/*
  10. Метод reduce

  Нехай функція getTotalAmount повертає загальну кількість автомобілів (значення властивостей amount)
*/

// const getTotalAmount = (cars) => {};

// console.log(getTotalAmount(cars));

/*
  11. Ланцюжки методів
  
  Нехай функція getAvailableCarNames повертає масив моделей автомобілів, але тільки тих, що зараз на розпродажі.
*/

// const getAvailableCarNames = (cars) => {};

// console.log(getAvailableCarNames(cars));

/*
  12. Ланцюжки методів
  
  Нехай функція getSortedCarsOnSale повертає назви моделей які знаходяться на продажі і мають тип кузова,
  який ми передаємо у функцію, відсортованих в алфавітному порядку
*/

// const getSortedCarsOnSale = (cars, type) => {};

// console.table(cars);
// console.log(getSortedCarsOnSale(cars, 'sedan'));
