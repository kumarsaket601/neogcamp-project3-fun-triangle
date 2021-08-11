var firstAngle = document.querySelector("#first-angle");
var secondAngle = document.querySelector("#second-angle");
var thirdAngle = document.querySelector("#third-angle");
var submitBtn = document.querySelector("#submit-button");
var display = document.querySelector(".output");


function calculateAngleHandler(){
    
    
    var sumOfAngle =  Number(firstAngle.value) + Number(secondAngle.value) + Number(thirdAngle.value);
    
    if(sumOfAngle === 180){
         
        display.innerText = "Using this you can make an triangle";
    }
    else{
        display.innerText = "Oops! sorry triangle can not be made";
    }
}

submitBtn.addEventListener('click', calculateAngleHandler)
