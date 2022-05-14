import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import bg_gnb_tft from "../images/bg_gnb_tft.png";
import bg_top from "../images/bg_top.jpg";

const Container = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  background-position-x: right;
  background-size: auto;
  background-image: url(${bg_gnb_tft});
  color: white;
  font-size: 22px;
  width: 100%;
  height: 170px;
`;

const Searchbox = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;

  padding: 5px;
`;

const SearchboxInput = styled.input`
  border: none;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${bg_top});
  background-size: cover;

  width: 100%;
  height: 300px;
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
      <Header>
        <div className="logo">
          <h1>LoLCHESS AJOU</h1>
        </div>
        <Searchbox>
          <SearchboxInput placeholder="소환사 검색"></SearchboxInput>
          <FiSearch
            cursor="pointer"
            size="20px"
            onClick={onSubmitHandler}
            color="#ff4500"
          />
        </Searchbox>
      </Header>
      <Body>
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
