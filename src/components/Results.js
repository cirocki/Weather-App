import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 6rem;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: minmax(300px, 2fr) minmax(400px, 3fr);
  @media (max-width: 819px) {
    grid-template-columns: 1fr;
  }
`;

const StyledItem = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 1rem;
`;

const StyledName = styled.p`
  font-size: 1.5rem;
  text-align: left;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;

  @media (max-width: 379px) {
    font-size: 1rem;
  }
`;

const StyledData = styled.p`
  font-size: 1.5rem;
  text-align: right;
  font-weight: 600;
  @media (max-width: 379px) {
    font-size: 1rem;
  }
`;

const StyledMainResult = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  @media (max-width: 379px) {
    padding: 1rem;
  }
`;
const StyledOtherResults = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  @media (max-width: 379px) {
    padding: 0;
  }
`;
const StyledCity = styled.h2`
  font-size: 1.5rem;
`;
const StyledTemp = styled.p`
  font-size: 5rem;
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
          <StyledItem>
            <StyledName>Wind</StyledName>
            <StyledData>{wind} m/s</StyledData>
          </StyledItem>

          <StyledItem>
            <StyledName>Pressure</StyledName>
            <StyledData>{pressure} hPa</StyledData>
          </StyledItem>

          <StyledItem>
            <StyledName>Humidity</StyledName>
            <StyledData>{humidity} %</StyledData>
          </StyledItem>
        </StyledOtherResults>
      </StyledGrid>
    </StyledWrapper>
  );
}
