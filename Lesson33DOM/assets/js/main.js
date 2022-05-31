"use strict"
//Створити сторінку, що показує нумерований список пісень:
let div = document.getElementById('list');
let ol = document.createElement('ol');
div.appendChild(ol);

let playList = [
    {
        author: "LED ZEPPELIN",
        song:"STAIRWAY TO HEAVEN"
    },
    {
        author: "QUEEN",
        song:"BOHEMIAN RHAPSODY"
    },
    
    {
        author: "LYNYRD SKYNYRD",
        song:"FREE BIRD"
    },
    {
        author: "DEEP PURPLE",
        song:"SMOKE ON THE WATER"
    },
    {
        author: "JIMI HENDRIX",
        song:"ALL ALONG THE WATCHTOWER"
    },
    {
        author: "AC/DC",
        song:"BACK IN BLACK"
    },
    {
        author: "QUEEN",
        song:"WE WILL ROCK YOU"
    },
    {
        author: "METALLICA",
        song:"ENTER SANDMAN"
    }
];

for (let i = 0, ln = playList.length; i < ln; i++) {
    let li = document.createElement('li');
    li.innerHTML = (playList[i].song).bold()+' : '+playList[i].author;
    ol.appendChild(li);
}


//Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
// На модальном вікні повинен бути текст і кнопка "Закрити".
// Спочатку модальне вікно не відображається.
// При кліку на кнопку "Відкрити" з'являється модальне вікно,
// на кнопку "Закрити" — зникає.

let modal = document.querySelector('.modal')
let button1 =  document.createElement('button')
button1.innerText = 'Push';
button1.className = 'my_btn';
modal.append(button1);



//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
let circleRed = document.createElement('div')
circleRed.className = 'round';
circleRed.id = 'red';

let circleOrange = document.createElement('div')
circleOrange.className = 'round';
circleOrange.id = 'orange';

let circleGreen = document.createElement('div')
circleGreen.className = 'round';
circleGreen.id = 'green';

let button =  document.createElement('button')
let app = document.querySelector('.app')

app.append(circleRed);
app.append(circleOrange);
app.append(circleGreen);
app.append(button);

button.className = 'my_btn';
button.innerText = 'Push';
button.onclick = next;

//RED = 1: RED & YELLOW = 2: GREEN = 3;
let state = 1;
let greenLight = document.getElementById ("green").style;
let redLight = document.getElementById ("red").style;
let orangeLight = document.getElementById ("orange").style;

function next(){
    if (state === 1) {
        state = state + 1;
        orangeLight.backgroundColor = "orange";
        redLight.backgroundColor = "white";
        greenLight.backgroundColor = "white";
    } else if (state === 2) {
        state = state + 1;
        orangeLight.backgroundColor = "white";
        redLight.backgroundColor = "white";
        greenLight.backgroundColor = "green";
    } else if (state === 3) {
        state = 1;
        orangeLight.backgroundColor = "white";
        redLight.backgroundColor = "red";
        greenLight.backgroundColor = "white";
    }
}
