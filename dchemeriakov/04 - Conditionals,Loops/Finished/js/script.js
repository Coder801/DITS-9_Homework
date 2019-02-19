 console.clear();

// ## 0 Проверка диапазона
//
// Напишите код который б проверял длинну телефонного номера
// Номер запрашивается из prompt
// Сообшение выводится через alert
// Длинна номера не должна быть не меньше 9 и не больше 11

// * Your code Start *

let number = prompt('Enter telephone number (9 - 11 symbols)');
number.length < 9 || number.length > 11 ? 
alert('Your number is not valid') : 
alert('Length of number is ' + number.length);
  
// * Your code End *


// ## 1 Клонирование обьектов
//
// Склонируйте обьект objectA в objectB при помощи цикла
// Не забывайте что простое присвоение не клонирует обьект, вам нужно создать независимый клон

const objectA = {
  name: 'John',
  lastname: 'Dou',
  age: 50
}

const objectB = {};

// * Your code Start *

let copyObject = function(objectA,objectB){
  for(let item in objectA){
    objectB[item] = objectA[item];
  }
};
copyObject(objectA,objectB);
console.log(objectB);

// * Your code End *

// Переопределяем значения обьекта objectA
objectA.name = 'Chris';
objectA.name = 'Couer';
objectA.name = '45';

// Если обьект objectB склонирован, значения в нем меняться не будут
// Выводим значения склонированного обьекта для проверки
console.log(objectB.name); // John
console.log(objectB.lastname); // Dou
console.log(objectB.age); // 50


// ## 2 Ветвление
// При помощи конструкци switch/case выведете текущую дату
// Название месяца должно иметь вид строки
// Например = 14 Июня 2017

const date = new Date();
let day = date.getDate(); // Текущий день
let month = date.getMonth(); // Текущий месяц (от 0 до 11)
let year = date.getFullYear(); // Текущий год
let monthName = ''; // Переменная для значения месяца

// * Your code Start *

switch (month) {
  case 0:
  monthName = 'Января';
  break;
  case 1:
  monthName = 'Февраля';
  break;
  case 2:
  monthName = 'Марта';
  break;
  case 3:
  monthName = 'Апреля';
  break;
  case 4:
  monthName = 'Мая';
  break;
  case 5:
  monthName = 'Июня';
  break;
  case 6:
  monthName = 'Июля';
  break;
  case 7:
  monthName = 'Августа';
  break;
  case 8:
  monthName = 'Сентября';
  break;
  case 9:
  monthName = 'Октября';
  break;
  case 10:
  monthName = 'Ноября';
  break;
  case 11:
  monthName = 'Декабря';
}

// * Your code End *

console.log(`Today is: ${day} ${monthName} ${year}`) // Пример: 10 Февраля 2019



// ## 3 Взаимодействие с пользователем
//
// Запросите через prompt у пользователя его имя;
// Запрашивайте имя пользователя, пока одно из имен не будет совпадать с одним из массива users
// После того как пользователь введет имя которое есть в обьекте users, запросите у него пароль
// -- Если пароль введен не верно выведете alert об этом и вернитесь на повторый ввод имени
// -- Если пароль совпадает - вывести сообщение о том что пароль верный и прервите цикл

const users = [{
  name: 'Alex',
  password: 123
}, {
  name: 'Chris',
  password: 456
}, {
  name: 'Bill',
  password: 789
}];

// * Your code Start *

//I'll do it later.

// * Your code End *


// ## 4
// Создайте беспрерывный цикл который принимает от пользователя числа, и суммирует
// Цикл прирывается только в том случае если пользователь ввел что либо кроме числа
// После прерывания цикла выводится сумма введеных чисел

// * Your code Start *

var sum = 0;
while (true) {
  const sumArray = +prompt('Please enter number', 0);
  if (isNaN(sumArray)) break;
  sum += sumArray;
}
alert( 'Sum: ' + sum );

// * Your code End *

// ## 5
// Найдите сумму  1 + 2 + 3 + ... + N, где число N вводится пользователем из prompt
// Результат вывести в alert

const summetNumber = prompt('Please enter number', 0);

// * Your code Start *

function sumTo(summetNumber) {
  var sum = 0;
  for (var i = 1; i <= summetNumber; i++) {
    sum += i;
  }
  return sum;
}

alert( sumTo(summetNumber));

// * Your code End *


// ## 6
// Нарисовать шахматную доску используя вложенные циклы (Доска находится в файле html)
// Размер шахматной доски стандартны 8х8
// Функция drawFractions - вспомогательная, при ее вызове в к блоку board в html добаляется 1 квардрат доски
// Ее можно не трогать
// Например что бы нарисовать 1 квадрат нужно вызвать ее 1 раз: drawFraction();
// Так же доски должны иметь черный\белый цвет. Реализовать это можно при помощи как css так и js

const drawFraction = function(){
  const board = document.querySelector('.board');
  const fraction = document.createElement('div');
  board.appendChild(fraction);
}

const size = 8;

// * Your code Start *

//I need help with this task

// * Your code End *
