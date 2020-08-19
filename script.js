$(document).ready(function () {

    var workHours = [9, 10, 11, 12, 1, 2, 3, 4, 5]
    var todaysDate = moment().format("dddd, MMMM Do, YYYY");
    var localTime = moment().format("H");

    console.log(localTime)

    $("#currentDay").append(todaysDate)




    for (var i = 0; i < workHours.length; i++) {

        if (workHours[i] / 12 > 1) {

            console.log(workHours[i]);
            timeDay = "PM";
            console.log(workHours[i] * 10);
            hour = workHours[i] - 12;
        } else {
            var hour = workHours[i];
            if (workHours[i] == 12) {
                timeDay = "PM"
            } else {
                timeDay = "AM"
            };
        };




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

        timeEl.text(hour + timeDay)
    }
    if (workHours[i] == localTime) {
        planEl.attr("class", "description col 10 present")
    } else if (workHours[i] < localTime) {
        planEl.attr("class", "description col 10 past")
    } else {
        planEl.attr("class", "description col 10 future")
    }


})