const API_KEY = "cc84f5299f28c104b9b408208a3fff85";
const URL = 'https://api.openweathermap.org/data/2.5';
function handleFormSubmit(event) {
  //handle submit event
  fetchCurrentWeather(document.getElementById('city').value)
  fetchFiveDayForecast(document.getElementById('city').value)
}

function fetchCurrentWeather(city) {
  //fetch current weather based on city
  city = city.replace(' ', '+');
  fetch(`${URL}/weather?q=${city}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(displayCurrentWeather)

}

function displayCurrentWeather(json) {
  document.getElementById('temp').innerHTML = json.main.temp;
  document.getElementById('low').innerHTML = json.main.temp_min;
  document.getElementById('high').innerHTML = json.main.temp_max;
  document.getElementById('humidity').innerHTML = json.main.humidity;
  document.getElementById('cloudCover').innerHTML = json.clouds.all;
}

function fetchFiveDayForecast(city) {
  //fetch five day forecast data based on city
  fetch(`${URL}/forecast?q=${city}&APPID=${API_KEY}`)
    .then(response => response.json())
    .then(displayFiveDayForecast)
}

function displayFiveDayForecast(json) {
  //render five day forecast data to the DOM using provided IDs and json from API
  for(item of json.list) {
    detail = document.createElement('div');
    detail.innerHTML = item.dt_txt + item.main.humidity + item.main.temp;
    document.getElementById('aside').appendChild(detail);
  }   
}

function createChart(json) {
  //Bonus: render temperature chart using five day forecast data and ChartJS
}

document.addEventListener('DOMContentLoaded', function() {
  //add event listener here for form submission
  document.getElementById('submitBtn').addEventListener('click', handleFormSubmit)
})