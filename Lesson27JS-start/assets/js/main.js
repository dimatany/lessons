//2.
let myName = 'Jane Dow';
let fullName = 'Margaret Thatcher';
let username = 'Eva Brown';
let famousName= 'Isadora Duncan';
//2. let 323342
//2. let #ersf
//2. let +43245
//2. let @3452
//2. ___name

//3. - однострочные, и многострочные - /* 3 */

//2.1. спросить имя у пользователя и вывести его с куском фразы - твоем имя ...
const yourName = prompt('Как тебя зовут?');
console.log(yourName);
if(yourName != null) {
    if(yourName !== '') {
        alert('твое имя: '+ yourName);
    }
}

//2.2. - спросить год рождения, вывести итоговый результат, год 2022 должен быть константой;
let birthYear = prompt('Какой год твоего рождения?');
const thisYear = 2022;
let result = (thisYear - birthYear);
alert('тебе исполнилось: '+ result);

//2.3. Спроси у пользователя длину стороны квадрата и выведи его периметр
let lengthSideSquare = prompt('Введи длину стороны квадрата!');
const perimeter = lengthSideSquare * 4;
alert('периметр квадрата равен: '+ perimeter);

//3.1. Спроси у пользователя радиус круга и выведи площадь такой окружности
let radius =  prompt('Назови любой произвольный радиус!');
const Pi = 3.14;
const square = radius * Pi;
alert('площадь окружности равна: '+ perimeter);

/*3.2. Спросить расстояние в км между населенным пунктом А и В.
       Спросить за сколько времени хочется преодолеть километраж между населенными пунктами.
       Просчитать итоговую скорость движения с учетом введенных данных.
 */
let distance = prompt('Назови расстояние в км между населенным пунктом А и В!');
let time = prompt('За сколько времени хочется преодолеть километраж между населенными пунктами А и В в минутах!');
let finalSpeed = (distance / time) * 60;
alert('скорость движения равна: '+ finalSpeed + 'км/ч' );


/*3.3. Реализовать конвертер валют
       Пользователь вводит баксы.
       Программа переводит баксы в евро.
       Курс сберегаем в константе.
 */

let dollar = prompt('Введи любую сумму в $!');
let course = 1.05;
const converter = dollar / course;
alert('ваша сумма в $: '+ converter + 'евро' );




//ЗАДАЧИ С УРОКА (пусть будет посмотреть)
// 1) Запросите у пользователя число, возведите это число во 2-ю степень и выведите на экран.

const num = parseInt(prompt('Enter integer number'));
const num2 = parseInt(prompt('Enter integer number 2'));
const rez = num * num2;//чтоб вычислить куб нужно просто сделать num ** num
//можно воспользоваться встроенным методом Math.pow const rez =Math.pow(num, num2)
alert('итог возведения в степень: ' + rez);


// 4) Реализуйте конвертор из километров в мили (пользователь вводит километры, программа выводит мили). 1 км = 0,621371 миль. Это значение укажите в коде как константу.
function km2ml() {
    const km = parseInt(prompt('Сколько км вас интересует?'));
    const K = 0.621371;
    const ml = km*K;
    alert(`в милях это: ${ml} мили`);
}
// 5) Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / между этими числами.
function calc() {
    const num = parseInt(prompt ('Скажите число 1'));
    const num2 = parseInt(prompt ('Скажите число 2'));
    const action = prompt ('Скажите действие');
    let  rez;
    if (action === '+') {
        rez = num + num2;
    } else if (action === '-') {
        rez = num - num2;
    } else if (action === '*') {
        rez = num * num2;
    }else if (action ==='/') {
        rez = num / num2;
    } else {
        alert('недопустимое действие');
    }
    if (rez !==  undefined) {
        alert(`Результат ${rez}`);
    }
}

// 6) Пользователь вводит значения a и b для формулы a * x + b = 0, а программа считает и выводит значение x.
function findX() {
    const a = parseInt(prompt('Укажите число 1'));
    const b = parseInt(prompt('Укажите число 2'));
    const x = b * (-1) / a;
    alert(`икс равняется: ${x}`);
}

// 7) Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня.

function timeToDayEnd() {
    const hour = +prompt('введите часы');
    const minutes = +prompt('введите минуты');
    const minutesTotalLeft = ( (24 * 60) - (hour * 60 + minutes)) / 60;
    const hoursLeft = parseInt(minutesTotalLeft / 60);
    const minutesLeft =  minutesTotalLeft - hoursLeft * 60;
    alert(`hours left: ${hoursLeft}, minutes left:  ${minutesLeft}`);
}

// 8) Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления).
function digit2() {
    const abc = +prompt('введите трехзначное число');
    const rez = parseInt((abc%100) / 10);
    alert(`Другая  цифра: ${rez}`);
    
}



