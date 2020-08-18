// create variables
var saveInfo = $("#saveButton");
var input = $("#eventInput");





//event listener for typing and saving boxes





//need somewhere to store info typed in box





$(saveInfo).on("click", function () {

    localStorage.setItem("text", input)
});







//need current time and date to update