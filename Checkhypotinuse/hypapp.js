var firstSide = document.querySelector("#first-side");
var secondSide = document.querySelector("#second-side");
var submitBtn =  document.querySelector("#submit-button");
var display = document.querySelector(".output");



function calculateHypo(first,second){

     var hypotonuse = Math.sqrt(Number(first*first) + Number(second*second));
     
     return hypotonuse;
}
function clickHandler(){

    
     var thirdSide = calculateHypo(firstSide.value,secondSide.value)
     
     display.innerText = "Hypotonuse is " + thirdSide + " cm";
     
     
};

submitBtn.addEventListener('click',clickHandler)