var firstSide = document.querySelector("#first-side");
var secondSide = document.querySelector("#second-side");
var submitBtn = document.querySelector("#submit-button");
var display = document.querySelector(".output");



function calculateHypo(first, second) {

     var hypotonuse = Math.sqrt(Number(first * first) + Number(second * second));

     return hypotonuse;
}

function clickHandler() {

     if (Number(firstSide.value) != '' && Number(secondSide.value) != '') {
          if (Number(firstSide.value) > 0 && Number(secondSide.value) > 0) {

               var thirdSide = calculateHypo(Number(firstSide.value), Number(secondSide.value))

               display.innerText = "Hypotonuse is " + thirdSide + " cm";
          } else {
               display.innerText = "Please provide positive value";
          }
     } else {
          display.innerText = "Provide value in the input.";
     }




};

submitBtn.addEventListener('click', clickHandler)