"use strict"
//Задачи из LMS
//1. Мінімум
//1.1. Виконай додавання 0,1 і 0,2 добийся математично правильної відповіді.
function rounding() {
    let a = 0.1;
    let b = 0.2;
    let c = a + b;
    alert( c.toFixed(1) );
}

//1.2. Виконай додавання рядка "1" і цифри 2 (обидві операнди повинні бути в змінних), добийся математично правильної відповіді.
function reference() {
    let a = '1';
    let b = 2;
    let c = +a + b;
    alert( c );
}

//1.3. Користувач вказує обсяг флешки в Гб. Програма повинна порахувати скільки файлів розміром в 820 Мб поміщається на флешку.
function division() {
    let flashDrive = 1000;
    let fileVolume = 820;
    let capacity = flashDrive / fileVolume;
    alert( capacity.toFixed(0) );
}

//2. Норма
//2.1. Користувач вводить суму грошей в гаманці і ціну однієї шоколадки.
// Програма виводить скільки шоколадок може купити користувач
// і скільки здачі у нього залишиться.

function buying() {
    let money = prompt('введите сумму в вашем кошельке');
    let price = prompt('введите стоимость одной шоколадки');
    let buy = (money / price).toFixed(0);
    const rest = Math.round((money - (price * buy)) * 100) / 100;
//как сделать так чтоб при минусовом значении выводились 0? а с копейками не было NAN
    alert('вы можете купить ' + buy + 'шт шоколада '+ 'и у вас останется сдачи в ' + rest + 'грн');
}

//2.3. Запитай у користувача тризначне число і виведи його задом наперед.
// Для вирішення завдання тобі знадобиться оператор% (залишок від ділення).
function backInFront() {
    let number = prompt('введите трехзначное число');
    let a = Math.trunc(number / 100);
    let b = Math.trunc(number % 100 / 10);
    alert(100 * (number % 10) + 10 * b + a);
}

//3. Максимум
//3.1. Користувач вводить суму вкладу в банк на 2 місяці, з процентною
// ставкою депозиту 5% річних. Вивести суму нарахованих відсотків.
function bank() {
    let contribution = 100000;
    let interestYear = 5;
    let daysYear = 365;
    let periodInterest =61;
    const moneyByDeposit = Math.round ((contribution / 100 * interestYear) / daysYear * periodInterest);
    alert(moneyByDeposit);
}

//3.2. Що повернуть вираження:
/*
2 && 0 && 3 //вернет 0 - потому что оператор && возвращает последнее значение из правдивых, или первое не правдивое.
2 || 0 || 3 //вернут 2 - потому что оператор || возвращает первое правдоподобное выражение или последнее неверное, если нет правдивых выражений.
2 && 0 || 3 //вернут 3 - потому что оператор || возвращает первое правдоподобное выражение или последнее неверное, если нет правдивых выражений.
*/
/*
 && должен оценивать все выражения. 2 && 3 сначала оценит "правду" 2, которая является истинным значением,
 но затем она также должна оценить 3. Затем возвращается последнее оцениваемое значение. Если хотя бы одно
 значение не является правдивым, тогда вместо него возвращается первое такое значение.
 ||, с другой стороны, возвращает первое правдоподобное выражение или последнее неверное, если нет правдивых выражений.
 Причина, по которой && возвращает последнее возможное значение, состоит в том, что ему просто нужно проверить все выражения,
 чтобы вернуть результат. || не должен этого делать. Если первое выражение для || истинно, оно игнорирует все остальные.
 Аналогично, если первое выражение для && ложно, оно игнорирует все остальные (см. Краткое замыкание в логических операциях).
 */




//Задачи из slack
/*
 Завдання з використанням IF
 1) Запитати у користувача число та визначити чи воно позитивне, негативне або нуль
 2) Запитати у користувача його вік та перевірити вірність вказаних даних (0-120 років)
 3) Запитати у користувача число та вивести його модуль (|7| = 7, |-7| = 7)
 4) Запитати у користувача час (години, хвилини, секунди) та перевірити коректність вказаних даних
 5) Запитати координати крапки (x, y) та визначити номер чверті, в яку потрапила крапка. Треба врахувати випадки, коли крапка втрапита на осі або в початок координат.
 Завдання з використанням SWITCH
 1) Запитати у користувача номер місяця та вивести його назву
 2) Реалізувати калькулятор. Користувач вказує 2 числа та знак (+ - * /).
 Завдання з використанням тернарного оператору
 1) Запитати 2 числа та вивести більше з них
 2) Запитати одне число та перевірити чи воно кратне 5 або ні
 3) Запитати у користувача назву планети. Якщо користувач вказав "Земля" або "земля", вивести "Привіт, землянин!", в інших випадках вивести "Привіт, іншопланетянин!"
 21:16
 1)Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
 2)Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
 3)Запросить у пользователя трехзначное и число и проверить, есть ли в нем одинаковые цифры.
 4)Запросить у пользователя год и проверить, високосный он или нет. Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
 5)Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
 6)Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR, UAN или AZN, и получает в ответ соответствующую сумму.
 7)Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
 8)Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность поместиться в указанный квадрат.
 9)Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
 Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц, год, а также високосный год.
*/