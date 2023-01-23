import React, { useState } from "react";
import axios from "axios";
import "./showWeather.css";

export default function SearchEngine() {
  const [city, setCity] = useState(null);
  const [message, setMessage] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function showWeather(response) {
    setLoaded(true);
    let iconURL = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
    return setMessage(
      <div className="showWeather">
        <p>The weather in {response.data.name} is:</p>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}℃</li>
          <li>Current condition: {response.data.weather[0].main}</li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind Speed: {Math.round(response.data.wind.speed)}km/h</li>
        </ul>
        <img
          src={iconURL}
          alt="icon of {response.data.weather[0].description}"
        />
      </div>
    );
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=552ad1a3bbfca9b338aae30c33d2fda3&units=metric`;
    axios.get(url).then(showWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="form" placeholder="Enter a city..." onChange={updateCity} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="SearchEngine">
        {form}
        {message}
      </div>
    );
  } else {
    return form;
  }
}
