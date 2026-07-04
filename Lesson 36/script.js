"use script";

/* class User{
    constructor(name = "Гость", role = "viewer", isActive = false){
        this.name = name;
        this.role = role;
        this.isActive = isActive;
        this.createdDate = new Date();
    }
    activate(){
        this.isActive = true;
        return `Пользователь ${this.name} активирован`;
    }
}

const admin = new User('Администратор', 'admin', true);
const guest = new User();
console.log(guest.activate());
console.log(admin);
console.log(guest); */



/* class Person{
    #age; // нельзя менять
    #name;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    set age(year){ //за пределами класса, если нужно поменять значение
        if(year > 0 && year < 110){
            this.#age = year;  
        }

    }

    get age(){ // вывести элемент
        return this.#age;
    }

    print(){
        console.log(`Name: ${this.#name} Age: ${this.#age}`);
    }
}

const tom = new Person("Tom", 37);
tom.print(); */

//tom.name = "Sam"; //Если выше решетка, то ничего тут не перезаписывается
//tom.age = -45;
//tom.age = 22;
//tom.print();
//console.log(tom.age);



/* class User{
    constructor(login){
        this.login = login; // вызов сеттера
    }

    set login(value){
        if(value.length < 6){
            console.log("Логин слишком короткий");
            return;
        }
        this._login = value;
    }

    get login(){
        return this._login
    }

    setLogin(value){
        if(value.length < 6){
            console.log("Логин слишком короткий");
            return;
        }
        this._login = value;
    }

    getLogin(){
        return this._login
    }
}

let user = new User("administrator");
//console.log(user.login);
console.log(user.getLogin());

//user.login = "admin_admin";
user.setLogin("admin_admin");
console.log(user.getLogin()); */




/* class Person{
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get fullName(){
        return this._firstName + " " + this._lastName;
    }

    set fullName(value){
        [this._firstName, this._lastName] = value.split(/\s+/);
    }
}

let people = new Person("Сергей", "Михайлов");
document.writeln(people.fullName + "<br>");

people.fullName = "Анна Петрова";
document.writeln(people.fullName + "<br>"); */


/* class Mail{
    constructor(sender){
        this._sender = sender;
    }

    get sender(){
        return "Почта: " + this._sender;
    }
    set sender(val){
        this._sender = val.toLowerCase();
    }
}

const m = new Mail("test@mail.ru");
m.sender = "MyTest@mail.ru";
document.writeln(m.sender); */


//Задача

/* class Worker{
    constructor(name, surname, rate, days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get getFullName(){
        return this._surname + " " + this._name;
    }

    get rate(){
        return this._rate;
    }
    get days(){
        return this._days;
    }

    getSalary(){
        return this.rate * this.days;
    }
}

const worker = new Worker('Инна', 'Иванова', 1000, 30);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());
 */

//парадигмы - инкапсуляция, наследование, полиморфизм

//Родительский (супер-класс)
//Дочерний ()

/* class Animal{
    constructor(name){
        this.speed = 0;
        this.name = name;
    }

    run(speed){
        this.speed = speed;
        document.writeln(`${this.name} бежит со скоростью ${this.speed} км/ч <br>`)
    }

    stop(){
        this.speed = 0;
        document.writeln(`${this.name} стоит <br>`)
    }
}

class Rabbit extends Animal{
    constructor(name, earLength){
        super(name);
        this.earLength = earLength;
    }
    hide(){
        document.writeln(`${this.name} прячется! <BR>`)
    }
    stop(){
        super.stop();
        this.hide();
    }
}


let animal =new Animal("Мой питомец");
animal.run(80);
animal.stop();

let rabbit = new Rabbit("Белый кролик", 10);
rabbit.run(5);
rabbit.hide();
rabbit.stop();
document.writeln(rabbit.name + "<br>");
document.writeln(rabbit.earLength + "<br>"); */




/* class Shape{
    constructor(name){
        this.name = name;
    }
    calculateArea(){
        throw new Error("Метод calculate должен быть реализован");
    }
    describe(){
        console.log(`Это ${this.name} с площадью ${this.calculateArea()}`);
    }
}

class Circle extends Shape{
    constructor(name, radius){
        super(name);
        this.radius = radius;
    }
    calculateArea(){
        return (Math.PI * this.radius ** 2).toFixed(2);
    }
}

let circle = new Circle("круг", 5);
circle.describe(); */




//Домашняя работа

//Задача из классной работы (основа)
 class Worker{
    constructor(name, surname, rate, days){
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }

    get name(){
        return this._name;
    }
    get surname(){
        return this._surname;
    }
    get getFullName(){
        return this._surname + " " + this._name;
    }

    get rate(){
        return this._rate;
    }
    get days(){
        return this._days;
    }

    getSalary(){
        return this.rate * this.days;
    }
}

const worker = new Worker('Инна', 'Иванова', 1000, 30);
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getFullName);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());

//Часть домашней работы с наследованием

 class Boss extends Worker{
    constructor(name, surname, rate, days, workers){
        super(name, surname, rate, days); //переношу то, что есть из родительского класса
        this._workers = workers; //добавляю новое свойство
    }

    get workers(){
        return this._workers;
    }

    getSalary(){
        return this.rate * this.days * this.workers; // меняю формулу
    }
 }

const boss = new Boss('Иван', 'Иванов', 10, 31, 10);
console.log(boss.name);
console.log(boss.surname);
console.log(boss.getFullName);
console.log(boss.rate);
console.log(boss.days);
console.log(boss.workers);
console.log(boss.getSalary());

