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


let inputRub = document.querySelector("#rub");
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
        }
    })
} */