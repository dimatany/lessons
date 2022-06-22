////////////////////////////////////////////////////////////////////////////////
//1я задача - классы
class CircleDescription {
    constructor(radius) {
        this.radius = radius;
    }
    get getRadius() {
        return this.radius;
    }
    set setRadius(new_radius) {
        this.radius = new_radius;
    }
    get diametr() {
        return this.radius * 2;
    }
    circleSquare() {
        return (Math.PI * (this.radius * this.radius)).toFixed(2);
    }
    circleLength() {
        return (Math.PI * this.diametr).toFixed(2);
    }
}
////////////////////////////////////////////////////////////////////////////////
//2я задача


////////////////////////////////////////////////////////////////////////////////
//3я задача - классы
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
