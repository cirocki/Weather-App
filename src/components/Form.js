import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 1.5rem;
  color: #222;
  font-size: 1.5rem;
  border: none;
  border-radius: 1rem 0 0 1rem;
  @media (max-width: 519px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 1.5rem 3rem;
  background-image: linear-gradient(to top, #affd04 0%, #f8ff12 100%);
  color: #436407;
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  border: none;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;

  @media (max-width: 519px) {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
  @media (max-width: 359px) {
    padding: 1rem;
    letter-spacing: 1px;
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
        <StyledButton onClick={handleCitySubmit}>Check</StyledButton>
      </StyledForm>
    </div>
  );
}
