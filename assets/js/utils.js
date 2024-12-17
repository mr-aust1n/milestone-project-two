import { fetchWeatherData } from "../js/utils";

describe("fetchWeatherData Functionality", () => {
  const mockWeatherData = {
    current: {
      temp_c: 20,
      condition: { text: "Partly Cloudy" },
      cloud: 50,
      humidity: 60,
      wind_mph: 5,
    },
    location: {
      name: "London",
      localtime: "2024-12-10 10:00",
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeatherData),
      })
    );

    document.body.innerHTML = `
      <div class="weather-app">
        <span class="temp"></span>
        <span class="conditions"></span>
        <span class="name"></span>
        <span class="cloud"></span>
        <span class="humidity"></span>
        <span class="wind"></span>
      </div>
    `;
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  test("fetches and updates weather data correctly", async () => {
    await fetchWeatherData("London");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("London")
    );

    expect(document.querySelector(".temp").textContent.trim()).toBe("20°");
    expect(document.querySelector(".conditions").textContent.trim()).toBe(
      "Partly Cloudy"
    );
    expect(document.querySelector(".name").textContent.trim()).toBe("London");
    expect(document.querySelector(".cloud").textContent.trim()).toBe("50%");
    expect(document.querySelector(".humidity").textContent.trim()).toBe("60%");
    expect(document.querySelector(".wind").textContent.trim()).toBe("5 mp/h");
  });

  test("handles fetch errors gracefully", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("API Error"))
    );

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    await fetchWeatherData("InvalidCity");

    expect(alertMock).toHaveBeenCalledWith("City Not Found, Please try again");
  });
});
