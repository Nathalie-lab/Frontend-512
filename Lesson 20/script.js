"use strict";

/* let list = document.querySelector("ul"); // получили доступ к ul
let newItem = document.createElement("li");
newItem.textContent = "Новый элемент списка"; //метод работает быстрее, если не нужна HTML разметка, в ином случае innerHTML - создает разметку
list.append(newItem);//добавляет в конце */

//
/* document.querySelector("#func1").addEventListener("click", change);
document.querySelector("#func2").addEventListener("click", add);

function change(){
    let elem = document.querySelector("#list2").lastChild;
    document.querySelector("#list1").append(elem);
}

let i = 1;
function add(){
    let elem = document.createElement("li");
    elem.innerHTML = "Lemonade" + i;
    document.querySelector("#list2").append(elem);
    i++;
} */


//===================================== CALENDAR ================================
/* let calendar = document.getElementById("calendar");
let date= new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;

createCalendar(calendar, year, month);

function createCalendar(elem, year, month){
    let curDate = new Date(year, month - 1, 1);
    let findDate = new Date(year, month, 0);

    while(curDate.getDay() != 1){
        curDate.setDate(curDate.getDate() - 1);
    }

    let currentMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let current = document.createElement("h2");
    current.textContent = `${currentMonth[month-1]} ${year}`;
    elem.append(current);

    let table = document.createElement("table");
    table.innerHTML = `
        <tr>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            <th>Sunday</th>
        </tr>
    `;
        while(curDate <= findDate){
            let tr = document.createElement("tr");
            for(let i = 0; i < 7; i++){
                let td = document.createElement("td");
                if(curDate.getMonth() == month - 1){
                    td.textContent = curDate.getDate();
                }
                tr.append(td);
                curDate.setDate(curDate.getDate() + 1);
            }
            table.append(tr);
        }
    elem.append(table);
} */

/* let div = document.querySelector("#root");
div.insertAdjacentHTML("beforebegin", "<p>Before the element</p>");
div.insertAdjacentHTML("afterend", "<p>After the element</p>");
div.insertAdjacentHTML("afterbegin", "<p>The first in the element</p>");
div.insertAdjacentHTML("beforeend", "<p>The last in the element</p>");

let firstChild = document.querySelector("#p1");
//firstChild.remove();
let secondChild = document.querySelector("#p2");
secondChild.after(firstChild); */

//КЛОНИРОВАНИЕ УЗЛОВ

/* let ul = document.querySelector("ul");
let li = ul.cloneNode(true);
li.querySelector("li").innerHTML = "Start of the cloning elements";
ul.after(li); */


/* let list = document.querySelector(".list"); // ul
list.insertAdjacentHTML("beforebegin", "<h2>List </h2><hr>");
let listInner = document.querySelector("h2");
listInner.insertAdjacentText("beforeend", "of Planets");
list.insertAdjacentHTML("afterbegin", "<li>Sun</li>");
list.insertAdjacentHTML("beforeend", "<li>Mars</li>");
list.insertAdjacentHTML("afterend", "<hr>");

let hr = document.querySelectorAll("hr")[1];
let h4 = document.createElement("h4");
h4.innerHTML = "The end of the list";
hr.insertAdjacentElement("afterend", h4);

let idRemove = setInterval(function(){
    let li = document.querySelector("li:last-child");
    if(li === null){
        clearInterval(idRemove);
        //alert("The list is deleted");
        list.insertAdjacentHTML("afterbegin", "<li>The list is deleted</li>");
    }else{
        li.remove();
    }
}, 500); */

// ============================= Homework ===============================

let removeButtons = document.querySelectorAll("span"); //доступ ко всем спанам с кнопкой удаления

    for(let i = 0; i < removeButtons.length; i++){
        removeButtons[i].addEventListener('click', function(){
            this.parentNode.remove(); // parentNode на картинке, чтобы обратиться к родительскому элементу!!!
        });
    }

