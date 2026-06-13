"use strict";

//========================My project "Calculator Online"================

let a = document.querySelector("#firstNumber");
let b = document.querySelector("#operator");
let c = document.querySelector("#secondNumber");
let res = document.querySelector("#result");
let but = document.querySelector("button");
but.addEventListener("click", calculate);

function calculate(){
    let data1 = Number(a.value);
    let data2 = b.value;
    let data3 = Number(c.value);
    console.log(data1);
    console.log(data2);
    console.log(data3);
    
    let count;

    if (data2 === "+") {
        count = data1 + data3;
    } else if (data2 === "-") {
        count = data1 - data3;
    } else if (data2 === "*") {
        count = data1 * data3;
    } else if (data2 === "/") {
        count = data1 / data3;
    } else {
        count = "Ошибка";
    } 
    res.textContent = count;
}

/* let arr = []; */

let one = document.querySelector("#n1");
let two = document.querySelector("#n2");
let three = document.querySelector("#n3");
let four = document.querySelector("#n4");
let five = document.querySelector("#n5");
let six = document.querySelector("#n6");
let seven = document.querySelector("#n7");
let eight= document.querySelector("#n8");
let nine = document.querySelector("#n9");

one.addEventListener("click", clickNumber);   
two.addEventListener("click", clickNumber);    
three.addEventListener("click", clickNumber);    
four.addEventListener("click", clickNumber);    
five.addEventListener("click", clickNumber);    
six.addEventListener("click", clickNumber);    
seven.addEventListener("click", clickNumber);    
eight.addEventListener("click", clickNumber);    
nine.addEventListener("click", clickNumber);

function clickNumber(event) {
   let v = event.target.textContent;
   a.addEventListener("input", function(){
     a.value += v; 
   }) 
/*     console.log(c.focus());
   if(a.focus()){
        a.value += v;  */
/*         a.classList.add("active");
        a.classList.remove("disabled");
        c.classList.add("disabled");
        c.classList.remove("active"); */
/*     }else{
        c.value += v;  */
/*         c.classList.add("active");
        c.classList.remove("disabled");
        a.classList.add("disabled");
        a.classList.remove("active"); */
}

//.blur()




//привязать цифры на кнопках - что лучше если сам пользователь вводит или когда нажимает на цифры
//привязать тогда к первому окну эти цифры и ко второму окну эти цифры
//лучше сделать силект или такие же кнопки с знаками плюс минус и тогда
//не хваатет кнопки С типа удалить все
//не хватает кнопки удалить одно число
//вот такой символ % как в телефонном калькуляторе куда-тогда
//ЗАПЯТАЯ или ТОЧКА для дробных
//в телефоне - ввожу число и оно сразу появялется в конце = 999 - сделать автоматический счет,  а зачем тогда равно вообще сделала? чтобы нажать на него и это число сделалось больше и жирнее типа как результат