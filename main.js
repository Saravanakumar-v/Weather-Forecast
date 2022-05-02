
function getWeatherDetails(id){
    var cityName = document.getElementById(id).value;
    
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://community-open-weather-map.p.rapidapi.com/weather?q=London%2Cuk&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=xml");
    xhr.setRequestHeader("X-RapidAPI-Host", "community-open-weather-map.p.rapidapi.com");
    xhr.setRequestHeader("X-RapidAPI-Key", "c3d1c7f152msh080f77e9063ce2bp1fbc12jsn8352894f719c");

    xhr.send(data);

}
