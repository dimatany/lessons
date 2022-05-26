'use strict'
//Задачи из LMS

//1. Мінімум
/*1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, ' +
'середня швидкість, обсяг паливного бака, середня витрата палива ' +
'на 100 км., водії), і наступні функції для роботи з цим об'єктом:
   1.2. Висновок на екран з інформацією про автомобіль.
   1.3. Додавання водія, який має право керувати автомобілем.
   1.4. Заправка автомобіля.
   1.5. Підрахунок необхідного часу для подолання переданої відстані
з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві
необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має
право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). '
'Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
'якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/

//1.2. Висновок на екран з інформацією про автомобіль.
const car = {
    company: 'Hyundai',
    model: 'Tucson',
    year: 2015,
    'average speed': 120,//средняя скорость
    volume: 60,//размер бака в литрах
    averageExpense: 10,//средний расход бензина км/ч
    Expense100: 8,//расход бензина км/ч
    driver:['Anna','Bill'],
    permission: function(person) {
        if (this.driver.indexOf(person) !== -1) {
            return 'вы имеете право пользовать авто'
        } else {
            return 'вы не имеете право пользовать авто'
        }
    }
};

console.log(car.permission('Bob'));
console.log(car.permission('Anna'));

//1.2. Висновок на екран з інформацією про автомобіль.
let carUl = '<ul>';
for(let key in car) {
    console.log(key + ':' + car[key]);
    if (typeof car[key]!=='function') {
        carUl += '<li>'+key+' : '+car[key]+'</li>'
    }
}
carUl += '</ul>';
function addInfo() {
    document.getElementById('task_1_result').innerHTML = carUl;
}

//1.3. Додавання водія, який має право керувати автомобілем.
document.querySelector('.a-y').addEventListener('click', () => {
    getDriverName(fixUserName);
})
function getDriverName() {
    let totalName = fixUserName(document.querySelector('.a-i').value);
    car.driver.push(totalName);
}
function fixUserName(str) {
    return str.trim().toLowerCase();
}

console.log(car);

//1.4. Заправка автомобіля.
let empty;
function volume(empty=0) {
    if (car.volume === empty) {
        return 'у вас полный бак'
    } else if (car.volume  === undefined || isNaN(empty)) {
        return 'введите какое-то число'
    } else if(empty<0) {
        return 'введите положительное число'
    }
    else {
        return `${(car.volume - empty)} литров долить до полного бака`;
    }
}
function getVolume() {
    let num = parseInt(document.getElementById('task_1_number').value);
    document.getElementById('task_3_result').innerHTML = volume(num);
}

/*
1.5. Підрахунок необхідного часу для подолання переданої відстані
з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві
необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має
право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). '
'Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
'якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/
//1 условие
function rezTotalTime ( distance=0, speed=0) {
    let timeDriving = (distance / speed);// расстояние делим на скорость - время на дорогу без учета условий
    let timeBrake = Math.trunc(timeDriving / 4);// время брейка
    let totalTime = Math.trunc(timeDriving + timeBrake);// всего часов на путь
    let timeMinutes = Math.trunc(((timeDriving + timeBrake) % totalTime) * 60);// минуты с округлением
    return totalTime + 'ч. ' + timeMinutes + 'м.';
}
//2 условие
function distanceOnVolume(distance=0, speed=0) {
    let distanceOnVolume = (car.volume / car.averageExpense) * 100// расстояние проезда на одном полном баке
    let i = 0;
    if ((distanceOnVolume - distance) >= 0) {
        return 'вам хватает бензина'
    } else {
        i = ((distance - distanceOnVolume) / 100) * car.averageExpense; // расчет необходимого добавочного топлива
    }
    return 'еще нужен бензин'
}
//3 условие
function checkDriver(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(elem)) {
            return true;
        }
    }
    return false;
}
function addingButtons() {//как сделать это все сразу?
    let num1 = (document.getElementById('task_4_number').value);
    let num2 = parseInt(document.getElementById('task_5_number').value);
    let num3 = parseInt(document.getElementById('task_6_number').value);
    document.getElementById('task_4_result').innerHTML = distanceOnVolume(num1, num2, num3);
}

console.log(rezTotalTime(150,45));
console.log(distanceOnVolume(150, 45));
console.log(checkDriver(car.driver,'Done'))


//2. Норма
/*
2. Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    2.1. Для виведення часу на екран.
    2.2. Зміни часу на передану кількість секунд.
    2.3. Зміни часу на передану кількість хвилин.
    2.4. Зміни часу на передану кількість годин.
    2.5. Врахуйте, що в останніх 3-х функціях, при зміні однієї частини часу,
    може змінитися та інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд,
    то повинно вийти «21:00:15», а не «20:30:75». Також потрібно передбачити
    можливість того що користувач може передати 150 секунд, або 75 хвилин.
*/

//Переводим часы и минуты и секунды в тайстамп
function totalTime(hours=0, minutes=0, seconds=0) {
    let timestampHours = (hours * 60) * 60;
    let timestampMinutes = minutes * 60;
    return timestampHours + timestampMinutes + seconds;
}
//не хочет подтягивать

let hours = parseInt(document.getElementById('hours').value);
let minutes = parseInt(document.getElementById('minutes').value);
let seconds = parseInt(document.getElementById('seconds').value);

let timestamp = totalTime(3, 45, 23);
//получаем часы
function getHours() {
    let hours = Math.floor(timestamp / 60 / 60);
    return hours;
}
//получаем минуты
function getMinutes() {
    let minutes = Math.floor(timestamp / 60) - (getHours() * 60);
    return minutes;
}
//получаем секунды
function getSeconds() {
    let seconds = timestamp % 60;
    return seconds;
}
//получаем итоговые результат в виде :::
function finalCount() {
    return getHours() + ':' + getMinutes() + ':' + getSeconds();
}
console.log(finalCount());

function totalResult() {
    document.getElementById("showTime").innerHTML = finalCount();
}





/*
 const dateObj = {
 hours: getHours(),
 minutes: getMinutes(),
 seconds: getSeconds()
 }
 console.log(dateObj);
 console.log(finalCount());
 console.log(timestamp);
 */

//Максимум
/*
3. Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом:
   3.1. Складання 2-х об'єктів-дробів.
   3.2. Віднімання 2-х об'єктів-дробів.
   3.3. Множення 2-х об'єктів-дробів.
   3.4. Ділення 2-х об'єктів-дробів.
   3.5. Скорочення об'єкта-дробу.
   
(Тобі потрібно буде створити ще деякі методи не зазначені в завданні,
для отримання математично правильної відповіді)
 */

const drobb = {
    value1: {//создаем контейнер под первую дробь
        ch: 0,
        zn: 0
    },
    value2: {//создаем контейнер под вторую дробь
        ch: 0,
        zn: 0
    },
    setValue: function(key=0, chisl=0, znam=0) {
        this[key].ch = chisl;
        this[key].zn = znam;
    },
    multiply: function() {//умножение
        const result = {
            ch: this.value1.ch * this.value2.ch,
            zn: this.value1.zn * this.value2.zn
        };
        return this.short(result);//возвращаем результат функции укорачивания кода в переменную result
    },
     divide: function() {//деление
         const result = {
             ch: this.value1.ch * this.value2.zn,
             zn: this.value1.zn * this.value2.ch
         };
         return this.short(result);//возвращаем результат функции укорачивания кода в переменную result
     },
    short: function(rez) {
        let nzd  =  0;
        for (let i = Math.min(rez.ch, rez.zn); i > 0; i--){
            if(rez.ch % i === 0 && rez.zn % i === 0) {
                nzd = i;
                break;
            }
        }
        
        if (nzd !== 0) {
            return {
                ch: rez.ch / nzd,
                zn: rez.zn / nzd
            }
        } else {
            return rez;
        }
    }
}

drobb.setValue('value1', 1, 2);
drobb.setValue('value2', 3, 12);

const multp = drobb.multiply();
console.log(multp);

const div = drobb.divide();
console.log(div);

//доделать в этот объект еще два метода - плюс и минус
//доделать интерфейс который бы вывел все эти вещи в HTML
//результат выражения будет выводиться в два span - в 1‑й - числитель, а 2‑й - знаменатель

