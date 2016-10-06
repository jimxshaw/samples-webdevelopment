// index.js

$(document).ready(function () {
    "use strict";

    var gitHubSearch = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";

    $.ajax({
        type: "GET",
        url: gitHubSearch,
        success: function (result) {
            displayResults(result.items);
        },
        error: function (err) {
            console.log("Failed to query GitHub: ");
        }
    }).done(function () {
        console.log("GET request is done!");
    });

    var resultList = $("#resultList");

    resultList.text("This is from jQuery");

    var toggleButton = $("#toggleButton");

    toggleButton.on("click", function () {
        resultList.toggle(500);

        if (toggleButton.text() == "Hide") {
            toggleButton.text("Show");
        }
        else {
            toggleButton.text("Hide");
        }
    });

    function displayResults(results) {
        resultList.empty();

        $.each(results, function (i, item) {
            var newResult = $("<div class='result'>" +
            "<div class='title'>" + item.name + "</div>" +
            "<div>Language: " + item.language + "</div>" +
            "<div>Owner: " + item.owner.login + "</div>" +
            "</div>");

            newResult.hover(function () {
                // Make it darker
                $(this).css("background", "lightgray");
            }, 
            function () {
                // Reverse the color
                $(this).css("background", "transparent");
            });

            resultList.append(newResult);
        });
    }

});



