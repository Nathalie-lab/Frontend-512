"use strict";

//JSON

/* let info = '{"first_name":"Ivan","age":36,"mother":{"name":"Olga","age":58},"children":["Kate","Igor","Misha"],"married":true,"dog":null}';

console.log(info);

let person = JSON.parse(info);
console.log(person);

person.first_name = "Peter";
document.writeln(person.first_name + "<br>"); */

/* delete person.age; //удаляем

    for(let i in person){
        document.writeln(i + ": " + person[i] + "<br>")
    };

    person.work = "programmer";
    document.writeln("<br>");
    for(let i in person){
        document.writeln(i + ": " + person[i] + "<br>")
    }; */

/* document.writeln("<br>");
delete person.children[1];
document.writeln(person.children + "<br>");

document.writeln("<br>");
person.children.splice(1,1);
document.writeln(person.children + "<br>");

document.writeln("<br>");
person.children.push("Ira");
document.writeln(person.children + "<br>");

let personString = JSON.stringify(person);
console.log(personString); */


//объект JavaScript
/* const user = {
    name: "Вадим",
    surname: "Ветров",
    age: 23,
    city: "Москва"
};

//const json = JSON.stringify(user);
const json = JSON.stringify(user, ["name", "age"], 2);//третий параметр форматирует сколько пробелов табуляции будет
console.log(json); */



/* function parseJSON(jsonString, value = {}){
    try{
        return JSON.parse(jsonString);
    }catch(error){
        console.log("Failed to parse JSON:", error.message);
        return value;
    }
}

const validJSON = '{"name": "Igor", "age": 30}';
const invalidJSON = '{"name": "Igor", age: 30}';

console.log(parseJSON(validJSON));
console.log(parseJSON(invalidJSON)); */


if(navigator.cookie === false){
    alert("Cookies отключены")
}else{
    alert("Cookies включены");
};

document.cookie = "user=Сергей";
alert(document.cookie);