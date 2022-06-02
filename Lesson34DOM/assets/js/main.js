"use strict"
//Створити HTML-сторінку для відображення/редагування тексту.
// При відкритті сторінки текст відображається за допомогою тега div.
// При натисканні Ctrl + E, замість div з'являється textarea з тим
// же текстом, який тепер можна редагувати. При натисканні Ctrl +,
// замість textarea з'являється div з уже зміненим текстом.
// Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.

//создаем контейнер-элемент div, даем ему класс и вносим текст
const textContainer = document.querySelector('.textContainer');
const divText = document.createElement("div");
divText.className = 'div_text';
divText.innerText = 'Створити HTML-сторінку для відображення/редагування тексту. При відкритті сторінки текст відображається за допомогою тега div. При натисканні Ctrl + E, замість div зявляється textarea з тим же текстом, який тепер можна редагувати. При натисканні Ctrl +, замість textarea зявляється div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш';
textContainer.append(divText);

const textArea = document.createElement('textarea');
textArea.className = 'text_area';
textArea.innerText = divText.outerText;
textContainer.append(textArea);
textArea.hidden = true;

document.body.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyE') {
        event.preventDefault();
        divText.hidden = true;
        textArea.hidden = false;
    }
});

document.body.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.code === 'KeyR') {
        event.preventDefault();
        divText.innerText = textArea.value;
        textArea.hidden = true;
        divText.hidden = false;
    }
});


//2. Створити HTML-сторінку з великою таблицею.
// При кліку на заголовок стовпця, необхідно відсортувати дані
// цього стовпця. Врахуй, що числові значення повинні сортуватися
// як числа, а не як рядки.

// Все таблицы в которых будет осуществлена сортировка по thead
const threads = document.querySelectorAll('.table_sort thead');
threads.forEach(thead => thead.addEventListener('click', evt => getSort(evt)));

function getSort({ target }) {
    // Доступ к атрибуту data будет задан через объект dataset, можно и через getAttribute
    // .dataset.order ~ data-order
    // Переключение если равен -1, то при -(-1) = 1, если -(1) = -1
    // В зависимости от того чему равен data-order, будет происходить сортировка
    const order = (target.dataset.order = -(target.dataset.order || -1));
    
    // Событие происходит target -> th, target.parentNode -> tr
    // tr.cells -> всех <th> или <td>
    const thList = Array.from(target.parentNode.cells);
    
    // Index - нажатого th
    // (Можно заменить стандартный метод target.cellIndex,который выдает номер ячейки в строке <th> или <td>)
    const index = thList.indexOf(target);
    
    // Метод для правильного сравнения строк на разных языках, последующая их сортировать
    const collator = new Intl.Collator(['en', 'ru'], { numeric: true });
    
    // Функция сортировки использующая метод compare, и используемая внутри функции sort
    const comparator = (index, order) => (a, b) => {
        /*
         1) Index - соответствует колонке (index - нажатого th)
         2) a.children -> td -> целый ряд, меняется в зависимости от того сравнения sort: первый b, второй a
         Ряд:
         b: - - - -
         a: - - - -
         
         3) a.children[index] -> td -> берет из ряда колонка согласно Index (нажатого th),
         меняется в зависимости от того сравнения sort: первый b, второй a
         Выбранная колонка: index 3 - последняя
         Ряд:
         b: - - - 3
         a: - - - 3
         
         Сравнение уже идет на основании текста колонок:
         
         4) collator.compare - сравнивает столбцы друг другом в соответствии с порядком сортировки объекта Collato
         -1, если строка string1 предшествует строке string2;
         1, если строка string1 следует за строкой string2;
         0, если строки считаются равными
         
         5) На основе отсортированных столбцов, выстаиваются все остальные строки в таблицы
         */
        return (
            order * // order - переключатель, для того чтобы менять порядок сортировки: "с начала" или "с конца"
            collator.compare(a.children[index].textContent, b.children[index].textContent)
        );
    };
    
    // Коллекция элементов таблицы <tbody>
    const tablesBodies = Array.from(target.closest('table').tBodies);
    
    tablesBodies.forEach(tBody => {
        // tBody.rows - все ряды в таблице
        // Добавляет (несколько) отсортированных узлов или строки в конец
        tBody.append(...Array.from(tBody.rows).sort(comparator(index, order)));
    });
    
    /*
     При нажатии на элементы th которые находяться в <thead>, происходит сравнения и переключении класс sorted
     Если установлено значение false, класс будет только удален, но не добавлен.
     Если установлено значение true, класс будет только добавляться, но не удаляться
     */
    
    thList.forEach( th => th.classList.toggle("sorted", th === target));
}

//Створити HTML-сторінку з блоком тексту в рамці. Реалізувати можливість
// змінювати розмір блоку, якщо затиснути мишку в правому
// нижньому кутку і тягнути її далі.


let p = document.querySelector('p');

p.addEventListener('mousemove',
    function create() {
    p.removeEventListener('mousemove', create, false);
    p.className = p.className + 'resizable';
    let resizer = document.createElement('div');
    resizer.className = 'resizer';
    p.appendChild(resizer);
    resizer.addEventListener('mousedown', createDrag, false);
},
    false);

let startX;
let startY;
let startWidth;
let startHeight;

function createDrag(event) {
    startX = event.clientX;
    startY = event.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(p).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(p).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}

function doDrag(event) {
    p.style.width = (startWidth + event.clientX - startX) + 'px';
    p.style.height = (startHeight + event.clientY - startY) + 'px';
}

function stopDrag() {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
}


