import React from "react";

export default function Results({ weather }) {
  return (
    <div>
      <h1>Weather:</h1>
      <p>Temperature: {weather.temp}</p>
      <p>Humidity: {weather.humidity}</p>
      <p>Pressure: {weather.pressure}</p>
    </div>
  );
}
