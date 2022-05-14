import React from "react";
import styled from "styled-components";

import Header from "./Header/Header";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

function Layout({ props }) {
  return (
    <StyledDiv>
      <Header />
      <div>{props}</div>
    </StyledDiv>
  );
}

export default Layout;
