
function getWeatherDetails(id){
    var cityName = document.getElementById(id).value;
    alert(cityName);

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
            'X-RapidAPI-Key': 'ffdeab80a5msh9dd3cac123a56aep13d49fjsnb8d94918ecc9'
        }
    };
    
    fetch('https://weatherapi-com.p.rapidapi.com/ip.json?q= cityName', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}