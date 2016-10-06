// index.js

$(document).ready(function () {
    "use strict";

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

    $("#gitHubSearchForm").on("submit", function () {

        var searchPhrase = $("#searchPhrase").val();
        var useStars = $("#useStars").val();
        var languageChoice = $("#languageChoice").val();

        if (searchPhrase) {
            resultList.text("Performing search...");

            var gitHubSearchUrl = "https://api.github.com/search/repositories?q=" + encodeURIComponent(searchPhrase);

            if (languageChoice != "All") {
                gitHubSearchUrl += "+language:" + encodeURIComponent(languageChoice);
            }

            if (useStars) {
                gitHubSearchUrl += "&sort=stars";
            }

            $.ajax({
                type: "GET",
                url: gitHubSearchUrl,
                success: function (result) {
                    displayResults(result.items);
                },
                error: function (err) {
                    console.log("Failed to query GitHub: ");
                }
            }).done(function () {
                console.log("GET request is done!");
            });
        }

        // Returning false cancels out the default form handler so that we, the developer, 
        // can handle the form action ourselves.
        return false;
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



