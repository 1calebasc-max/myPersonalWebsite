document.addEventListener("DOMContentLoaded", function () {

    const educationButton = document.getElementById("educationSearch");

    if (educationButton) {

        educationButton.addEventListener("click", function () {

            const major = document.getElementById("major").value.trim();
            const grade = document.getElementById("grade").value;

            if (major === "" || grade === "") {
                alert("Please enter your major and grade level.");
                return;
            }

            localStorage.setItem("major", major);
            localStorage.setItem("grade", grade);

            window.location.href = "education-results.html";

        });

    }



    const communityButton = document.getElementById("communitySearch");

    if (communityButton) {

        communityButton.addEventListener("click", function () {

            const city = document.getElementById("city").value.trim();
            const state = document.getElementById("state").value.trim();

            if (city === "" || state === "") {
                alert("Please enter your city and state.");
                return;
            }

            localStorage.setItem("city", city);
            localStorage.setItem("state", state);

            window.location.href = "community-results.html";

        });

    }



    const googleEducationSearch = document.getElementById("googleEducationSearch");

    if (googleEducationSearch) {

        const major = localStorage.getItem("major") || "";
        const grade = localStorage.getItem("grade") || "";

        document.getElementById("majorResult").textContent = major;
        document.getElementById("gradeResult").textContent = grade;

        googleEducationSearch.addEventListener("click", function () {

            const query =
                major +
                " " +
                grade +
                " scholarships internships summer programs free opportunities";

            window.open(
                "https://www.google.com/search?q=" + encodeURIComponent(query),
                "_blank"
            );

        });

    }



    const googleCommunitySearch = document.getElementById("googleCommunitySearch");
    const findHelpSearch = document.getElementById("findHelpSearch");

    if (googleCommunitySearch) {

        const city = localStorage.getItem("city") || "";
        const state = localStorage.getItem("state") || "";

        document.getElementById("cityResult").textContent = city;
        document.getElementById("stateResult").textContent = state;

        googleCommunitySearch.addEventListener("click", function () {

            const query =
                "community resources food banks shelters healthcare libraries legal aid near " +
                city +
                " " +
                state;

            window.open(
                "https://www.google.com/search?q=" + encodeURIComponent(query),
                "_blank"
            );

        });

        findHelpSearch.addEventListener("click", function () {

            const query = city + " " + state;

            window.open(
                "https://www.findhelp.org/search_results/" + encodeURIComponent(query),
                "_blank"
            );

        });

    }

});