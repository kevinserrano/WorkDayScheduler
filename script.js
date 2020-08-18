// create variables
var saveInfo = document.getElementById("saveButton");
var input = document.getElementById("eventInput");





//event listener for typing and saving boxes

input.addEventListener("click", function () {


});




//need somewhere to store info typed in box





saveInfo.addEventListener("click", function () {

    localStorage.setItem("text", input)
});







//need current time and date to update