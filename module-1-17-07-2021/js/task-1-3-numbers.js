// Задание Дополнительное
console.log('');
console.log('Задание Дополнительное');
console.log('Посчитать сумму введенных чисел');
console.log('');
let input = prompt('Введите число');
let total = 0;

for (let i = 0; input !== null; i += 1) {
  if (isNaN(input)) {
    console.log('Введено не число');
    input = prompt('Введите число');
  } else {
    total += Number(input);
    input = prompt('Введите число');
  }
}
console.log(`Общая сумма равна ${total}`);
