/* let request = new XMLHttpRequest();
request.open("GET", "data.txt");  // method, url, async, login, password
 
request.send();
 
request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
        document.writeln(request.response);        
    }
} */


/* let request = new XMLHttpRequest();
request.open("GET", "links.json"); 

request.send();

request.onreadystatechange = function(){
    if(request.readyState == 4 && request.status == 200){
        let items = JSON.parse(request.response);
        console.log(items);
        
        let output = "";
        for(let i = 0; i < items.links.length; i++){
            for(let key in items.links[i]){
                output += '<li><a href="'+ items.links[i][key] + '">' + key +'</a></li>'
            }
            document.querySelector("#links").innerHTML = output;
        }
    }
} */


<<<<<<< HEAD
let inputRub = document.querySelector("#rub");
=======
/* let inputRub = document.querySelector("#rub");
>>>>>>> 376c37e (ajaxNew)
let inputUsd = document.querySelector("#usd");
let inputEur = document.querySelector("#eur");

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "current.json"); 
    request.send();

    request.addEventListener("readystatechange", () => {
        if (request.readyState === 4) {
            if (request.status === 200) { 
                console.log(request.response); 
                let data = JSON.parse(request.response); 
                if (inputRub.value && !isNaN(inputRub.value)) {
                    inputUsd.value = (inputRub.value / data.current.usd).toFixed(2); 
                    inputEur.value = (inputRub.value / data.current.eur).toFixed(2); 
                } else {
                    inputUsd.value = "Ошибка";
                    inputEur.value = "Ошибка";
                }
            }    
        } else { 
            inputUsd.value = "Что-то пошло не так"; 
            inputEur.value = "Что-то пошло не так";  
        }
}); 
});  
<<<<<<< HEAD
 
=======
  */
>>>>>>> 376c37e (ajaxNew)


/* let inputRub = document.querySelector("#rub");
let inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();
    request.open("GET", "current.json"); 
    request.send();

    request.addEventListener("load", () => {
        if(request.status == 200){
            console.log(request.response);
            let data = JSON.parse(request.response);
            inputUsd.value = (inputRub.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = "Что-то пошло не так";
        }
    })
}) */


/* document.querySelector("button").addEventListener("click", req);

function req(){
    let request = new XMLHttpRequest();
    request.open("GET", "db.json"); 
    request.send();

    request.addEventListener("load", () => {
        if(request.status === 200){
            let data = JSON.parse(request.response);
            console.log(data);
            
            for(let i = 0; i < data.people.length; i++){
                let card = document.createElement("div");
                card.classList.add('card');

                let icon;
                if(data.people[i].pol == "male"){
                    icon = "icons/mars.png";
                }else{
                    icon = "icons/female.png";
                }

                card.innerHTML = `
                    <img src="${data.people[i].photo}">
                    <div class="name">${data.people[i].name} ${data.people[i].surname}</div>
                    <div class="pol">
                        <img src="${icon}">
                    </div>
                    <div class="age">${data.people[i].age}</div>
                `;

                document.querySelector(".app").append(card);
            }
<<<<<<< HEAD
        }
    })
} */
=======
        } else {
            //console.log("Что-то пошло не так");
            console.error("Что-то пошло не так");
        } 
    })
    this.remove(); // удаляет кнопку "Клик", когда функция отработала
} */



/* let form = document.form1; //доступ к форме

let message = {
    loading: "Загрузка",
    success: "Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так",
};

form.addEventListener("submit", (e) => {
    e.preventDefault(); //отменяем действие элемента по умолчанию
    
    let stmsg = document.createElement("div");
    stmsg.textContent = message.loading;
    form.append(stmsg);

    let request = new XMLHttpRequest();
    request.open("POST", "server.php");


    let formData = new FormData(form); //собирает данные из полей формы
    request.send(formData); //отправляем данные на сервер php

    request.addEventListener("load", function(){
        if(request.status === 200){
            console.log(request.response);
            stmsg.textContent = message.success;
            form.reset();
            setTimeout(() =>{
                stmsg.remove();
            }, 3000);
        }else{
            stmsg.textContent = message.failure;
        }
    })
}) */



// ============ ТОВАРЫ ===================

let request = new XMLHttpRequest();
request.open("GET", "goods.json");
request.send();

let res = document.querySelector(".result");
let items, prices;

request.addEventListener("load", () => {
    if(request.status === 200){
        items = JSON.parse(request.response);
        //console.log(items);

        items.forEach(item => {
            (typeof item.price === "string") ? prices = item.price : prices = item.price.new;


            res.innerHTML += `
                <h3>${item.name}</h3>
                <div>${prices}</div>
                <div>${item.ratingRevievs}</div>
                <hr>
            `;
        });

        document.querySelector(".feet").addEventListener("click", () => sortByFeedbacks(items));

        document.querySelector(".price").addEventListener("click", () => sortByPrice(items));
    }
});

function sortByPrice(arr){
    const temp = JSON.parse(JSON.stringify(arr));
    temp.forEach(item => {
        if(typeof item.price === "string"){
            item.price = +item.price.replace(/\D/g,"")
        }else{
            item.price = +item.price.new.replace(/\D/g,"")
        }
    });
    
    temp.sort((a,b)=> a.price > b.price ? 1 : -1);
    res.innerHTML = "";

    let mas = ["рублей", "рубль", "рубля"];


    temp.forEach(item => {
            res.innerHTML += `
                <h3>${item.name}</h3>
                <div>Цена: ${item.price} ${countItems(item.price)(mas)} </div>
                <hr>
            `;
        });    
}

function sortByFeedbacks(arr){
    const temp = JSON.parse(JSON.stringify(arr));
    //temp[1].price = "0";
    //console.log(temp[1]);
    temp.forEach(item => {
        item.ratingRevievs = +item.ratingRevievs.replace(/\D/g,"");
        //console.log(item.ratingRevievs);
    })
    
    temp.sort((a,b)=> a.ratingRevievs > b.ratingRevievs ? 1 : -1);
    //console.log(temp);
    res.innerHTML = "";

    let mas = ["отзывов", "отзыв", "отзыва"];



    temp.forEach(item => {
            res.innerHTML += `
                <h3>${item.name}</h3>
                <div>${item.ratingRevievs} ${countItems(item.ratingRevievs)(mas)}</div>
                <hr>
            `;
        });
};

function countItems(num){
    let n = num % 10;
    let m = num % 100;
    let chislo = n == 1 && m != 11 ? 1 : 2 <= n && n <= 4 && !(12 <= m && m <= 14) ? 2 : 0;
    return arr => arr[chislo];
}
>>>>>>> 376c37e (ajaxNew)
