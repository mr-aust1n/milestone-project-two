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

// Event listeners for city buttons
cities.forEach((city) => {
  city.addEventListener("click", (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0"; // Fade out for smooth transition
  });
});

form.addEventListener("submit", (e) => {
  const search = document.querySelector(".search");
  if (search.value.length === 0) {
    alert("Please type in a city name");
  } else {
    cityInput = search.value;
    fetchWeatherData();
    search.value = "";
    app.style.opacity = "0"; // Fade out for smooth transition
  }
  e.preventDefault(); // Prevent form from submitting the traditional way
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
      console.log(data);

      // Update the weather data on the page
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

      // Determine if it's day or night
      let timeOfDay = data.current.is_day ? "day" : "night";

      // Get the weather condition code
      const conditionCode = data.current.condition.code;

      // Remove previous weather condition classes from the app
      app.classList.remove("clear", "cloudy", "rainy", "snow");

      // Add new classes based on condition code
      if (conditionCode === 1000) {
        app.classList.add(timeOfDay, "clear"); // Clear weather
        btn.style.background = timeOfDay === "night" ? "#B1B2BB" : "#e5ba92"; // Button color based on time of day
      } else if (
        conditionCode === 1003 ||
        conditionCode === 1006 ||
        conditionCode === 1009
      ) {
        app.classList.add(timeOfDay, "cloudy"); // Cloudy weather
        btn.style.background = timeOfDay === "night" ? "#181e27" : "#fa6d1b"; // Button color for cloudy
      } else if (conditionCode >= 1063 && conditionCode <= 1207) {
        app.classList.add(timeOfDay, "rainy"); // Rainy weather
        btn.style.background = timeOfDay === "night" ? "#325c80" : "#B42EAE"; // Button color for rainy
      } else if (conditionCode >= 1210 && conditionCode <= 1225) {
        app.classList.add(timeOfDay, "snow"); // Snowy weather
        btn.style.background = timeOfDay === "night" ? "#1b1b1b" : "#2E94B4"; // Button color for snow
      }

      // Change weather icon based on the weather condition
      icon.src = `assets/icons/${timeOfDay}/${conditionCode}.svg`;

      // Update other weather details
      cloudOutput.innerHTML = data.current.cloud + "%";
      humidityOutput.innerHTML = data.current.humidity + "%";
      windOutput.innerHTML = data.current.wind_mph + " mp/h";

      app.style.opacity = "1"; // Fade in after data loads
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("City Not Found, Please try again");
      app.style.opacity = "1"; // Reset opacity if error occurs
    });
}

// Call the function for the default city on page load
fetchWeatherData();
app.style.opacity = "1"; // Ensure app is visible after loading
