
const section = document.querySelector("section");
const icons = document.querySelector(".icon");
const amm = document.querySelector(".am-pm");
const moon= document.querySelector(".fa-moon");
const sun= document.querySelector(".fa-sun");
const cont= document.querySelector(".container");
 

               //       Dark theme

icons.addEventListener("click",darker);

function darker(){

section.classList.toggle("dark");
//sun.classList.toggle("cha");
//moon.classList.toggle("chaa");
//cont.classList.toggle("darkk");
 
 
}

                  //            function  

setInterval(()=>{

 
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();


 if (hours  > 12){
   amm.innerHTML = "PM";
        hours=hours-12;
  }
 

     if (hours == 0){

        hours=12;
    }
    document.querySelector(".hour_num").innerHTML=hours;

    document.querySelector(".min_num").innerHTML=min;

    document.querySelector(".sec_num").innerHTML=sec;


},1000);


