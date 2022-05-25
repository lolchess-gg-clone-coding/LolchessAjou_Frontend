import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Logo from "../../components/Logo/Logo";
import Searchbox from "../../components/SearchBox/Searchbox";

import bg_gnb_tft from "../../images/bg_gnb_tft.png";

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
  font-weight: 700;
  width: 100%;
  height: 170px;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <GNB>
      <div
        onClick={() => {
          navigate("/");
        }}
        style={{ cursor: "pointer" }}
      >
        <Logo />
      </div>
      <div style={{ fontSize: "12px" }}>
        <Searchbox />
      </div>
    </GNB>
  );
}

export default Header;
