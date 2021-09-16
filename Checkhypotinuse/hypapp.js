var firstSide = document.querySelector("#first-side");
var secondSide = document.querySelector("#second-side");
var submitBtn =  document.querySelector("#submit-button");
var display = document.querySelector(".output");



function calculateHypo(first,second){

     var hypotonuse = Math.sqrt(Number(first*first) + Number(second*second));
     
     return hypotonuse;
}
function clickHandler(){

    if(Number(firstSide.value) >= 0 && Number(secondSide.value)){

         var thirdSide = calculateHypo(Number(firstSide.value),Number(secondSide.value))
     
     display.innerText = "Hypotonuse is " + thirdSide + " cm";
    }
    
     else{
          display.innerText = "Please Provide positive value";
     }
     
     
};

submitBtn.addEventListener('click',clickHandler)