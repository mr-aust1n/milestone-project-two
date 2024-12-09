export const WEATHER_API_KEY = "aa16b9821b62487b835175533242809"; // API key
export let cityInput = "Nottingham"; // Default city

export function fetchWeatherData(city) {
  return fetch(
    `https://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${city}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("API Error");
      }
      return response.json();
    })
    .then((data) => ({
      temp_c: data.current.temp_c,
      is_day: data.current.is_day,
      condition: data.current.condition.text,
      location: data.location.name,
      localtime: data.location.localtime,
    }))
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
