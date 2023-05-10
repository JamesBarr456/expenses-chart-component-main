import data from "./data.json" assert {type: "json"};

const fechaActual = new Date();
const nameDayWeek = ["sun","mon", "tue", "wed", "thu", "fri", "sat"];
let days = document.getElementsByClassName("barras__day"); 
let amounts = document.getElementsByClassName("barras__amount"); 
let barra = document.getElementsByClassName("barras__barra");


data.forEach( (element, index) => {
    
    if (element["day"] === nameDayWeek[fechaActual.getDay()]) {
        barra[index].classList.add("barras__barra--dayActual");
    };

    barra[index].style.height= `${element['amount']*3}px`;
    
    amounts[index].innerHTML = "$"+element["amount"];
    days[index].innerHTML =  element["day"];



    barra[index].addEventListener('mouseenter', () => {
        amounts[index].classList.add('barras__amount-activo');
      });
    barra[index].addEventListener('mouseleave', () => {
        amounts[index].classList.remove('barras__amount-activo');
   });


});

