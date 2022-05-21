"use strict";
function task1() {
    let e = prompt("Enter your name");
    alert("Hello, ".concat(e, "!"))
}
function task2() {
    let e = 2022 - prompt("Enter your birth year");
    e < 0 ? alert("You are not born yet!") : 100 < e ? alert("Xa-xa! You are the same age as the dinosaur!") : alert("Your age is ".concat(e, "!"))
}
function task3() {
    let e = prompt("Enter square side");
    alert("Square perimetr is: ".concat(Math.pow(e, 2), "!"))
}
function task4() {
    let e = prompt("Enter circle radius"),
        r = parseInt(Math.PI * Math.pow(e, 2) * 100);
    alert("Circle square is: ".concat(r / 100, "!"))
}
function task5() {
    let e = prompt("Enter distance"),
        r = prompt("Enter travel time");
    alert("You need to move at a speed of ".concat(e / r, " kilometers per hour!"))
}
function task6() {
    let e = prompt("Enter the amount of dollars");
    alert("You will receive ".concat(.95 * e, " euros!"))
}



/*
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
*/


