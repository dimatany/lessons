'use strict'
////////////////////////////////////////////////////////////////////////////////
//1я задача
{
    document.querySelector(".firstCalc").addEventListener("click", function() {
        const r = document.querySelector("#first").value;
        const circle = new CircleDescription(r);
        document.querySelector("#result").innerHTML += `
        <div>Радиус круга: ${circle.radius}</div>
        <div>Диаметр круга: ${circle.diametr}</div>
    `
    });
    
    document.querySelector(".secondCalc").addEventListener("click", function() {
        const r = document.querySelector("#first").value;
        const circle = new CircleDescription(r);
        document.querySelector("#result").innerHTML += `
        <div>Площадь круга: ${circle.circleSquare()}</div>
    `
    });
    
    document.querySelector(".thirdCalc").addEventListener("click", function() {
        const r = document.querySelector("#first").value;
        const myCircle = new CircleDescription(r);
        document.querySelector("#result").innerHTML += `
        <div>Длина круга: ${myCircle.circleLength()}</div>
    `
    });
}
////////////////////////////////////////////////////////////////////////////////
//2я задача


////////////////////////////////////////////////////////////////////////////////
//3я задача
{
    const list = [
        new Employee({
            name: 'Bob',
            position: 'manager',
            age: 30,
            qualification: 'low',
        }),
        new Employee({
            name: 'John',
            position: 'High manager',
            age: 35,
            qualification: 'high',
        }),
        new Employee({
            name: 'Sara',
            position: 'manager',
            age: 27,
            qualification: 'average',
        }),
    ];
    
    const myTable = new EmpTable(list);
    myTable.viewHtml('emp_tbody');
}


