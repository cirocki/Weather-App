import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Results from "./components/Results";

import styled from "styled-components";

const StyledWrapper = styled.main`
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: radial-gradient(
    circle 648px at center,
    #16d9e3 0%,
    #30c7ec 47%,
    #46aef7 100%
  );
`;

const StyledContainer = styled.div`
  text-align: center;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  padding: 2rem;
`;

function App() {
  // APP STATE
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    temp: "-",
    humidity: "-",
    pressure: "-",
    wind: "-"
  });

  // API VARIABLES
  const apiKey = "17a58d62db18d4635698028c2b6fe349";
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const handleCityChange = e => {
    setCity(e.target.value);
  };

  // FETCH DATA FROM WEATHERMAP API ON FORM SUBMIT
  const handleCitySubmit = e => {
    e.preventDefault();
    fetch(apiCall)
      .then(res => {
        if (res.ok) {
          return res;
        } else {
          throw Error("Something went wrong.");
        }
      })
      .then(res => res.json())
      .then(data => {
        setWeather(prev => ({
          temp: data.main.temp,
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed
        }));
      })
      .catch(error => {
        console.log("Error, " + error.message);
      });
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTitle>Weather App</StyledTitle>
        <Form
          handleCitySubmit={handleCitySubmit}
          handleCityChange={handleCityChange}
          city={city}
        />
        <Results weather={weather} city={city} />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
