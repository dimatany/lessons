"use strict"
//Задачи из LMS

//1. Мінімум

// 1. Напиши всі можливі варіанти створення функцій.
function declaration() {
}

let expression = function() {

};

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.

let getNum = function () {
    alert(arguments.length);
};
getNum(1,3,4,5,6,1,1,1,1,1,1);//11 штук


/* 3. Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге;
    1 - якщо перше число більше, ніж друге;
    0 - якщо числа рівні.
*/
let num = 4;
let num1 = 4;
function getValue(a, b) {
    if (a < b) {
        alert('-1');
    } else if (a > b) {
        alert('1');
    } else if (a === b) {
        alert('0');
    } else {
        alert('введите правильное, желательно числовое значение')
    }
}
getValue(num, num1);


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
    if (n <= 0) { //если мы попытаемся найти факториал 1,
        return 1; //возвращаем 1 это базовый случай.
    }
    //в остальных случаях возвращаем произведение n на факториал предыдущего числа,
    // таким образом мы от n дойдем до 1, перебрав каждое число.
    return n * factorial(n - 1)
}
document.getElementById('task_1.4._result').innerText = factorial(4);

// 5. Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
let number1 = 1;
let number2 = 4;
let number3 = 9;

function createString(a,b,c) {
    return ("" + a + b + c);
}
alert(createString(number1, number2, number3));


// 6. Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.

let widthFigure = 10;
let lengthFigure;

function calcSquare(a=0, b=0) {
    if (a <= 0) {
        a = b;
    } else if (b <= 0)  {
        b = a;
    }
    return (a * b);
}
alert(calcSquare(widthFigure, lengthFigure));//как встроить второе условие когда передан только один параметр?????


//2. Норма

// 2.1. Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”.
// Досконале число - це число, яке дорівнює сумі всіх своїх дільників.

function getAndCheck (inputId = '') {
    let number = document.getElementById(inputId).value;
    if (number!=='') {
        number = parseInt(number);
        if (!isNaN(number)) {
            return number;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function showResult(result, whereId) {
    document.getElementById(whereId).innerHTML = result;
}

function isNumberPerfect(n) {
    let sum = 0;
    for (let i = 1;  i < n; i++ ) {
        if (n%i===0) {
            sum += i;
        }
    }
    return sum === n;
}

function task1() {
      let num = 0,
          rez = '';
       if (getAndCheck('task_2.1._number')!==false) {
           num = getAndCheck('task_2.1._number');
       } else {
           return false;
       }
       if (isNumberPerfect(num)) {
           rez = `число ${num} э досконалим`;
       } else {
           rez = `число ${num} нэ э досконалим`;
       }
       showResult(rez,  'task_2.1._result');
}

// 2.2.  Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону,
// і виводить тільки ті числа з діапазону, які є досконалими.
// Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим.

