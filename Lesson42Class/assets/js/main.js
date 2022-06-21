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
    
    get diameter() {
        this.diameter = this.radius * 2;
        return this.diameter
    }
    
    methodArea = function() {
        return Math.PI * this.radius * this.radius;
    };
    methodPerimeter = function() {
        return 2 * Math.PI * this.radius;
    };
}

let example = new CircleDescription (10);
console.log('methodArea =', example.methodArea().toFixed(2));
console.log('methodPerimeter =', example.methodPerimeter().toFixed(2));









