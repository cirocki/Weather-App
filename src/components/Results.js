import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

const StyledItem = styled.li`
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
`;

const StyledParagraph = styled.p`
  font-size: 1.5rem;
`;

const StyledMainResult = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #fff;
`;
const StyledOtherResults = styled.div`
  max-width: 700px;
  border: 2px solid #fff;
  padding: 0 4rem;
`;
const StyledCity = styled.h2`
  font-size: 1rem;
`;

const StyledTemp = styled.p`
  font-size: 4rem;
  font-weight: 600;
`;

export default function Results({ weather }) {
  const { place, temp, humidity, pressure, wind } = weather;
  return (
    <StyledWrapper>
      <StyledGrid>
        <StyledMainResult>
          <StyledCity>{place}</StyledCity>
          <StyledTemp>{temp} &#176;C</StyledTemp>
        </StyledMainResult>

        <StyledOtherResults>
          <ul>
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
        </StyledOtherResults>
      </StyledGrid>
    </StyledWrapper>
  );
}
