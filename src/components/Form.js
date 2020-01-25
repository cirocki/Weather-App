import React from "react";

export default function Form({ city, handleCitySubmit, handleCity }) {
  return (
    <div>
      <form>
        <input type="text" placeholder="find city" onChange={handleCity} />
        <button onClick={handleCitySubmit}>Find</button>
      </form>
    </div>
  );
}
