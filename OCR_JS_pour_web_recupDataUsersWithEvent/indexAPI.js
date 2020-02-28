window.addEventListener("DOMContentLoaded", function () {

    function askWeather() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
                var response = JSON.parse(this.responseText);
                document.getElementById("weather-result").innerHTML = response.current_condition.condition;
            }
        };
        request.open("GET", "https://www.prevision-meteo.ch/services/json/annecy");
        request.send();
    }

    document.querySelector("#ask-weather").addEventListener("click", function() {
        askWeather();
    });
    

    myInput.addEventListener('input', function(e) {
        var value = e.target.value;
        if(value.startWith('Hello')) {
            isValid = true;
        }
        else {
            isValid = false;
        }
    });
});