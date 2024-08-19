import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { WiHumidity } from "react-icons/wi";
import { FaWind } from "react-icons/fa";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState();
  const API_KEY = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=<span class="math-inline">\{city\}&units\=metric&appid\=</span>{API_KEY}`
        );
        setWeather(response.data);
      } catch (err) {
        setError(err.message);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSearch = (event) => {
    event.preventDefault();
    setCity(event.target.elements.city.value); // Access input value using event object
  };

  return (
    <>
      <div className="bg-slate-700 h-screen flex justify-center align-top">
        <div className="bg-blue-200 mt-40 mr-2 h-[299px] w-[390px] rounded-lg shadow-lg">
          <div className="ml-5 mb-4 mt-8 flex flex-row">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Enter City"
                value={city}
                className="rounded-lg outline-none shadow-lg border-collapse h-9 w-[270px]"
                name="city" // Name the input field for form submission
              />
              <button
                type="submit"
                className="ml-3 rounded-full w-9 h-9 p-2.5 bg-white shadow-lg"
              >
                <FaSearch />
              </button>
            </form>
          </div>

          {error && <p className="error">{error}</p>}

          {weather && weather.weather && (
            <div className="flex flex-col items-center">
              <div className="mt-5">
                <img
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].description}
                />
              </div>
              <div className="mt-5">
                {weather.weather[0].description}
              </div>
              <div className="mt-5 w-4">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="mt-5 mb-5 flex items-center">
                <FaLocationDot />{" "}
                {weather.name}, {weather.sys.country}
              </div>
              <div className="flex flex-row justify-between w-full">
                <div className=" bg-sky-600 flex flex-col w-[200px] h-[189px] rounded-lg shadow-lg">
                  <div className="mb-2"><FaWind /></div>
                  <div>{weather.wind.speed} m/s</div>
                  <div>
                    <h2 className="text-sky-700">WIND SPEED</h2>
                  </div>
                </div>
                <div className=" bg-sky-600 flex flex-col w-[200px] h-[189px] rounded-lg shadow-lg ml-4">
                  <div className="mb-2"><WiHumidity /></div>
                  <div>{weather.main.humidity}%</div>
                  <div>
                    <h2 className="text-sky-700">HUMIDITY</h2>
                  </div>
                </div>
              </div>
            </div>
          )}
          </div>
          </div>
          </>
  );
}
export default Weather();