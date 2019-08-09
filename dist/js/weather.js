class Weather {
  constructor() {
    this.appid = "aacb423de97c3c86b3b599947e472893";
    this.monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    this.getDay = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  }

  async getWeather(city) {
    const responseWeather = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
        this.appid
      }&units=metric`
    );
    const response = await responseWeather.json();

    return { response };
  }

  getDate(date) {
    date = new Date(date * 1000);
    var month = date.getMonth(); //months from 1-12
    var day = date.getDate();
    var dayOfWeek = date.getDay();
    var year = date.getFullYear();

    return (
      this.getDay[dayOfWeek - 1] +
      "-" +
      this.monthNames[month] +
      " " +
      day +
      "-" +
      year
    );
  }
}
