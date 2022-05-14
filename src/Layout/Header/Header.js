import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

import bg_gnb_tft from "../../images/bg_gnb_tft.png";
import ajou_logo from "../../images/ajou_logo.png";

const GNB = styled.div`
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

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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

function Header() {
  const [Summoner, setSummoner] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Summoner);
  };

  return (
    <GNB>
      <Logo>
        <img alt="logo" src={ajou_logo} width="90px" height="80px" />
        <h1>LoLCHESS AJOU</h1>
      </Logo>
      <Searchbox>
        <SearchboxInput
          placeholder="소환사 검색"
          onChange={(e) => {
            setSummoner(e.currentTarget.value);
          }}
        ></SearchboxInput>
        <FiSearch
          cursor="pointer"
          size="20px"
          onClick={onSubmitHandler}
          color="#ff4500"
        />
      </Searchbox>
    </GNB>
  );
}

export default Header;
