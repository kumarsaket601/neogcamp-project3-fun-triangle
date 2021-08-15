var baseOfTriangle = document.querySelector("#base");
var heightOfTriangle = document.querySelector("#height");
var outputDiv = document.querySelector(".display");
var submitBtn = document.querySelector("#submit-btn");

function calculateArea(baseOfTriangle,heightOfTriangle){

     var areaTraingle = (baseOfTriangle*heightOfTriangle)/2;
     
     return areaTraingle;
     
}

function areaOfTriangle(){

    var area = calculateArea(Number(baseOfTriangle.value),Number(heightOfTriangle.value));

    

      outputDiv.innerText = "Area of Triangle is " + area + " cm square";

}

submitBtn.addEventListener("click", areaOfTriangle)
