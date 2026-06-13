"use strict";

//СПИСОК ЗАДАЧ

/* let input = document.querySelector("#input");
let list = document.querySelector("#list");

input.addEventListener("keypress", function(event){
    if(event.key == 'Enter'){
        let li = document.createElement("li");
        let task = document.createElement("span");
        task.classList.add('task');
        task.textContent = input.value;

        task.addEventListener("dblclick", function(){
            let text = this.textContent; //забираю данные
            this.textContent = ""; // удаляю старую задачу

            let edit = document.createElement("input"); // создаю инпут
            edit.value = text; // в инпут кладу данные старй задачи
            this.append(edit); // тут добавить в конце

            let self = this;
            edit.addEventListener("keypress", function(event){
                if(event.key == "Enter"){
                    self.textContent = edit.value;
                }
            })
        })
        li.append(task);

        let remove = document.createElement("span");
        remove.textContent = "Удалить";
        remove.classList.add('remove');
        remove.addEventListener("click", function(){
           //li.remove();
           remove.parentNode.remove();
        })
        li.append(remove);

        let mark = document.createElement("span");
        mark.textContent = "Выполнено";
        mark.classList.add("mark");
        mark.addEventListener("click", function(){
            mark.parentNode.classList.toggle("done");
        })
        li.append(mark);

        list.append(li);
        input.value = "";
    }
}) */



//ЧЕКБОКС 

/* let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", function(){
    document.body.style.background = checkbox.checked ? "mediumpurple" : "";
}) */


//ВЫБОР ЯЗЫКА

/* let btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let checkboxes = document.querySelectorAll('input[name="language"]:checked');
    let selected = Array.from(checkboxes).map(checkbox => checkbox.value)
    alert("Выбранные языки: " + selected.join(", "));
}) */


//ВЫБОР 3 ВАРИАНТОВ С БЛОКИРОВКОЙ ДРУГИХ

//Вариант 1

/* let input = document.querySelectorAll("input");
let form1 = document.forms.form1;

for(let i = 0; i < form1.length; i++){
    input[i].addEventListener('click', checkAll);
}

let numChecked;
function checkAll(){
    numChecked = 0;
    for(let i = 0; i < form1.length; i++){
        if(input[i].checked && input[i].type == "checkbox"){
            numChecked++;
        }
    }

    if(numChecked == 3){
        for(let i = 0; i < form1.length; i++){
            if(!input[i].checked && input[i].type == "checkbox"){
                input[i].disabled = true;
            }
        }
    }else{
        for(let i = 0; i < form1.length; i++){
            input[i].disabled = false;
        }
    }   
} */


//Вариант 2

/* let input = document.querySelectorAll("input[type='checkbox']");
let form1 = document.forms.form1;

for(let i = 0; i < input.length; i++){
    input[i].addEventListener('click', checkAll);
}

let numChecked;
function checkAll(){
    numChecked = 0;
    for(let i = 0; i < input.length; i++){
        if(input[i].checked){
            numChecked++;
        }
    }

    if(numChecked == 3){
        for(let i = 0; i < input.length; i++){
            if(!input[i].checked){
                input[i].disabled = true;
            }
        }
    }else{
        for(let i = 0; i < input.length; i++){
            input[i].disabled = false;
        }
    }   
} */


//Домашнее задание 

let form1 = document.forms.form1; // получаю доступ к форме с именем form1
let input = document.querySelectorAll("input[type='radio']"); //Получаю доступ ко всем инпутам с типом радио - NodeList - это не чистый массив

form1.addEventListener('submit', function(event){
    event.preventDefault(); //отмена перезагрузки страницы при сабмит
    let a;  

    for(let i = 0; i < input.length; i++){ //беру длину инпутов, чтобы не брать кнопку

        if(input[i].checked){
            a = input[i]; // храню инфрмацию в глобальной переменной, если тут цикл закончится, то информация будет жить в переменной
            break; //если нашли отмеченный инпут то прерываем цикл
        }//i[0] - не отмечен, тогда в переменную не добавляется идем дальше по каждому инпуту, когда нашли отмеченный чекед, то брейк
    }

        if(a){
            alert("Выбран: " + a.value);
        }else{
            alert("Ничего не выбрано");
        }   
});
