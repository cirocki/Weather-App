import React from "react";
import styled from "styled-components";

const StyledInfo = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.125rem;
  opacity: 0.8;
  @media (max-width: 376px) {
    font-size: 1rem;
  }
`;
const StyledFooter = styled.footer`
  padding: 2rem 0;
`;

export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <StyledInfo
          href="https://cirocki.pl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed & Built by Marcin Cirocki
        </StyledInfo>
      </StyledFooter>
    </div>
  );
}
