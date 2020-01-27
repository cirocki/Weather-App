import React, { useState } from "react";
import "./App.css";
import image from "./images/beach.jpg";
import Form from "./components/Form";
import Results from "./components/Results";

import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";

const StyledWrapper = styled.main`
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${image});
`;

const StyledContainer = styled.div`
  text-align: center;
  max-width: 48rem;
  margin: 0 auto;
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
        console.log(data);
        setWeather(prev => ({
          place: `${data.name}, ${data.sys.country}`,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          pressure: data.main.pressure,
          wind: data.wind.speed.toPrecision(2)
        }));
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
        <Results weather={weather} />
        <Footer />
      </StyledContainer>
    </StyledWrapper>
  );
}

export default App;
