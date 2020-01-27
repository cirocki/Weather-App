import React, { useState } from "react";
import "./App.css";
import styled from "styled-components";

import image from "./images/beach.jpg";

import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledWrapper = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${image});
  background-size: cover;
  background-position: left center;
  color: #fff;
`;

const StyledContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  text-align: center;
`;

const StyledErrorDiv = styled.div`
  padding: 1rem;
`;

function App() {
  // APP STATE
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({
    place: "",
    temp: "",
    humidity: "",
    pressure: "",
    wind: ""
  });
  const [error, setError] = useState("");

  // API VARIABLES
  const apiKey = "your-api-key-goes-here";
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
          setError(
            "Something went wrong. Check your city spelling and try again."
          );
          throw Error("Something went wrong.");
        }
      })
      .then(res => res.json())
      .then(data => {
        setWeather(prev => ({
          place: `${data.name}, ${data.sys.country}`,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed.toPrecision(2)
        }));
        setError("");
      })
      .catch(error => {
        console.log("Error, " + error.message);
      });
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <Header />
        <Form
          handleCitySubmit={handleCitySubmit}
          handleCityChange={handleCityChange}
          city={city}
        />
        {weather.temp && !error ? (
          <Results weather={weather} />
        ) : (
          <StyledErrorDiv>{error}</StyledErrorDiv>
        )}
        <Footer />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
