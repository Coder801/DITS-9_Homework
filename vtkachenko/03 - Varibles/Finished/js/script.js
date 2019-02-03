console.clear();
// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!
console.log('Hello world');
// ## 1 Обьявление примитивных переменныx
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение

// * Your code Start *
let a = 'string';
let b = 5;//number
let c = true;// boolean
let d = undefined;//undefined
let e = null;//null
// * Your code End *


// ## 2 Математические операции
//
// Создайте три переменные (значения сторон треугольник) с типом Number с значениями 7, 8, 9
// * Найдите периметр треугольника
// * Найдите полупериметр треугольника
// * Найдите радиус вписанной окружности в треугольник
// * Найдите радиус вписанной окружности в прямоугольный треугольник
// Результат всех четырех вычислений присвойте переменным и выведете в консоль с помошью функции console.info() с названием расчета
// Пример вывода в консоли: Square = 18

// * Your code Start *
let sideA = 7;
let sideB = 8;
let sideC = 9;

var perimeter = sideA + sideB + sideC;
poluperimeter = perimeter /2;  
let radius = Math.sqrt((poluperimeter - sideA)*(poluperimeter - sideB)*(poluperimeter - sideC) / poluperimeter);

console.log('Perimeter ='+ perimeter);
console.log('Poluperimeter ='+poluperimeter);
console.log('Radius ='+radius);
// * Your code End *


// ## 3 Названия переменных
//
// Создайте 5 пустых переменных и придумайте им "корректные" названия которые соотвецтвовали б их описанию
// * Переменная для названия емейла пользователя
// * Переменная для текущей даты
// * Переменная для массива пользователей
// * Переменная для значения "по умолчанию"
// * Переменная которая описывала значение правой верхней границы условного html элемента

// * Your code Start *
let userEmail;
let currentDate;
let userList;
let defaultState;
let rightCorner;
// * Your code End *


// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

// * Your code Start *
let User = {
    name:'Vasya'
};
User.name = 'Petya';
console.log(User.name);
// * Your code End *


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки
console.info('6' - 3); // все дело в операции '-' если будет стоять плюс интерпритатор будет думать что это конкатенация , а мину он как в математике минус поэтому и 3
console.info('20' + 10); //конкатенация
console.info('10' + - 2); //конкатенация
console.info("4px" - 2); // реакция на вычитание из строки
console.info(15 / 0); //математика на 0 не делим
console.info(4 + 5 + "px");//2 numbera складываем  и  после конкатенация
console.info(+"");//слева оператор плюс приведение к  Number пустая строка ноль
console.info(NaN === NaN); //операторы == === тут не работают поэтому false
console.info(null == undefined);//так пишут в спецификации  если x = null,а y=undefined вернет true
console.log(false == 'false');//булевое значение не равно строке
console.log(' \t\r\n ' == 0); //исключение описанное по этой ссылке https://martin-thoma.com/javascript-wtf/ или как нас учили Ошибка )))
console.log(-1 == false);// 0  false
console.log(-1 == true);// отрицательные значения не могут быть true
