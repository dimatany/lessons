'use strict'
/*
 Реалізуй клас, що описує коло. У класі повинні бути такі компоненти:
 поле, що зберігає радіус кола;
 get-властивість, яке повертає радіус кола;
 set-властивість, що встановлює радіус кола;
 get-властивість, яке повертає діаметр кола;
 метод, що обчислює площу кола;
 метод, що обчислює довжину кола.
 
 */
class CircleDescription {
    constructor(radius) {
        this.radius = radius;
    }
    
    get() {
        return this.radius;
    }
    
    set (newRadius) {
        this.radius = newRadius;
    }
    
    get diametr() {
        return this.radius * 2;
    }
    
    methodArea = function() {
        return Math.PI * this.radius * this.radius;
    };
    
    methodPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
    
    show1 () {
        document.getElementById('radius').innerText = this.radius;
    };
    
    show2 () {
        document.getElementById('area').innerText = this.methodArea();
    };
    
    show3 () {
        document.getElementById('perimeter').innerText = this.methodPerimeter();
    };
 }

let example = new CircleDescription (15);
example.set(6);
console.log(example);
console.log('methodArea =', example.methodArea().toFixed(2));
console.log('methodPerimeter =', example.methodPerimeter().toFixed(2));


/////////////////////////////////////////////////////////////////////
class Employee {
    constructor(empl) {
        this.name = empl.name;
        this.position = empl.position;
        this.age = empl.age;
        this.qualification = empl.qualification;
    }
}

class EmpTable {
    constructor(empList) {
        this.empList = empList;
    }
    getHTML() {
        let html = '';
        this.empList.forEach(element =>{
            html += `
            <tr>
             <td>${element.name}</td>
             <td>${element.position}</td>
             <td>${element.age}</td>
             <td>${element.qualification}</td>
            </tr>
            `;
        });
        return html;
    }
    viewHtml(elementId) {
        document.getElementById(elementId).innerHTML = this.getHTML();
    }
}
///массив объектов
const list = [
    new Employee({
        name:'Bob',
        position:'manager',
        age:30,
        qualification:'low',
    }),
    new Employee({
        name:'John',
        position:'High manager',
        age:35,
        qualification:'high',
    }),
    new Employee({
        name:'Sara',
        position:'manager',
        age:27,
        qualification:'average',
    }),
];

const myTable = new EmpTable(list);
myTable.viewHtml('emp_tbody');




