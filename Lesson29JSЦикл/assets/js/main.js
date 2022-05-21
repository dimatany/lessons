"use strict"
//Задачи из LMS

//1. Мінімум
//Задачи из LMS

//1. Мінімум
//1.1. Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
// дорослим (18-59) або пенсіонером (60 ...), передбач можливість введення невірних даних.
function age() {
    let userAge = parseInt(prompt('Введите свой возраст в формате числа!'));
    let message = (userAge <= 11) ? 'Вы ребенок' :
        (userAge <= 17 && userAge >= 12) ? 'Вы подросток' :
            (userAge >= 18 && userAge <= 59) ? 'Вы взрослый' :
                (userAge >= 60) ? 'Вы пенсионер' : 'Введите правильно данные';
    alert(message);
}

//1.2. Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
function removal() {
    let userNumber = parseInt(prompt('Введите любое число (включая) от 0 до 9!'));
    let massage;
    if (userNumber === 0) {
        massage = ')';
    } else if (userNumber === 1) {
        massage = '!';
    } else if (userNumber === 2) {
        massage = '@';
    } else if (userNumber === 3) {
        massage = '#';
    } else if (userNumber === 4) {
        massage = '$';
    } else if (userNumber === 5) {
        massage = '%';
    } else if (userNumber === 6) {
        massage = '^';
    } else if (userNumber === 7) {
        massage = '&';
    } else if (userNumber === 8) {
        massage = '*';
    } else if (userNumber === 9) {
        massage = '(';
    } else {
        massage = 'введите данные в соответствии с условием';
    }
    alert(massage);
}

//1.3. Підрахуй суму всіх чисел в заданому користувачем діапазоні.
function adding() {
    let num1 = parseInt(prompt('Введите любое число'));
    let num2 = parseInt(prompt('Введите любое второе число'));
    let rez = 0;
    while (num1 < num2) {
        num1++;
        if (num1 < num2) {
            rez = rez + num1;
        }
    }
    alert(rez);//как учесть условие если num1 >= num2 и вывести сообщение
}

//1.4. Запитай у користувача 2 числа і знайди найбільший спільний дільник.
function divider() {
    const num1 = parseInt(document.getElementById('task_1.4._number1').value);
    const num2 = parseInt(document.getElementById('task_1.4._number2').value);
    let rez = '';
    const minNum = num1 < num2 ? num1 : num2;
    let i = 1;
    while (i <= minNum / 2) {
        if (num1 % i === 0 && num2 % i === 0) {
            rez = rez + i + ', ';
        }
        i++;
    }
    if (minNum === num1) {
        if (num2 % num1 === 0) {
            rez = rez + num1;
        }
    } else {
        if (num1 % num2 === 0) {
            rez = (rez + num2);
            return rez;
        }
    }
    document.getElementById('task_1.4._result').innerText = rez;//как теперь пройтись по результатам и выбрать самое большое число ?
}


//1.5. Запитай у користувача число і виведи всі дільники цього числа.
function divider2() {
    let num1 = parseInt(document.getElementById('task_1.5._number1').value);
    let rez;
    let i = 1;
    for (i = 1; i <= num1; i++) {
        if (num1 % i ===0) {
            rez = rez + i + ', ';//как убрать NAN?
            document.getElementById('task_1.5._result').innerText = rez;
        }
    }
}


//2. Норма
//2.1. Запитай у користувача п’ятирозрядне число і визначи, чи є воно паліндромом.
function palindrome() {
    let num = parseInt(document.getElementById('task_2.1._number1').value);
    let reverse = 0;
    if (num < 0) {
        alert('Введите положительное число');
    } else if (num % 10 === 0) {
        alert('Это число делится на 10 - введи число которое не делится на 10');
    } else if (num < 10) {
        alert('Это одинарное число единичное не подходит для условия получения палиндрома');
    }
    while (num > reverse) {
        reverse = reverse * 10;
        reverse = reverse + num % 10;
        num = Math.trunc(num / 10)
    }
    if (num === reverse || num === Math.trunc(reverse / 10)) {
        alert('палиндром');
    } else  {
        alert('не палиндром')//почему нужно по два раза нажимать?
    }
}


//2.2. Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
// від 200 до 300 - знижка буде 3%;
// від 300 до 500 - 5%;
// від 500 і вище - 7%.

function discount() {
    let prise = parseInt(document.getElementById('task_2.2._number').value);
    let newPrise;
    let min = 3;
    let norm = 5;
    let max = 7;
    if (prise < 200) {
        alert ('Вам не положена скидка');
    } else if (prise >= 200 && prise <= 299.999) {
        newPrise = Math.round(prise / 100 * min);
        alert (`Ваша скидка 3% и ${newPrise} грн`);
    } else if (prise >= 300 && prise < 499.999 ) {
        newPrise = Math.round(prise / 100 * norm);
        alert (`Ваша скидка 5% и ${newPrise} грн`);
    } else if (prise >= 500) {
        newPrise = Math.round(prise / 100 * max);
        alert (`Ваша скидка 7% и ${newPrise} грн`);
    }
}


//2.3. Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх,
// від’ємних і нулів. При цьому також порахуй, скільки з них парних і непарних.
// Виведи статистику на екран. Враховуй, що достатньо однієї змінної (не 10)
// для введення чисел користувачем.
function checkTen() {
    let dodatni = 0,
        videmni = 0,
        nuli = 0,
        parni = 0,
        neparni = 0,
        result = '',
        allNumbers = '',
        number = 0,
        i = 0;
    const limit = 10;
    while (i < limit) {
        number = parseInt(prompt('Enter number'));
        if (!isNaN(number)) {
            allNumbers += number + ', ';
            if (number === 0) {
                nuli++;
            } else {
                if (number > 0) {
                    dodatni++;
                } else {
                    videmni++;
                }
            }
            if (number % 2 === 0) {
                parni++;
            } else {
                neparni++;
            }
            i++;
        }
    }
    result = `додатніх: ${dodatni}, від’ємних: ${videmni},  нулів: ${nuli},  парних: ${parni}, непарних: ${neparni}`;
    document.getElementById('task_2.3._result').innerHTML = allNumbers + '<br>' + result;
}

//2.4. Зацикли відображення днів тижня таким чином: «День тижня.
// Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.
function cycling () {
    let answer = true;
    while (answer) {
        answer = confirm('«Понедельник. Хочешь увидеть следующий день?')
    }
    alert('END');
}



//3. Максимум
//3.1. Гра «Вгадай число». Запропонуй користувачеві загадати число від 0 до 100
// і відгадай його наступним способом: кожну ітерацію циклу діли діапазон
// чисел навпіл, записуй результат в N і питай у користувача «Ваше число> N,
// <N або == N?». Залежно від того що вказав користувач, зменшуй діапазон.
// Початковий діапазон від 0 до 100, поділи навпіл і отримай 50.
// Якщо користувач вказав, що його число> 50, то зміни діапазон на від 50 до 100.
// І так до тих пір, поки користувач не вибере == N
// (буде корисним почитати про алгоритм: "бінарний пошук").


//3.2. Виведи таблицю множення для всіх чисел від 2 до 9.
// Кожне число необхідно помножити на числа від 1 до 10.

function table() {
    let r = 'div style="display:flex;flex-wrap;gap:30px;">';// ПОЧЕМУ НЕ ПОЛУЧАЕТСЯ С РАЗМЕТКОЙ?
    for (let i = 2; i <= 9; i++) {
        r += '<ul>';
        for (let j = 1; j <= 10; j++) {
            r += '<li>'+i+' * '+j+' = '+(i * j) + '</li>';
        }
        r += '</ul>';
    }
    r += '</div>';
    document.getElementById('multi_list').innerHTML = r;
}


//3.3. Запитай дату (день, місяць, рік) і виведи наступну за нею дату.
// Враховуй можливість переходу на наступний місяць, рік, а також високосний рік.


//Задачи из slack
// Задания, в которых необходимо использовать WHILE.

// 1) Вывести # столько раз, сколько указал пользователь.
function task1() {
    const num = parseInt(document.getElementById('task_1_number').value);
    let rez = '';
    let i = 0;
    while (i < num) {
        rez = rez + '#';
        i++;
    }
    document.getElementById('task_1_result').innerText = rez;
}

//2) Пользователь ввел число, а на экран вывелись все числа от введенного до 0.
function task2() {
    const num = parseInt(document.getElementById('task_2_number').value);
    let rez = '';
    let i = num;
    while (i >= 0) {
        rez = rez + i+ '';
        i--;
    }
    document.getElementById('task_2_result').innerText = rez;
}

//3) Запросить число и степень. Возвести число в указанную степень и вывести результат.
//4) Запросить 2 числа и найти все общие делители.
function task4() {
    const num1 = parseInt(document.getElementById('task_4_number1').value);
    const num2 = parseInt(document.getElementById('task_4_number2').value);
    let rez = '';
    const minNum = num1 < num2 ? num1 : num2; //пример тернарного оператора, делаем себе переменную и если num1 меньше чем num2 тогда в переменную minNum попадет num1, иначе num2.
    let i = 1;
    while (i <= minNum / 2) {
        if (num1 % i === 0 && num2 % i === 0) {
            rez = rez + i + ', ';
        }
        i++;
    }
    if (minNum === num1) {
        if (num2 % num1 === 0) {
            rez = rez + num1;
        }
    } else {
        if (num1 % num2 === 0) {
            rez = rez + num2;
        }
    }
    document.getElementById('task_4_result').innerText = rez;
}

