$(document).ready(function () {

    var workHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

    for (var i = 0; i < workHours.length; i++) {
        var newEl = $("<div>");
        var timeEl = $("<div>");
        var planEl = $("<textarea>");
        var saveButton = $("<button>");

        newEl.attr("data-hour", workHours[i]);
        newEl.attr("class", "row");

        planEl.attr("class", "description col 10");
        timeEl.attr("class", "hour col-1");
        saveButton.attr("class", "savebtn col-1");

        $(".container").append(newEl)
        newEl.append(timeEl)
        newEl.append(planEl)
        newEl.append(saveButton)

        timeEl.text(workHours[i])
    }

})