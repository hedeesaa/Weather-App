const weather = new Weather();
const ui = new UI();
const storage = new Storage();

//startup
const defCity = storage.getFromLocalStorage();
getWeather(defCity);

//get city name from the search inpu
document.getElementById("search-form").addEventListener("submit", e => {
  e.preventDefault();
  const city = ui.getCityName();
  getWeather(city);
  storage.setToLocalStorage(city);
});

// get weather
function getWeather(city) {
  weather.getWeather(city).then(result => {
    if (result.response.cod !== 404) {
      ui.showWeather(result.response, weather.getDate(result.response.dt));
    }
  });
}
