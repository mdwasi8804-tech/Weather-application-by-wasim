function getCurrentLocation() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by this browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        function(position) {

            var lat = position.coords.latitude;
            var lon = position.coords.longitude;

            var apiKey = "6faa5428c6e8fccf639179440551ed5c";

            var url = "https://api.openweathermap.org/data/2.5/weather?lat="
                      + lat + "&lon=" + lon + "&units=metric&appid=" + apiKey;

            fetch(url)
            .then(response => response.json())
            .then(data => {
                showWeatherData(data);
            })
            .catch(error => {
                alert("Error getting weather for location");
            });

        },

        function(error) {
            alert("Please allow location permission in your browser settings.");
        }
    );
}