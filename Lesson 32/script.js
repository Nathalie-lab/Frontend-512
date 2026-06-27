"use strict";

//Функция-конструктор
/* function Car(name, year){
    this.name = name; //this.то, что будет видно слева = то, что приходит 
    this.year = year;
}

Car.prototype.getAge = function(){
    return new Date().getFullYear() - this.year;
}
Car.prototype.color = "black";

let ford = new Car('Ford', 2019); //new - создание объекта, Car - какой объект создаем
ford.color = "red";
console.log(ford);
console.log(ford.getAge());// получаем возраст машины
console.log(ford.color);// получаем цвет

let bmw = new Car('BMW', 2017);
console.log(bmw);
console.log(bmw.getAge());
console.log(bmw.color); */

/* function User(pName, pAge){
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.writeln("Имя: " + this.name + "; возраст: " + this.age + "<br>")
    }
}
let tom = new User("Tom", 26);
tom.displayInfo(); */

//Практическое применение

/* let form = document.form1;
form.addEventListener("submit", event =>{
    event.preventDefault();

    let title = form.title.value;
    let text = form.text.value;
    let description = form.description.value;

    saveForm({title, text, description}); //{title: title, text: text}
})

function saveForm({title, text, description}){
    let formData = {
        date: new Date().toLocaleDateString(),
        title, text, description, // ...obj
    }
    console.log("Form data: ", formData);
} */


//ИГРА 

let cardsArray = [
    {name: 'card1', img: 'c0.gif'},
    {name: 'card2', img: 'c1.gif'},
    {name: 'card3', img: 'c2.gif'},
    {name: 'card4', img: 'c3.gif'},
    {name: 'card5', img: 'c4.gif'},
    {name: 'card6', img: 'c5.gif'},
    {name: 'card7', img: 'c6.gif'},
    {name: 'card8', img: 'c7.gif'},
];

let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createBoard(){
    let gameBoard = document.querySelector(".game-board");
    let shuffleCards = [...cardsArray, ...cardsArray].sort(() => 0.5 - Math.random());

    shuffleCards.forEach(card => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;

        let cardImage = document.createElement("img");
        cardImage.src = card.img;
        cardElement.append(cardImage);

        cardElement.addEventListener('click', flipCard);
        gameBoard.append(cardElement)
    })
    
}
function flipCard(){
    if(lockBoard){
        return;
    }

    if(this === firstCard){
        return;
    }

    this.classList.add("flipper");

    if(!firstCard){
        firstCard = this;
        return;
    }
    secondCard = this;
    checkForMatch();
}

function checkForMatch(){
    if(firstCard.dataset.name === secondCard.dataset.name){
        disabledCard();
    }else{
        unflipCards();
    }
}

function disabledCard(){
    firstCard.removeEventListener("click", flipCard);    
    secondCard.removeEventListener("click", flipCard);
    resetBoard();   
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove("flipper");
        secondCard.classList.remove("flipper");
        resetBoard();
    }, 1000);
}

function resetBoard(){
    [firstCard, secondCard, lockBoard] = [null, null, null];
}


createBoard();


/* const week = 7;
console.log(week); */

/* const week = {
    name: "John"
} 
week.name = "Peter";*/

//const week = ['Monday', 'Tuesday'];
////week[0] = "hello";
//week = "Строка";

//console.log(week);


//ссылочный тип данных

/* const book = {title: 'Дюна'};
const anotherBook = {title: 'Дюна'};

console.log(book.title == anotherBook.title); */


/* let a = 5;
let b = 5;
console.log(a == b); */

/* let mas1 = [1,2,3];
let mas2 = [1,2,3];
console.log(mas1 == mas2);
console.log(mas1); */
