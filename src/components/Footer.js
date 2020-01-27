import React from "react";
import styled from "styled-components";

const StyledInfo = styled.a`
  color: #fff;
  text-decoration: none;
`;
const StyledFooter = styled.footer`
  padding: 2rem;
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
          www.cirocki.pl
        </StyledInfo>
      </StyledFooter>
    </div>
  );
}
