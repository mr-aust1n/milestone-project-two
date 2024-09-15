//API HIDDEN
require("dotenv").config();

console.log(process.env.WEATHER_API_KEY);

//API HIDDEN BOTTTOM

const app = document.querySelector(".weather-app");
const temp = document.querySelector(".temp");
const dateOutput = document.querySelector(".date");
const timeOutput = document.querySelector(".time");
const conditionOutput = document.querySelector(".condition");
const nameOutput = document.querySelector(".name");
const icon = document.querySelector(".icon");
const cloudOutput = document.querySelector(".cloud");
const humidity = document.querySelector(".humidity");
const windOutput = document.querySelector(".wind");
const form = document.getElementById("locationInput");
const btn = document.querySelector(".submit");
const cities = document.querySelectorAll("city");

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
  if (ListSearchIndexesCursor.value.length == 0) {
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
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[new Date("${day}/${month}/${year)").getDay()];
};


function fetchWeatherData() {

