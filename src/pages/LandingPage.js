import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import bg_top from "../images/bg_top.jpg";
import ajou_logo from "../images/ajou_logo.png";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Body = styled.div`
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

const MainForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: white;
  
  padding 5px;
`;

const MainInput = styled.input`
  border: none;
  padding 1px 2px;
  width: 500px;
  height: 48px;
`;

function LandingPage() {
  const [Summoner, setSummoner] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Summoner);
  };

  return (
    <Container>
      <Body>
        <Logo>
          <img alt="logo" src={ajou_logo} width="68px" height="60px" />
          <h1>LoLCHESS AJOU</h1>
        </Logo>
        <MainForm>
          <MainInput
            placeholder="소환사 검색"
            onChange={(e) => {
              setSummoner(e.currentTarget.value);
            }}
          ></MainInput>
          <FiSearch
            cursor="pointer"
            size="25px"
            onClick={onSubmitHandler}
            color="#ca9372"
          />
        </MainForm>
      </Body>
    </Container>
  );
}

export default LandingPage;
