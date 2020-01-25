import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  // APP STATE
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temp: "",
    humidity: "",
    pressure: ""
  });

  const handleCity = e => {
    setCity(e.target.value);
  };

  const handleCitySubmit = e => {
    e.preventDefault();

    // FETCH DATA FROM WEATHERMAP API

    fetch(apiCall)
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw Error("something went wrong");
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setWeather(prev => ({
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure
        }));
      })

      .catch(error => {
        console.log("Error2, " + error.message);
      });
  };

  // API VARIABLES
  const apiKey = "17a58d62db18d4635698028c2b6fe349";
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  return (
    <div className="App">
      <h1>Weather app</h1>
      <h2>{city}</h2>
      <Form
        city={city}
        handleCitySubmit={handleCitySubmit}
        handleCity={handleCity}
      />
      <Results weather={weather} />
    </div>
  );
}

export default App;
