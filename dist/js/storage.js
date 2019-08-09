class Storage {
  constructor() {
    this.city = "Tehran";
  }
  getFromLocalStorage() {
    if (localStorage.getItem("city") === null) {
      localStorage.setItem("city", this.city);
      console.log("dd");
    } else {
      this.city = localStorage.getItem("city");
    }
    console.log("cc");
    return this.city;
  }
  setToLocalStorage(newCity) {
    this.city = newCity;
    localStorage.setItem("city", newCity);
  }
}
