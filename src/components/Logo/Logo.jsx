import React from "react";
import styled from "styled-components";

import ajou_logo from "../../images/ajou_logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Logo() {
  return (
    <Container>
      <img alt="logo" src={ajou_logo} width="68px" height="60px" />
      <h1>LoLCHESS AJOU</h1>
    </Container>
  );
}

export default Logo;
