class Weather {
  constructor() {
    this.appid = "aacb423de97c3c86b3b599947e472893";
  }

  async getWeather(city) {
    const responseWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        this.appid
      }`
    );

    const response = await responseWeather.json();
    return response;
  }
}
