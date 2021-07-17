// Задание БАНКОМАТ

console.log('');
console.log('Банкомат');
let amount = 10000;
let money = 2000;
let userName = 'Oleg';
let password = 1111;
if ('Oleg' === userName && 1111 === password) {
  console.log('Hello, Oleg');
  if (amount >= money) {
    console.log('Получите - распишитесь');
    amount -= money;
  } else {
    console.log('Денег нет, но Вы держитесь');
  }
  console.log(`На счету осталось ${amount}`);
} else {
  console.log('Введены неправильные данные');
}
// сделать в цикле снятие денег
