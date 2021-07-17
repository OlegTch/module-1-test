// Задание БАНКОМАТ

// console.log('');
// console.log('Банкомат');
// let amount = 10000;
// let money = 2000;
// let userName = 'Oleg';
// let password = 1111;
// if ('Oleg' === userName && 1111 === password) {
//   console.log('Hello, Oleg');
//   if (amount >= money) {
//     console.log('Получите - распишитесь');
//     amount -= money;
//   } else {
//     console.log('Денег нет, но Вы держитесь');
//   }
//   console.log(`На счету осталось ${amount}`);
// } else {
//   console.log('Введены неправильные данные');
// }


// сделать в цикле снятие денег


// console.log('');
// console.log('Банкомат');
// console.log('');
// let amount = 10000;
// let money = 4000;
// let userName = 'Oleg';
// let password = 1111;
// if ('Oleg' === userName &&  1111 === password) {
//   console.log('Hello, Oleg');
//   // for (amount = 10000; amount > 0; amount -= money) 
//   if (amount >= money) {
//     console.log('Получите - распишитесь');
//     for (amount = 10000; amount >= money; amount -= money) {
//       console.log(`Выдано ${money}`);  
//       console.log(`На счету осталось ${amount-money}`);
//     }
//   } else {
//     console.log('Денег нет, но Вы держитесь');
//   }
//   console.log(`На счету осталось ${amount}`);
// } else {
//   console.log('Введены неправильные данные');
// }


//  Усложняем
console.log('');
console.log('Банкомат');
console.log('');
let amount = 10000;
let money = 0;
let userName = 'Oleg';
 let password = "1111";
let userNameImput = prompt('Enter name');
let userPassImput = prompt('Enter password');
if (null === userNameImput || null === userPassImput) { 
console.log("Отменено пользователем!"); }
 else if (userNameImput === userName && userPassImput  === password) 
{
   console.log('Hello, Oleg');
   money = Number(prompt('введите сумму для снятия:'));
   if (amount >= money) {
    console.log('Получите - распишитесь!');
    for (amount = 10000; amount >= money; amount -= money) {
      console.log(`Выдано ${money}`);  
      console.log(`На счету осталось ${amount-money}`);
    }
  } else {
    console.log('Денег нет, но Вы держитесь!');
  }
 } else {
  console.log('Введены неправильные данные!');
}

