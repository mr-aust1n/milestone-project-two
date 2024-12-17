import { fetchWeatherData } from "../js/utils";

describe("fetchWeatherData Functionality", () => {
  const mockWeatherData = {
    current: {
      temp_c: 20,
      condition: {
        text: "Partly Cloudy",
        code: 1003,
      },
      is_day: 1,
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
    // Mock fetch
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeatherData),
      })
    );

    // Set up DOM
    document.body.innerHTML = `
      <div class="weather-app" style="opacity: 1;">
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
    jest.clearAllMocks(); // Reset mocks
  });

  test("fetches and updates weather data correctly", async () => {
    await fetchWeatherData("London");

    expect(global.fetch).toHaveBeenCalledWith(
      expect.stringContaining("London")
    );

    // Check DOM Updates
    expect(document.querySelector(".temp").innerHTML).toBe("20&#176;");
    expect(document.querySelector(".conditions").innerHTML).toBe(
      "Partly Cloudy"
    );
    expect(document.querySelector(".name").innerHTML).toBe("London");
    expect(document.querySelector(".cloud").innerHTML).toBe("50%");
    expect(document.querySelector(".humidity").innerHTML).toBe("60%");
    expect(document.querySelector(".wind").innerHTML).toBe("5 mp/h");
  });

  test("handles fetch errors gracefully", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("API Error"))
    );

    const alertMock = jest.spyOn(window, "alert").mockImplementation(() => {});

    await fetchWeatherData("InvalidCity");

    expect(alertMock).toHaveBeenCalledWith("City Not Found, Please try again");
    alertMock.mockRestore();
  });
});
