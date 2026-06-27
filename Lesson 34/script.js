/* //let box = document.querySelector(".box");

/* let width = box.clientWidth;
let height = box.clientHeight; */

/* let width = box.offsetWidth;
let height = box.offsetHeight; */

/* let width = box.scrollWidth;
let height = box.scrollHeight; */

//console.log(width, height);

//Свернуть и развернуть блок
/* let flag = 1;
let hh = box.scrollHeight;
let off = box.offsetHeight;

document.querySelector("button").addEventListener("click", function(){  */
/*     if(flag == 1){
        box.style.height = hh + "px";
        flag = 0;
    } else {
        box.style.height = off + "px";
        flag = 1;
    } */

    //console.log(box.scrollTop);
    //console.log(box.getBoundingClientRect());
    //console.log(box.getBoundingClientRect().top);
    //console.log("offsetTop", box.offsetTop);
/*     if(!flag){
        box.style.overflow = "hidden";
    } else{
        box.style.overflow = "";
    }
    flag = !flag;
})

let win = null;


let open = document.querySelector("#show");
open.addEventListener("click", function(){
    //window.open("https://yandex.ru");
    win = window.open(
        "newFile.html", "new_window",
        "width=420,height=220,left=200,top=200,resizable=yes",
    );
    console.log(win);
})

let close = document.querySelector("#close");
close.addEventListener("click", function(){
    if(typeof win == "object"){
        win.close();
    }
}) */