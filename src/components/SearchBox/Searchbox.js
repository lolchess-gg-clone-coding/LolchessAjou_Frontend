import React, { useState } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

const Container = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;

  padding: 5px;
`;

const SearchboxInput = styled.input`
  border: none;
`;

function Searchbox() {
  const [Summoner, setSummoner] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Summoner);
  };

  return (
    <Container>
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
    </Container>
  );
}

export default Searchbox;
