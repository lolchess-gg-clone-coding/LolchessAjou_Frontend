import React, { useState } from "react";
import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Form = styled.form`
  display: flex;
  align-items: center;

  border: 1px solid black;
  border-radius: 5px;

  padding: 5px 10px;
`;

const SummonerInput = styled.input`
  width: 300px;
  height: 50px;
`;

function LandingPage() {
  const [Summoner, setSummoner] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Summoner);
  };

  return (
    <Container>
      <div>
        LoLCHESS.AJOU<h1>롤체아주</h1>
      </div>
      <Form>
        <SummonerInput
          placeholder="소환사 검색"
          onChange={(e) => {
            setSummoner(e.currentTarget.value);
          }}
        ></SummonerInput>
        <FiSearch cursor="pointer" size="30px" onClick={onSubmitHandler} />
      </Form>
    </Container>
  );
}

export default LandingPage;
