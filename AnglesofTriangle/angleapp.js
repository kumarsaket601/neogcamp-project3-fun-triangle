var firstAngle = document.querySelector("#first-angle");
var secondAngle = document.querySelector("#second-angle");
var thirdAngle = document.querySelector("#third-angle");
var submitBtn = document.querySelector("#submit-button");
var display = document.querySelector("#output");


function calculateAngle(first,second,third){

    var sumAngle = Number(first) + Number(second) + Number(third);
    
    return sumAngle;
}

function calculateAngleHandler(){
    
    
    var sumOfAngle = calculateAngle(firstAngle.value,secondAngle.value,thirdAngle.value);
    
    if(sumOfAngle === 180){

        display.innerText = "Yep! this input angle can form an triangle";
    }
    else{

        display.innerText = "Sorry! the inputed angle could not form an angle";
    }
    
}

submitBtn.addEventListener('click', calculateAngleHandler)
