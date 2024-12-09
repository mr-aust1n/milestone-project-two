import { fetchWeatherData } from "../js/utils";

global.fetch = jest.fn();

describe("fetchWeatherData", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("fetches and processes weather data for a valid city", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        current: {
          temp_c: 15,
          is_day: 1,
          condition: { text: "Clear" },
        },
        location: {
          name: "London",
          localtime: "2024-12-07 15:00",
        },
      }),
    });

    const data = await fetchWeatherData("London");
    expect(data).toEqual({
      temp_c: 15,
      is_day: 1,
      condition: "Clear",
      location: "London",
      localtime: "2024-12-07 15:00",
    });
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("https://api.weatherapi.com/v1/current.json?key=")
    );
  });

  test("throws an error for invalid city", async () => {
    fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
      json: async () => ({
        error: { message: "City not found" },
      }),
    });

    await expect(fetchWeatherData("InvalidCity")).rejects.toThrow("API Error");
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("InvalidCity"));
  });

  test("throws an error for network issues", async () => {
    fetch.mockRejectedValueOnce(new Error("Network Error"));

    await expect(fetchWeatherData("London")).rejects.toThrow("Network Error");
    expect(fetch).toHaveBeenCalledWith(expect.stringContaining("London"));
  });
});
