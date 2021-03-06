"use strict"
//Задачи из LMS

//1. Мінімум

// 1. Напиши всі можливі варіанти створення функцій.
/*function declaration() {
}
let expression = function() {
};
let sum = new Function('a', 'b', 'return a + b');
//alert(sum(1, 2));
let func = (a, b) =>a + b;
*/

// 2. Створи функцію, яка буде виводити кількість переданих їй аргументів.
let getNum = function () {
    return arguments.length;
};
function showArgs() {
   const num = getNum(1,3,4,5,6,1,1,1,1,1,1);
   document.getElementById('result1').innerHTML = num;
}


/* 3. Напиши функцію, яка приймає 2 числа і повертає :
    -1, якщо перше число менше, ніж друге;
    1 - якщо перше число більше, ніж друге;
    0 - якщо числа рівні.
*/
function getValue(a=0, b=0) {
    if (a < b) {
        return '-1';
    } else if (a > b) {
        return '1';
    } else if (a === b) {
        return '0';
    } else {
        return 'введите правильное, желательно числовое значение';
    }
}
function getTotal() {
    let num = parseInt(document.getElementById('task_3_number').value);
    let num2 = parseInt(document.getElementById('task_4_number').value);
    document.getElementById('task_3_result').innerHTML = getValue(num, num2);
}


// 4. Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n=1) {
    return n ? n * factorial(n - 1) : 1;
}
function calcFactorial () {
    let num=parseInt( document.getElementById('task_1.4._number').value);
    document.getElementById('task_1.4._result').innerText = factorial(num);
}


// 5. Напиши функцію, яка приймає три окремі цифри й перетворює їх в одне число.
// Наприклад: цифри 1, 4, 9 перетворяться в число 149.
function concatenate(a=0, b=0, c=0) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return'введите какое-то число';
    } else if (a < 0 || b < 0 || c < 0  ) {
        return'введите положительное число';
    }  else {
        return (a * 100) + (b * 10) + c;
    }
}

function getConcat() {
    let num1 = parseInt(document.getElementById('task_5_number').value);
    let num2 = parseInt(document.getElementById('task_6_number').value);
    let num3 = parseInt(document.getElementById('task_7_number').value);
    document.getElementById('task_5_result').innerHTML = concatenate(num1, num2, num3);
}




// 6. Напиши функцію, яка приймає довжину і ширину прямокутника й обчислює ого площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcSquare(a=0, b=0) {
    if (a <= 0 || isNaN(a)) {
        a = b;
    } else if (b <= 0 || isNaN(b) )  {
        b = a;
    }
    return (a * b);
}
function getSquare() {
    let num = parseInt(document.getElementById('task_8_number').value);
    let num2 = parseInt(document.getElementById('task_9_number').value);
    document.getElementById('task_6_result').innerHTML = calcSquare(num, num2);
}



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
