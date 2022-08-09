
function displayTemperature(response){
    console.log(response.data)
}
let apiKey = "ef0245cf2c991c7cb4169246b7a9ad19";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London &appid=${apiKey}&units=metric`; 
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
