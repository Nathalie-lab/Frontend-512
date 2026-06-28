"use strict";

//console.log(window.location); //1 способ
//console.log(location); // 2 способ
//console.log(document.location); // 3 способ
//console.log(location.href);
//alert(location);

//location.href = "https://htmlbook.ru"; // не можем вернуться на предыдущую страницу

/* let open = document.querySelector("#show");
open.addEventListener("click", function(){
    //window.location.assign("https://htmlbook.ru");
    window.location.assign("newIndex.html");
}) */

/* let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
    let url = document.getElementById("url").value;
    location.assign(url);
    //location.replace(url);
    //location.reload(url);
}) */

    //console.log("В истории " + history.length + " страниц");
    //history.back();
    //history.forward();
    //history.go(-1);
    
    //console.log(window.navigator);
    //console.log(window.navigator.userAgent);

    //console.log(window.screen);


//ОБРАБОТКА ИСКЛЮЧЕНИЙ

/* try{
    //код, где может потенциально произойти ошибка
} catch (error){
    // блок выполнится, если ошибка произошла
} finally {
    //выполняется после всех действий в любом случае
} */
    
//КАКИЕ МОГУТ БЫТЬ ОШИБКИ

//1. СИНТАКСИЧЕСКИЕ - SyntaxError - найти и исправить
//console.log("Hello); - пропуск кавычки

//2. ССЫЛКИ - ReferenceError
/* let a = 5;

try{
    console.log(b);
}catch (error){
    console.error("Ошибка", error.message);
}
console.log(a); */

//3. ТИП - TypeError
/* try{
    let num = 16;
    console.log(num());  
} catch(e){
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
} */

//4. Длинна массива - RangeError
/* try{
    let arr = new Array(-5);    
} catch (err){
    let text = err.name + "<br>" + err.message + "<br>" + err.stack + "<br>";
    document.getElementById("demo").innerHTML = text;
} */

/*     try{
       setTimeout(function(){
            alert(x);
            alert(2 + 2);
        }, 10)
    } catch (e){
        alert(e.name + ": " + e.message);
    } */

/*        setTimeout(function(){
            try{
                alert(x);
                alert(2 + 2);
            }catch (e){
                alert(e.name + ": " + e.message);
            }
    }, 10) */

/* try{
    alert(x);
    alert(2 + 2);
} catch (e){
    alert(e.name + ": " + e.message);
} finally{
    alert("Код в блоке finally");
} */


/* let flag = false;
let but = document.querySelector("button");

but.addEventListener("click", function(){
    try{
        if(!flag){
            document.body.style.background = "12px";
        } else {
            document.body.style.background = "greenyellow";
        }
    } catch (e){
        alert(e);
    } finally{
        flag = !flag;
    }
}) */

/* function divide(a, b){
    if(b == 0){
        throw new Error("Делить на ноль нельзя");
    }
    return a / b;
} */

/* let res;
try{
    res = divide(5, 0);
    console.log(res);  
} catch(error){
    console.log(error.name + ": " + error.message + ", stack: " + error.stack);
} */

/*     let but = document.querySelector("button");
    but.addEventListener("click", myFunction);

    function myFunction(){
        let message = document.getElementById("txt");
        let x = document.getElementById("demo").value;
        message.innerHTML = ""; 
        try{
            if(x.trim() == ""){
                throw "пусто";              
            } if(isNaN(x)){
                throw "не число";
            }
            if(x < 5){
                throw "слишком мало";
            }
            if(x > 10){
                throw "слишком много";
            }
        } catch(err){
            message.innerHTML = "Вы ввели " + err;
        } finally{
            message.innerHTML = "Вы ввели все правильно";
        }
    } */

/* function calculate(a, b){
    if(typeof a != "number"){
        throw "a - не число"
    }
    return a + (b**2) / 3;
}

console.log(calculate(5, 3));
console.log(calculate("Hello", 3)); */


//РАБОТА С КЛАССАМИ

/* function Person(name, age){
    this.name = name,
    this.age = age
}

const person1 = new Person("Андрей", 23);
console.log(person1); */

/* class Person2{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    sayHi(){
        document.writeln("Привет, " + this.name + "!");
    }
}
const person2 = new Person2("Андрей", 23);
console.log(person2);
person2.sayHi();
alert(typeof Person2); */

/* let User = class {
    sayHi(){
        alert("Привет");
    }
}

let user = new User();
user.sayHi(); */

/* function makeClass(text){
    return class {
        sayHi() {
            alert(text);
        }
    }
}

let User = makeClass("Привет");
new User().sayHi(); */

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    area(){
        return this.height * this.width;
    }
}

let rectangle = new Rectangle(10, 20);
rectangle.color = "red";
console.log(rectangle);

console.log(rectangle.area());

//Создать два класса КРУГ И ТРЕУГОЛЬНИК. Найти площадь и периметр

//S = π*r² - площадь круга через радиус
//P = 2*π*r - периметр круга через радиус

//ЗАДАЧА №1
class Circle{
    constructor(radius, numP){
        this.radius = radius;
        this.numP = numP;
    }
    area(){
        return (this.radius ** 2) * this.numP;
    }
    perimetr(){
        return 2 * this.radius * this.numP;
    }

    paintCircle(){
        let div = document.createElement('div');       
        div.style.width = (this.radius * 2) + "px";
        div.style.height = (this.radius * 2) + "px";
        div.style.border = '1px solid black';
        div.style.borderRadius = '50%';
        div.style.backgroundColor = '#7ec1e5';
        document.body.appendChild(div);
    }

}

let circle = new Circle(50, (Math.PI).toFixed(2));
circle.paintCircle();
document.writeln("Площадь круга равна = " + circle.area() + " см\u00B2" + "<br>");
document.writeln("Периметр круга равен = " + circle.perimetr() + " см" + "<br>");

//ЗАДАЧА №2

//P = a + b + c - периметр треугольника
//S = 0.5 * a * h - площадь треугольника

class Triangle{
    constructor(a, b, c, h){
        this.a = a;
        this.b = b;
        this.c = c;
        this.h = h;
    }
    area(){
        return 0.5 * this.a * this.h;
    }
    perimetr(){
        return this.a + this.b + this.c;
    }
    paintTriangle(){
        let div = document.createElement('div');       
        div.style.width = "0px";
        div.style.height = "0px";
        div.style.borderLeft = (this.a * 10) + "px solid transparent";
        div.style.borderRight = (this.b * 10) + "px solid transparent";
        div.style.borderBottom = (this.h * 10) + "px solid #f7e286";
        document.body.appendChild(div);
    }
}
let triangle = new Triangle(5, 5, 4, 7);
triangle.paintTriangle();
document.writeln("Площадь треугольника равна = " + triangle.area() + " см\u00B2" + "<br>");
document.writeln("Периметр треугольника равен = " + triangle.perimetr() + " см");