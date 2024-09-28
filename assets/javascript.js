const WEATHER_API_KEY = "aa16b9821b62487b835175533242809"; // API key

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".conditions");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidityOutput = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll(".city");

// DEFAULT LOCATION
let cityInput = "Nottingham";

cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0";
  });
});

form.addEventListener("submit", (e) => {
  const search = document.querySelector(".search");
  if (search.value.length == 0) {
    alert("Please type in a city name");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = "0";
  }
  e.preventDefault();
});

function dayOfTheWeek(day, month, year) {
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date(`${year}-${month}-${day}`).getDay()];
}

function fetchWeatherData() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${cityInput}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // To check the API response in console

      temp.innerHTML = data.current.temp_c + "&#176;";
      conditionOutput.innerHTML = data.current.condition.text;

      const date = data.location.localtime;
      const y = parseInt(date.substr(0, 4));
      const m = parseInt(date.substr(5, 2));
      const d = parseInt(date.substr(8, 2));
      const time = date.substr(11);

      dateOutput.innerHTML = `${dayOfTheWeek(d, m, y)} ${d}, ${m}, ${y}`;
      timeOutput.innerHTML = time;

      nameOutput.innerHTML = data.location.name;

      const iconId = data.current.condition.icon.substr(
        "//cdn.weatherapi.com/weather/64x64/".length
      );

      icon.src = `icons/${iconId}`;

      cloudOutput.innerHTML = data.current.cloud + "%";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_kph + " km/h";

      let timeOfDay = data.current.is_day ? "day" : "night";

      const code = data.current.condition.code;

      // Setting background images based on weather condition
      if (code === 1000) {
        app.style.backgroundImage = `url(assets/images/night/${timeOfDay}/clear.jpg)`;
        btn.style.background = timeOfDay === "night" ? "#181e27" : "#e5ba92";
      } else if (
        code === 1003 ||
        code === 1006 ||
        code === 1009 ||
        code === 1030 ||
        code === 1069 ||
        code === 1087 ||
        code === 1135 ||
        code === 1273 ||
        code === 1276 ||
        code === 1279 ||
        code === 1282
      ) {
        app.style.backgroundImage = `url(assets/images/${timeOfDay}/cloudy.jpg)`;
        btn.style.background = timeOfDay === "night" ? "#181e27" : "#fa6d1b";
      } else if (
        (code >= 1063 && code <= 1207) ||
        (code >= 1240 && code <= 1252)
      ) {
        app.style.backgroundImage = `url(assets/images/${timeOfDay}/rainy.jpg)`;
        btn.style.background = timeOfDay === "night" ? "#325c80" : "#647d75";
      } else {
        app.style.backgroundImage = `url(assets/images/${timeOfDay}/snow.jpg)`;
        btn.style.background = timeOfDay === "night" ? "#1b1b1b" : "#4d72aa";
      }

      app.style.opacity = "1";
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("City Not Found, Please try again");
      app.style.opacity = "1";
    });
}

// Call function for default city on load
fetchWeatherData();
app.style.opacity = "1";
