var firstSide = document.querySelector("#first-side");
var secondSide = document.querySelector("#second-side");
var submitBtn =  document.querySelector("#submit-button");
var display = document.querySelector(".output");

function clickHandler(){

    
     var thirdSide = Math.sqrt(Math.pow(firstSide.value,2) + Math.pow(secondSide.value,2));
     
     display.innerText = "c=" + thirdSide;
     
     
};

submitBtn.addEventListener('click',clickHandler)