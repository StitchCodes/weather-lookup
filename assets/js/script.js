// FETCH DEMO
let weatherKey = "cdecd2d014031662f81622cfc916ac8b"
let toCelsius = "&units=metric";
let inputCity = 'London';

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputCity + toCelsius + '&APPID=' + weatherKey, {
    method: 'GET',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // LOCAL VARS TO STORE DATA
        var requestedCity = data.name;
        var currentTemp = data.main.temp;
        var maxTemp = data.main.temp_max;
        var minTemp = data.main.temp_min;

        // TEST CONSOLE.LOG FOR DATA VARS
        console.log(requestedCity);
        console.log(currentTemp);
        console.log(maxTemp);
        console.log(minTemp);


        // FUNCTION TO WRITE TO DOM
        function displayResults() {
            // LOCAL SCOPES VARS
            var citySelector = $("#city");
            var currentInfo = $("#current-info");

            // STARTING NEW CODE FOR THIS SECTION 

            // END OF NEW CODE FOR THIS SECTION
            citySelector.text(requestedCity);
            currentInfo.text("Current Temperature: " + currentTemp);
        };

        // FUNCTION CALL
        displayResults();
    });