console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!



// ## 1 Обьявление примитивных переменныx
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.
// * Присвойте им значения на свое усмотрение

// * Your code Start *


let a = 1;
let b = "Hello World";
let c = true;
let d = null;
let f = {name: "Alex"};


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


let a = 7;
let b = 8;
let c = 9;

let perimeter = a + b + c;

console.info('Perimeter' + ' = ' + perimeter);


let poluPerimeter = (perimeter/2);

console.info('PoluPerimeter' + ' = ' + poluPerimeter);


let radius = Math.sqrt((poluPerimeter - a)*(poluPerimeter - b)*(poluPerimeter - c) / poluPerimeter);

console.info('Radius' + ' = ' + radius);
 

 let rectangulRadius = (a + b - c)/2;

 console.info('RectangulRadius' + ' = ' + rectangulRadius);


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


let emailUser;
let toDate;
let arrUser;
let mainDefaut;
let rightUpBorder;


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

console.info('6' - 3);                        // "-" приводит строку в число
console.info('20' + 10);                      // "+" приводит число к строке
console.info('10' + - 2);                     // "+" имеет больший приоритет чем  "-" , приводит число к строке
console.info("4px" - 2);                      // оператор не может привести строку к числу, поэтому значение не определено
console.info(15 / 0);                         // фича js
console.info(4 + 5 + "px");                   // выполняется прибавление , а далее "+" приводит число к строке
console.info(+"");                            // унарный + приводит строку к числу
console.info(NaN === NaN);                    // невозможно сравнить два неопреденых значения
console.info(null == undefined);              // значения равны друг другу и не равны больше ничему
console.log(false == 'false');                // булевое значение не равно строке 
console.log(' \t\r\n ' == 0);                 // пустая строка == 0
console.log(-1 == false);                     //  -1 не равно 0
console.log(-1 == true);                      // -1 не равно 1