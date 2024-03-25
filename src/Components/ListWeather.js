import React from "react";
import "./listweather.css";
import { useState } from "react";
const ListWeather = ({ date, temp, weather,wind,humidity }) => {
  
  
  return (
    <div className="list">
      <div className="weather-item">
        <div className="date">{date}</div>

        <div className="temp">
         Nhiệt độ: {temp.temp_min} - {temp.temp_max}°C
        </div>
        <div>
         Wind {wind.speed} m/s
        </div>
        <div className="humti">
        Humidity  {humidity.humidity} %
        </div>
        <div className="weather">{weather}</div>
      </div>
    </div>
  );
};

export default ListWeather;
