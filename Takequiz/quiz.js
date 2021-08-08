var quizForm = document.querySelector(".quiz-form");

var submitForm =  document.querySelector("#submit-btn");
var outputDiv =  document.querySelector(".output");

var correctAnswer = ["yes","no","yes","yes","yes", "Isosceles","30"];

function calculateScrore(){
    let scrore = 0;
    let index = 0;
    var formResult = new FormData(quizForm);
    for(let value of formResult.values()){
        if(value === correctAnswer[index]){
            scrore = scrore + 1;
        }
        index = index + 1;
    }
    outputDiv.innerText = "Your scrore is  " + scrore + ".";
}

submitForm.addEventListener("click", calculateScrore)