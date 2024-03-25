import React, { useState, useEffect } from 'react';
import ListWeather from './Components/ListWeather';

import './Weather.css';
import Login from './Auth/Login';
import LogOut from './Auth/Logout';

const api = {
  key: 'b6070d3b2bf10a44d367798abb04a685',
  base: 'https://api.openweathermap.org/data/2.5/',
};

function Weather() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState("");
  

  useEffect(() => {
    if (weather && weather.name) {
      getForecast(weather.name);
    }
  }, [weather]);

  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          setQuery("");
        });
    }
  };

  const dateBuilder = (timestamp) => {
    const d = new Date(timestamp * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[d.getDay()];
    const date = d.getDate();
    const month = d.toLocaleString("default", { month: "short" });
    const year = d.getFullYear();

    return `${dayOfWeek}, ${date} ${month} ${year}`;
  };

  const getForecast = (cityName) => {
    fetch(`${api.base}forecast?q=${cityName}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        const groupedForecast = result.list.reduce((acc, forecastItem) => {
          const date = dateBuilder(forecastItem.dt).split(",")[0];
          if (!acc[date]) {
            acc[date] = forecastItem;
          }
          return acc;
        }, {});

        setWeather((prevWeather) => ({
          ...prevWeather,
          forecast: groupedForecast,
        }));
      });
  };

  return (
    <div
      className={
        typeof weather?.main !== "undefined"
          ? weather.main.temp > 16
            ? "app warm"
            : "app"
          : "app"
      }
    >
      <main>
      <LogOut/>
        <div className="container">
          
          <div className="search-box">
           
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              onChange={(e) => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
            {typeof weather?.main !== "undefined" ? (
              <div>
                <div className="location-box">
                  <div className="location">
                    {weather.name}, {weather.sys.country}
                  </div>
                  <div className="date">{dateBuilder(weather.dt)}</div>
                  <div className="wearther-box">
                    <div className="temp">
                      {Math.round(weather.main.temp)}°C
                    </div>
                    <div className="wearther">{weather.weather[0].main}</div>
                    <div className="boder-box">
                      <div className="wind">WIND {weather.wind.speed} m/s</div>
                      <div className="humidity">
                        Humidity: {weather.main.humidity}%
                      </div>
                      <div className='press'>
                        Pressure:{weather.main.pressure} hpa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            <div className='box-list'>
              
            
            <div className="list">
              {weather?.forecast && Object.keys(weather.forecast).length > 0 ? (
                <div>
                  {Object.entries(weather.forecast).map(([date, forecastItem]) => (
                    <ListWeather
                      key={date}
                      date={dateBuilder(forecastItem.dt)}
                      temp={forecastItem.main}
                      weather={forecastItem.weather[0].main}
                      wind = {forecastItem.wind}
                      humidity ={ forecastItem.main}
                      dayOfWeek={date}
                    />
                  ))}
                </div>
              ) : null}
              
            </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Weather;
