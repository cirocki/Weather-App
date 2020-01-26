import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1.5rem;
  padding: 2rem 2rem;
  border: none;
  width: 100%;
  color: #111;
  border-radius: 1rem 0 0 1rem;
`;

const StyledButton = styled.button`
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2rem 3rem;
  cursor: pointer;
  background: #c3ff1e;
  border: none;
  border-radius: 0 1rem 1rem 0;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #111;

  &:hover {
    box-shadow: inset 7px 7px 15px rgba(66, 66, 66, 0.15),
      inset -7px -7px 20px white, 0px 0px 4px rgba(255, 255, 255, 0.2);
    color: #676767;
  }
`;

export default function Form({ handleCitySubmit, handleCityChange, city }) {
  return (
    <div>
      <StyledForm>
        <StyledInput
          type="text"
          value={city}
          placeholder="Your city"
          onChange={handleCityChange}
        />
        <StyledButton onClick={handleCitySubmit}>Find</StyledButton>
      </StyledForm>
    </div>
  );
}
