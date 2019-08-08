const weather = new Weather();
const ui = new UI();

//get city name from the search inpu
document.getElementById("search-form").addEventListener("submit", e => {
  e.preventDefault();
  const city = ui.getCityName();
  getWeather(city);
});

function getWeather(city) {
  weather.getWeather(city).then(result => console.log(result));
}
