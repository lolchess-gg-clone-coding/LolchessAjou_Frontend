import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { FiSearch } from "react-icons/fi";

const Container = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;

  padding: 5px;
`;

function Searchbox() {
  const navigate = useNavigate();

  const [Summoner, setSummoner] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(Summoner);

    // axios
    //   .get(`http://localhost:3000/summoners/by-name/${Summoner}`)
    //   .then(function (res) {
    //     console.log(`in search box: ${res.data}`);
    //     navigate(`/profile/${Summoner}`, { state: res.data });
    //   });

    axios.get(`http://localhost:3000/search/${Summoner}`).then(function (res) {
      navigate(`/profile/${Summoner}`, { state: res.data });
    });
  };

  return (
    <Container>
      <div onSubmit={onSubmitHandler}>
        <input
          placeholder="소환사 검색"
          onChange={(e) => {
            setSummoner(e.currentTarget.value);
          }}
          style={{ border: "none" }}
        />
      </div>
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
