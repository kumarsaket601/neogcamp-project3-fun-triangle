var baseOfTriangle = document.querySelector("#base");
var heightOfTriangle = document.querySelector("#height");
var outputDiv = document.querySelector(".display");
var submitBtn = document.querySelector("#submit-btn");

function calculateArea(baseOfTriangle,heightOfTriangle){

     var areaTraingle = (baseOfTriangle*heightOfTriangle)/2;
     
     return areaTraingle;
     
}

function areaOfTriangle(){
     
     if( Number(baseOfTriangle.value) >= 0 && Number(heightOfTriangle.value)) {

           var area = calculateArea(Number(baseOfTriangle.value),Number(heightOfTriangle.value));

    

      outputDiv.innerText = "Area of Triangle is " + area + " cm square";

     }else{

          outputDiv.innerText = "Please Provide with the positive  value";
     }

   
}

submitBtn.addEventListener("click", areaOfTriangle)
