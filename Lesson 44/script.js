"use strict";

//localStorage.setItem("data", 1);
//alert(localStorage.getItem("data"));

//localStorage.test = 2;
//alert(localStorage.test);
//delete (localStorage.test);

//localStorage.setItem("username", "Марина");
//localStorage.setItem("surname", "Ветрова");
//alert(localStorage.length);

/* for(let i = 0; i < localStorage.length; i++){
    let k = localStorage.key(i);
    console.log(k + ": " + localStorage.getItem(k));
} */

//console.log("\n");

/* let keys = Object.keys(localStorage); // ["username", "data", "surname"]
    for(let key of keys){
        console.log(key + ": " + localStorage.getItem(key));
    } */

/* let keys = Object.keys(localStorage); // ["username", "data", "surname"]
    for(let key of keys){
        console.log(key + ": " + localStorage.getItem(key) + ", тип: " + typeof localStorage.getItem(key));
    } */


//localStorage.user = {name: "Сергей"};
//console.log(localStorage.user);

//localStorage.user = JSON.stringify({name: "Сергей"});
//let user = JSON.parse(localStorage.user);
//console.log(user.name);

//localStorage.removeItem("username");
//console.log(localStorage.clear());


//СКОЛЬКО КЛИКОВ МЫШКИ

/* let board = document.querySelector("div");
let value = document.querySelector("span");
let counter;

if(localStorage.getItem("count") > 0){
    counter = localStorage.getItem("count");
    value.textContent = counter;
}else{
    counter = 0;
}

board.addEventListener("click", function(){
    counter++;
    value.textContent = counter;
    localStorage.setItem("count", counter);
})

board.addEventListener("contextmenu", function(){
    localStorage.clear();
    counter = 0;
    value.textContent = counter;
}) */


//ФОРМА В БРАУЗЕРЕ

/* const form = document.getElementById("form1");
const formFields = form.elements;
const submitBtn = form.querySelector("[type='submit']");

function attachEvents(){
    for(let i = 0; i < formFields.length; i++){
        formFields[i].addEventListener("change", changeHandle);
    }
}

function changeHandle(){
    if(this.type != "checkbox"){
        console.log(this.name, this.value);
        localStorage.setItem(this.name, this.value);
    } else {
        console.log(this.name, this.checked);
        localStorage.setItem(this.name, this.checked);
    }
}

checkedStorage();

function checkedStorage(){
    for(let i = 0; i < formFields.length; i++){
        if(formFields[i].type !== "submit"){
            if(formFields[i].type === "checkbox"){
                formFields[i].checked = localStorage.getItem(formFields[i].name);
            } else {
                formFields[i].value = localStorage.getItem(formFields[i].name);
            }
        }
    }

    attachEvents();
}

submitBtn.addEventListener("click", clearStorage);

function clearStorage(){
    localStorage.clear();
} */



//ПРОГРАММА ДЛЯ ВЕДЕНИЯ ЗАМЕТОК

/* let list = document.querySelector("#list");
let but = document.querySelector("button");

but.addEventListener("click", addNote);

function addNote(){
    let name = prompt("Имя записи", "");

    notes[name] = "";
    addToList(name);
    saveToStorage();
    list.value = name;
    current.value = notes[name];
}

function addToList(name){
    let option = document.createElement("option");
    option.textContent = name;
    list.append(option);
}

function saveToStorage(){
    localStorage.setItem("notes", JSON.stringify(notes));

}

let notes = JSON.parse(localStorage.getItem("notes")) || {"что купить": ""}

for(let name in notes){
    addToList(name);
}

let current = document.querySelector("#currentnote");
current.value = notes[list.value];

list.addEventListener("change", function(){
    current.value = notes[list.value];
});

current.addEventListener("change", function(){
    notes[list.value] = current.value;
    saveToStorage();
}) */



//sessionStorage.setItem("test", 1);
//console.log(sessionStorage.getItem("test"));

/* sessionStorage.setItem(
    "user",
    JSON.stringify({
        name: "Igor",
        age: 23,
        isDeveloper: true
    })
) */

//console.log(sessionStorage.getItem("user"));
//console.log("user", JSON.parse(sessionStorage.getItem("user")));

//sessionStorage.removeItem("test");

//sessionStorage.clear();


//СМЕНА ТЕМЫ НА САЙТЕ

// class ThemeSwitcher{
//     constructor(){
//         this.selectors = {switcherThemeButton: '[data-switcher]'};
//         this.thems = {
//             dark: 'dark',
//             light: 'light'
//         };

//         this.stateClasses = {isDarkTheme: "is-dark-theme"};

//         this.storageKey = "theme";

//         this.switchThemeButtonElement = document.querySelector(this.selectors.switcherThemeButton);

//         this.setInitialTheme();
//         this.bindEvents();
//     }

//     get isDarkThemeCached(){
//         return sessionStorage.getItem(this.storageKey) === this.thems.dark;
//     }

//     setInitialTheme(){
//         document.documentElement.classList.toggle(this.stateClasses.isDarkTheme, this.isDarkThemeCached);
//     }

//     onClick = () => {
//         sessionStorage.setItem(
//             this.storageKey,
//             this.isDarkThemeCached ? this.thems.light : this.thems.dark
//         )
//         document.documentElement.classList. toggle(this.stateClasses.isDarkTheme);
//     }

//     bindEvents(){
//         this.switchThemeButtonElement.addEventListener("click", this.onClick)
//     }
// }

//new ThemeSwitcher();