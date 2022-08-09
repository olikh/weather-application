
function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let days = [ "Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Suturday"];
    let day = days[date.getDay()];
return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response){
    console.log(response.data.main.temp);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    humidityElement.innerHTML = response.data.main.humidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
}
let apiKey = "ef0245cf2c991c7cb4169246b7a9ad19";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London &appid=${apiKey}&units=metric`; 
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
