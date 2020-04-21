/* eslint-disable no-restricted-globals */
let credits = 23580;
const pricePerDroid = 3000;
let message = prompt('Какое количество ремонтных дроидов вы купите?');

if (message === null) {
  message = 'Отменено пользователем!';
  console.log(message);
} else if (isNaN(message)) {
  alert('Вы ввели некорректные данные, попробуйте еще раз');
} else {
  message = Number(message);
}

const totalPrice = message * pricePerDroid;

if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else if (message >= 0) {
  credits -= totalPrice;
  alert(`Вы купили ${message} дроидов, на счету осталось ${credits} кредитов.`);
}
