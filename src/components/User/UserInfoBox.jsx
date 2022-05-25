import React from "react";
import styled from "styled-components";

import summonerImg from "../../images/bg-summoner.jpeg";

const UserInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  padding: 20px;

  font-weight: 700;

  background-image: url(${summonerImg});
  background-size: cover;
`;

const IconBox = styled.div`
  position: relative;

  width: 100px;
  height: 100px;
  border: 1px solid black;

  color: white;
`;

function UserInfoBox(props) {
  return (
    <UserInfo>
      <IconBox>
        <div>icon_id: {props.data.icon_id}</div>
        <div
          style={{
            bottom: "0",
            right: "0",
            position: "absolute",
            padding: "4px 6px",
            backgroundColor: "#fff",
            color: "black",
            fontWeight: "700",
            fontSize: "12px",
          }}
        >
          levels: {props.data.levels}
        </div>
      </IconBox>
      <div>
        <span style={{ fontSize: "24px", color: "white" }}>
          nickname: {props.data.nickname}
        </span>
      </div>
    </UserInfo>
  );
}

export default UserInfoBox;
