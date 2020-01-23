import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [city, setCity] = useState("Sopot");

  // API VARIABLES
  const apiKey = "17a58d62db18d4635698028c2b6fe349";
  const apiCall = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // FETCH DATA FROM WEATHERMAP API
  useEffect(() => {
    const fetchData = () => {
      fetch(apiCall)
        .then(res => {
          if (res.ok) {
            return res;
          } else {
            throw Error("something went wrong");
          }
        })
        .then(res => res.json())
        .then(res => console.log(res))
        .catch(error => {
          console.log("Error, " + error.message);
        });
    };

    fetchData();
  }, [apiCall]);

  return (
    <div className="App">
      <h1>Weather app</h1>
    </div>
  );
}

export default App;
