import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledItem = styled.li`
  padding: 1rem;
  min-width: 300px;
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
`;

export default function Results({ weather, city }) {
  const { temp, humidity, pressure, wind } = weather;
  return (
    <StyledDiv>
      <h2>{city}</h2>
      <ul>
        <StyledItem>
          <StyledParagraph>Temperature:</StyledParagraph>
          <StyledParagraph>{temp} &#176;C</StyledParagraph>
        </StyledItem>

        <StyledItem>
          <StyledParagraph>Wind:</StyledParagraph>
          <StyledParagraph>{wind} m/s</StyledParagraph>
        </StyledItem>

        <StyledItem>
          <StyledParagraph>Pressure:</StyledParagraph>
          <StyledParagraph>{pressure} hPa</StyledParagraph>
        </StyledItem>

        <StyledItem>
          <StyledParagraph>Humidity:</StyledParagraph>
          <StyledParagraph>{humidity} %</StyledParagraph>
        </StyledItem>
      </ul>
    </StyledDiv>
  );
}
