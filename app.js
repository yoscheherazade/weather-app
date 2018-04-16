// Initialize Storage
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData();

// Initialize Weather Object
const weather = new Weather(weatherLocation.city, weatherLocation.state);

// Initialize UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('w-change-btn').addEventListener('click', e => {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  // Change location
  weather.changeLocation(city, state);

  // Set location in LS
  storage.setLocationData(city, state);

  // Get and display weather
  getWeather();

  // Close modal bootstrap function
  $('#locModal').modal('hide');
});

function getWeather() {
  weather
    .getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}

// const toggleFahrenheit = document
//   .getElementById('fahrenheit')
//   .addEventListener('click', setFahrenheit);

// function setCelcius() {
//   var cel = (temp - 32) * 5 / 9;
//   return cel + '° C';
// }

// function setFahrenheit() {
//   return temp + '° F';
// }
