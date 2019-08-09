class UI {
  getCityName() {
    return document.getElementById("search-input").value;
  }
  showWeather(response, date) {
    const div = document.createElement("div");
    document.querySelector(".content").innerHTML = "";
    div.className = "container";
    div.innerHTML = `
      <div class="main-part">
        <div class="header">
          <img src="http://openweathermap.org/img/wn/${
            response.weather[0].icon
          }@2x.png" alt="" />
          <div class="header-title">
            <h1 id="city-name">${response.name}, ${response.sys.country}</h1>
            <h3 id="city-date">${date}</h3>
          </div>
        </div>
        <div class="temp">
          <p><i class="fas fa-angle-double-down"></i>${Math.round(
            response.main.temp_min
          )}<span>&#176;</span></p>
          <h2 class="temp-main">${response.main.temp}<span>&#176;</span></h2>
          <p><i class="fas fa-angle-double-up"></i>${Math.round(
            response.main.temp_max
          )}<span>&#176;</span></p>
        </div>
        <h2 id="forcast">
          ${response.weather[0].main}
        </h2>
      </div>
      <div class="side-part">
        <div class="box">Humidity: ${response.main.humidity}</div>
        <div class="box">Pressure: ${response.main.pressure}</div>
      </div>
    `;
    document.querySelector(".content").appendChild(div);
  }
}
