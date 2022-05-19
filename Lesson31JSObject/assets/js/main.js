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
    'average speed': 120,
    'volume': 60,
    'average expense': 10,
    '100km/h expense': 8,
    'driver': function allDriver(...drivers) {
        let driver = 0;
        for (let i = 0; i < driver.length; i++) {
            driver += drivers[i];
        }
        return driver;
    }//добавить внутренний метод с this который будет проверять водителей и разрешать вести машину
};

//1.2. Висновок на екран з інформацією про автомобіль.
let carUl = '<ul>';
for(let key in car) {
    console.log(key + ':' + car[key]);
    carUl += '<li>'+key+' : '+car[key]+'</li>'
}
carUl += '</ul>';
document.getElementById('task_1_result').innerHTML = carUl;

//1.3. Додавання водія, який має право керувати автомобілем.
car.driver[0]='Vasa Pupkin';
car.driver[1]='Anna Pupkin';
console.log(car);

//1.4. Заправка автомобіля.
let empty = 0;
function volume(empty=0) {
    if (car.volume === empty) {
        return 'у вас полный бак'
    } else {
        return `${(car.volume - empty)} литров долить до полного бака`;
    }
}
console.log(volume(empty=20));
/*
1.5. Підрахунок необхідного часу для подолання переданої відстані
з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві
необхідно робити перерву на 1 годину, а також потрібно перевіряти чи має
право водій керувати даним автомобілем (ім'я водія функція приймає другим аргументом). '
'Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки,
'якщо палива не вистачить потрібно вивести повідомлення, про це і запропонувати заправити автомобіль.
*/
/*
let distance = 0;
let speed = 0;

function rezTotal ( s=0, v=0) {
    return  (s / v) * 60//ищем время в минутах - поэтому расстояние делим на скорость
}
let time = rezTotal();

function getConditions(driver=0) {
    if (time > 240) {
        console.log('больше чем 4 часа за рулем сделай остановку')
    } else if (driver !== driver2 || car.driver1) {
        console.log('вы не имеете право водить эту машину')
    } else if (volume()<=0) {
        console.log('У вас нет бензина для поездки')
    }
}
console.log(getConditions(driver2));

function getTimeFromMin(min=0) {
    let hours = Math.trunc(min/60);
    let minutes = min % 60;
    return hours + 'ч. ' + minutes + 'м.';
}
console.log(getTimeFromMin((rezTotal(100,90))));

/*
function getValue() {
    distance = parseInt(document.getElementById('task_6_number').value);
    speed = parseInt(document.getElementById('task_7_number').value);
    document.getElementById('task_4_result').innerHTML = rezTotal();
    
}
*/
/*
движение
время  t = s/v (время = расстояние / скорость)
расстояние s = v∗t (расстояние = скорость * время)
скорость v = s/t (скорость = расстояние / время)
*/


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
let hours = 10;
let minutes = 500;
let seconds = 30;

const timeObj = {};
timeObj.hours = hours;
timeObj.minutes = minutes;
timeObj.seconds = seconds;
console.log(timeObj)

let now = new Date();
console.log(now)

//2.1. Для виведення часу на екран.
let plusHours = 300;
let plusMinutes = 200;
let plusSeconds = 100;

function getTime(hours=0, minutes=0, seconds=0) {
    let time = hours / 3600 + minutes / 60 + seconds;
    
    hours = Math.trunc((hours + plusHours) / 60);
    minutes = (minutes + plusMinutes)% 60;
    seconds = (seconds + plusSeconds)% 60;
    return hours + 'ч. ' + minutes + 'м.' + seconds + 'c.';
}
console.log(getTime(2000,34,21));







//1 час = 60 минут = 3600 секунд

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





