// FETCH DEMO
let weatherKey = "cdecd2d014031662f81622cfc916ac8b"
let toCelsius = "&units=metric";
let inputCity;
var submitBtn = $("#submitBtn");
var citySelector = $("#city");
var currentInfo = $("#current-info");

// // FUNCTION TO WRITE TO DOM

// FUNCTION CALL
function callAPI() {  

    inputCity = $("#city-input").val();
    console.log("Input city is: ", inputCity);

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

        citySelector.text(requestedCity);
        currentInfo.text("Current Temperature: " + currentTemp);
    });
};
submitBtn.click(callAPI);
