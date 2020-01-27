import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding-top: 2rem;
  padding-bottom: 4rem;
  @media (max-width: 599px) {
    padding-bottom: 2rem;
  }
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 599px) {
    font-size: 2rem;
  }
  @media (max-width: 359px) {
    font-size: 1.5rem;
  }
`;
const StyledSubtitle = styled.h3`
  font-weight: 400;
  opacity: 0.8;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>Simple Weather App</StyledTitle>
      <StyledSubtitle>based on OpenWeatherAPI</StyledSubtitle>
    </StyledHeader>
  );
}
