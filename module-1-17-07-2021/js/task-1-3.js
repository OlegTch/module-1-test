// Задание 3

//   Напиши скрипт имитирующий авторизацию администратора в панели управления.
//       Есть переменная message в которую будет записано сообщение о результате.
//       При загрузке страницы у посетителя запрашивается пароль через prompt: Если
//       нажали Cancel, записать в message строку 'Отменено пользователем!' В
//       протовном случае, если введен пароль который совпадает со значением
//       константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!' В
//       противном случае, то есть если ни одно из предыдущих условий не
//       выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
//       После всех проверок вывести в alert значение переменной message. const
//       ADMIN_PASSWORD = 'adminpass'; let message;

//  Решение

// // Первый способ
// console.log('');
// console.log('Задание 3');
// console.log('');
// let message = '';
// let ADMIN_PASSWORD = '1111';
// let userImput = prompt('Enter password');
// // let userImput = Number(prompt('Enter password')); первый способ
// console.log(userImput);
// console.log(typeof userImput);
// if (null === userImput) {
//   message = 'Отменено пользователем!';
// } else if (userImput === ADMIN_PASSWORD) {
//   message = 'Добро пожаловать!';
// } else {
//   message = 'Доступ запрещен, неверный пароль!';
// }
// console.log(message);

//
// Второй способ
{
  console.log('');
  console.log('Задание 3');
  console.log('');
  let message = '';
  let ADMIN_PASSWORD = '1111';
  let userImput = prompt('Enter password');
  console.log(userImput);
  switch (userImput) {
    case null:
      message = 'Отменено пользователем!';
      break;
    case ADMIN_PASSWORD:
      message = 'Добро пожаловать!';
      break;
    default:
      message = 'Доступ запрещен, неверный пароль!';
  }
  console.log(message);
}
