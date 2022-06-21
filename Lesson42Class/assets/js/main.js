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










