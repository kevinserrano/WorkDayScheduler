$(document).ready(function () {

    var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]
    var todaysDate = setInterval(Date());

    $("#currentDay").append(todaysDate)


    for (var i = 0; i < workHours.length; i++) {
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var planEl = $("<textarea>");
        var saveButton = $("<button>");
        var iconEl = $("<i>");

        newEl.attr("data-hour", workHours[i]);
        newEl.attr("class", "row");

        planEl.attr("class", "description col 10");
        timeEl.attr("class", "hour col-1");
        saveButton.attr("class", "saveBtn col-1");
        iconEl.attr("class", "far fa-save");


        $(".container").append(newEl)

        newEl.append(timeEl)
        newEl.append(planEl)
        newEl.append(saveButton)
        saveButton.append(iconEl)

        timeEl.text(workHours[i])
    }

})