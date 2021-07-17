// Задание 2

//  Напиши скрипт проверки количества товаров на складе. Есть переменные total
//       (количество товаров на складе) и ordered (единиц товара в заказе). Сравни
//       эти значения и по результатам выведи: Если в заказе указано число,
//       превышающее количество товаров на складе, то выведи сообщение "На складе
//       недостаточно твоаров!". В другом случае выводи сообщение "Заказ оформлен,
//       с вами свяжется менеджер". Проверь работоспособность кода с разными
//       значениями переменной ordered, например 20, 80 и 130. const total = 100;
//       const ordered = 50;

//  Решение
console.log('Задание 2');
console.log(' ');
console.log(' При ordered = 20,  total = 100');

let total = 100;
let ordered = 20;

if (ordered > total) {
  console.log('На складе недостаточно твоаров!');
} else {
  console.log('Заказ оформлен, с вами свяжется менеджер');
}
// === END

// Второй вариант решения
{
  console.log(' ');
  console.log(' ');
  console.log(' При ordered = 80,  total = 100');
  let total = 100;
  let ordered = 80;
  let message = '';
  message =
    ordered > total
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  console.log(message);
}
// === END

// Подставляем разные значения
{
  console.log(' ');
  console.log(' ');
  console.log(' При ordered = 130,  total = 100');
  total = 100;
  ordered = 130;
  let message = '';
  message =
    ordered > total
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  console.log(message);
}

//
{
  console.log(' ');
  console.log(' ');
  console.log(' При ordered = 100,  total = 100');
  total = 100;
  ordered = 100;
  let message = '';
  message =
    ordered > total
      ? 'На складе недостаточно товаров!'
      : 'Заказ оформлен, с вами свяжется менеджер';

  console.log(message);
}

//
console.log(' ');
console.log(' ');
console.log(' При ordered = 20,  total = 50');
total = 50;
ordered = 20;
let message = '';
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);

//
console.log(' ');
console.log(' ');
console.log(' При ordered = 80,  total = 50');
total = 50;
ordered = 80;
message = '';
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);

//
console.log(' ');
console.log(' ');
console.log(' При ordered = 50,  total = 50');
total = 50;
ordered = 50;
message = '';
message =
  ordered > total
    ? 'На складе недостаточно товаров!'
    : 'Заказ оформлен, с вами свяжется менеджер';

console.log(message);
