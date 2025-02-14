"use strict";

window.addEventListener("load", function () {
    let btnSearch = document.querySelector("#search");
    let isbn = [];
    let errorDiv = document.querySelector("#resultError");

    btnSearch.addEventListener("click", function () {
        isbn = document.querySelector("#isbn").value;
        let country = document.querySelector("#resultCountry");
        let publisher = document.querySelector("#resultPublisher");
        let title = document.querySelector("#resultTitle");

        // Clear the divs with each search
        document.querySelector("#isbn").value = "";
        country.innerHTML = "";
        publisher.innerHTML = "";
        title.innerHTML = "";
        errorDiv.innerHTML = "";

        // Check the length of the ISBN
        if (isbn.length == 13) {
            if (isbn.substring(0, 3) === "978") {
                if (isbn.substring(3, 5) === "85") {
                    // Brazil
                    country.innerHTML = `<strong>Country: </strong> Brazil`;
                    publisher.style.color = "blue";
                    title.style.color = "blue";
                    if (isbn.substring(5, 9) === "7522") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Novatec Publisher`;
                        if (isbn.substring(9, 12) === "248") {
                            title.innerHTML = `<strong>Book: </strong> JavaScript - Programmer's Guide`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else if (isbn.substring(5, 9) === "7608") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Alta Books`;
                        if (isbn.substring(9, 12) === "205") {
                            title.innerHTML = `<strong>Book: </strong> JavaScript and DHTML Practical Guide`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else {
                        publisher.innerHTML = `<strong>Publisher not registered!</strong>`;
                    }
                } else if (isbn.substring(3, 5) === "80") {
                    // United States
                    country.innerHTML = `<strong>Country: </strong> United States`;
                    publisher.style.color = "red";
                    title.style.color = "red";
                    if (isbn.substring(5, 9) === "1947") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Oxford University Press`;
                        if (isbn.substring(9, 12) === "393") {
                            title.innerHTML = `<strong>Book: </strong> Business Result Pre-Intermediate Student’s Book`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else if (isbn.substring(5, 9) === "4082") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Person`;
                        if (isbn.substring(9, 12) === "369") {
                            title.innerHTML = `<strong>Book: </strong> Market Leader Student’s Book - 3rd Edition`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else {
                        publisher.innerHTML = `<strong>Publisher not registered!</strong>`;
                    }
                } else if (isbn.substring(3, 5) === "30") {
                    // Germany
                    country.innerHTML = `<strong>Country: </strong> Germany`;
                    publisher.style.color = "orange";
                    title.style.color = "orange";
                    if (isbn.substring(5, 9) === "2675") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Klett`;
                        if (isbn.substring(9, 12) === "940") {
                            title.innerHTML = `<strong>Book: </strong> Team Deutsch A1 Coursebook`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else if (isbn.substring(5, 9) === "6035") {
                        publisher.innerHTML = `<strong>Publisher: </strong> Gilde`;
                        if (isbn.substring(9, 12) === "210") {
                            title.innerHTML = `<strong>Book: </strong> Einfach Stark: Coursebook A1`;
                        } else {
                            title.innerHTML = `<strong>Title not found!</strong>`;
                        }
                    } else {
                        publisher.innerHTML = `<strong>Publisher not registered!</strong>`;
                    }
                } else {
                    // Invalid ISBN
                    errorDiv.innerHTML = `<strong>Wrong country information!!</strong>`;
                }
            } else {
                // Invalid GS1 prefix
                alert("The GS1 prefix provided is invalid, please check and try again.");
            }
        } else if (isbn.length == 0) {
            // ISBN not provided
            alert("Please provide the ISBN.");
        } else {
            // Invalid number of digits
            alert("The ISBN provided has an invalid number of digits, please check and try again.");
        }
    });
});
