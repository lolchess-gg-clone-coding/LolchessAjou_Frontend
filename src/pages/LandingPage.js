import React from "react";
import styled from "styled-components";

import Logo from "../components/Logo/Logo";
import Searchbox from "../components/SearchBox/Searchbox";

import bg_top from "../images/bg_top.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${bg_top});
  background-size: cover;

  width: 100%;
  height: 300px;

  color: white;
`;

function LandingPage() {
  return (
    <Container>
      <Logo />
      <Searchbox />
    </Container>
  );
}

export default LandingPage;
