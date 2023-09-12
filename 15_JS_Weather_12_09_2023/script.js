const API_KEY = '221b2fab4095e6fb7b5e225125fc60c0';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const locationInput = document.getElementById('locationInput');
const getWeatherButton = document.getElementById('getWeatherButton');
const weatherContainer = document.getElementById('weatherContainer');

getWeatherButton.addEventListener('click', () => {
    const location = locationInput.value.trim();
    
    if(location) {
        const apiUrl = `${BASE_URL}?q=${location}&appid=${API_KEY}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => displayWeatherDetails(data))

    }
})

function displayWeatherDetails(data) {
    weatherContainer.innerHTML = "";

    const country = document.createElement("h2");
    country.innerHTML = data.sys.country;

    const dayTime = document.createElement("p");
    dayTime.innerHTML = `<strong> current date and time:</strong> ${today = new Date().toLocaleString()}`;

    const sunrise = document.createElement("p");
    sunrise.innerHTML = `<strong> sunrise: </strong> ${getTimeFromMS(new Date(data.sys.sunrise))}`;

    const sunset = document.createElement("p");
    sunset.innerHTML = `<strong> sunset: </strong> ${getTimeFromMS(new Date(data.sys.sunset))}`;

    const temp = document.createElement("p");
    temp.innerHTML = `<strong> temp: </strong> ${data.main.temp - 273,15}`;

    const pressure = document.createElement("p");
    pressure.innerHTML = `<strong> pressure: </strong> ${data.main.pressure}`;

    weatherContainer.append(country, dayTime, sunrise, sunset, temp, pressure);
}

function getTimeFromMS(ms) {
    return `${ms.getHours()}:${ms.getMinutes()}:${ms.getSeconds()}`;
}