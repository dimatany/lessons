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
    li.innerHTML = playList[i].song;
    ol.appendChild(li);
}


//Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном.
// На модальном вікні повинен бути текст і кнопка "Закрити".
// Спочатку модальне вікно не відображається.
// При кліку на кнопку "Відкрити" з'являється модальне вікно,
// на кнопку "Закрити" — зникає.

document.addEventListener('DOMContentLoaded', function() {
    /* Записываем в переменные элементов-кнопок и подложку*/
    let modalButtons = document.querySelectorAll('.js-open-modal');
    let overlay = document.querySelector('.js-overlay-modal');
    let closeButtons = document.querySelectorAll('.js-close-modal');
    
    /* Перебираем кнопки если их будет больше одной*/
    modalButtons.forEach(function(item){
        /* Назначаем каждой кнопке (если их больше одной) обработчик клика */
        item.addEventListener('click', function(e) {
            /* Предотвращаем стандартное действие элемента. Так как кнопку можно
            сделать по-разному (ссылкой или кнопкой)*/
            e.preventDefault();
            /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
             и будем искать модальное окно с таким же атрибутом.*/
            let modalId = this.getAttribute('data-modal'),
                modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
            /* После того как нашли нужное модальное окно, добавим классы
             подложке и окну, чтобы показать их. */
            modalElem.classList.add('active');
            overlay.classList.add('active');
        });
    });
    
    closeButtons.forEach(function(item){
        item.addEventListener('click', function(e) {
            let parentModal = this.closest('.modal');
            parentModal.classList.remove('active');
            overlay.classList.remove('active');
        });
    });
    
    document.body.addEventListener('keyup', function (e) {
        let key = e.code;
        if (key === '27') {
            document.querySelector('.modal.active').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        }
    }, false);
    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });
});


//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.
let i = -1;
function trafficLight(){
    i++;
    let arr = ['red','orange','green'],
        round = document.querySelectorAll('.round');
    //Условие if(round[i-1]) означает что если элемент не undefined тогда удалить цвет
    // round[i-1].style.backgroundColor = '';, без этого условия возникнет вышеприведенная ошибка.
    if(round[i-1]) round[i-1].style.backgroundColor = '';
    //if(i == arr.length) i = 0; // а если i равна 3 сбрасываем i обратно в 0
    if(i === arr.length) i = 0;
    round[i].style.backgroundColor = arr[i];
}