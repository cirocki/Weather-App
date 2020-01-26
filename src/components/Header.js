import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  padding-bottom: 4rem;
`;
const StyledTitle = styled.h1`
  font-size: 3rem;
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
