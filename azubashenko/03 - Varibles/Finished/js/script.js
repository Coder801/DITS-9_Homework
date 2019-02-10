console.clear();

// ## 0 Подключение файла script.js
//
// * Подключите этот файл в index.js
// * Что бы проверить подключен ли файл выведете в консоль фразу Hello world!

console.log('Hello world!');


// ## 1 Обьявление примитивных переменныx
//
// * Обьявите 5 примитивных типов переменных, которые доступны в Javascript.

// * Присвойте им значения на свое усмотрение

// * Your code Start *

var num = 5;
var str = 'hello';
var x = undefined;
var number = null;
var boolean = true/false;

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
var a = 7;
var b = 8;
var c = 9;
var perimeter = getPerimeterTriangle(7, 8, 9);



function getPerimeterTriangle(a, b, c) {
    return a + b + c;
}
getPerimeterTriangle(a, b, c);
console.info(getPerimeterTriangle(a, b, c));

function getPerimeterPart() {
    return perimeter / 2;
}
getPerimeterPart(a, b, c);
console.log(getPerimeterPart(a, b, c));

function getCircleSquareTriangle() {
    return ((b / 2) * Math.sqrt((2 * a - b) / (2 * a + b)));
}
getCircleSquareTriangle();
console.log(getCircleSquareTriangle());

function getCircleTriangle() {
    return Math.sqrt((perimeter - a) * (perimeter - b) / perimeter);
}
getCircleTriangle();
console.log(getCircleTriangle());
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
var userEmail = 'gmail';
var currentDate = '21.12.2015';
var arr = ['Gudvin', 'Alex', 'Masya'];
var defaulten = '';
var rightTopElement = '';



// * Your code End *


// ## 4 Работа с обьектами
//
// * Создайте обьект ""Пользователь" (С корректным названием) с ключем и значением "Вася"
// * Измените значение ключа на "Петя"
// * Выведите в консоли значение ключа обьекта из файла index.html

// * Your code Start *
var obj = {
    user: 'Vasya'
};
obj.user = 'Petya';
console.log(obj.user);


// * Your code End *


// ## 5 Преобразование типов
//
// Обьясните почему консоль выводит такой результат. Ответ запишите в комментарии напротив строки

console.info('6' - 3); //есть минут, поэтому строка становится числом
console.info('20' + 10); //строки склеиваются, 10 становится строкой
console.info('10' + - 2); // 2- число, 10- строка, не могут дать результат числа или строки
console.info("4px" - 2); //
console.info(15 / 0); //при делении на 0
console.info(4 + 5 + "px"); //
console.info(+""); // пустая строка, выводит ноль
console.info(NaN === NaN); // строгое стравнение
console.info(null == undefined); //Значения null и undefined равны == друг другу и не равны чему бы то ни было ещё. Это жёсткое правило буквально прописано в спецификации языка.
console.log(false == 'false'); //сравнение со строкой
console.log(' \t\r\n ' == 0); //особенность, ссылка на отличную табличку (спасибо Славе))https://martin-thoma.com/javascript-wtf/
console.log(-1 == false); // -1 не равно 0, поэтому false
console.log(-1 == true); //-1 не равно 1, false

