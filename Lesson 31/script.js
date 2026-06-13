"use strict";

/* let car = {
    name: "Volvo",
    year: 2019,
    colors: {
        first: "yellow",
        second: "blue",
    },
    color: [
        "black",
        "white",
        "red",
        "blue",
    ],
    hello: function(){
        document.writeln("Привет");
    }
};

console.log(car);
document.writeln(car.name + " " + car.color[1] + " " + car.colors.second);
car.hello(); //метод */

/* let fill = car.color.filter(function(elem){
    return elem.length < 5;
});

document.writeln(fill + "<br>");

let mas = car.color.map(function(elem, index, all){
    return index + ") " + elem + " массив: " + all + "<br>";
});
document.writeln("<br>" + mas + "<br>");
 */
/* let mas1 = car.color.map(elem => elem.toUpperCase());
document.writeln("<br>" + mas1 + "<br>"); */

/* let mas2 = car.color.map(function(elem){
    return elem;
})
document.writeln("<br>" + mas2 + "<br>"); */

/* let mas2 = Object.keys(car.colors).map(function(elem){
    return elem + ": " + car.colors[elem] + "<br>";
})
document.writeln("<br>" + mas2 + "<br>"); */

/* let calc = {
    num1: 5,
    num2: 6,
    calculate: function(){
        this.res = this.num1 * this.num2;
    }
}

calc.calculate();
document.writeln(calc.res); */

let x = 15, y = 10;

/* let coord = {
    x: x,
    y: y,
    calcSq: function(){
        document.writeln(this.x * this.y);
    }
} */

//coord.calcSq();

/* let coord = {
    x,
    y,
    calcSq: function(){
        document.writeln(this.x * this.y);
    }
}

coord.calcSq(); */


/* let user = {
    login: {
        firstName: "Kate",
        lastName: "Pavlova",
    },
    psw: 'qwerty',
    role: 'guest',
}

let log = user.login.firstName;
console.log(log); */

//let {login: {firstName: f, lastName: l}, psw, role} = user;
//document.writeln(f + " " +  l + " " + psw + " " + role);
/* let {login: {firstName: f, lastName: l}, ...rest} = user;
document.writeln(f + " " +  l + " " + rest.psw + " " + rest.role); */


//Домашняя работа
//Создать объект , который выиграл автомобиль (цвет случайным образом из массива). в оъекте хранится имя в значении ключа, массив цветов, и сама марка автомобиля. вывд ин-ии идет через метод документ райт лн
//Получаем строку Игорь выиграл красный мерседес - постоянная и постоянная
//math random