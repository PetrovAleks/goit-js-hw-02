let total = 0;
let input;

do {
  input = prompt('Введите любое число!');
  total += Number(input);
} while (input !== null);

alert(`Общая сумма чисел равна ${total}`);
