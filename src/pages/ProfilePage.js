import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import UserInfoBox from "../components/User/UserInfoBox";
import RankBox from "../components/Rank/RankBox";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

function ProfilePage() {
  const { state } = useLocation();

  const [UserInfo] = useState(state[0]);
  const [RankInfo] = useState(state[1]);
  const [SFInfo] = useState(state[2]);
  const [Synergy] = useState(state[3][0]);
  console.log(Synergy);

  return (
    <div style={{ padding: "20px 200px" }}>
      <UserInfoBox data={UserInfo} />
      <hr />
      <Container>
        <RankBox data={RankInfo} />
        <div
          className="lpChart"
          style={{
            backgroundColor: "white",
            border: "1px solid #e6e6e6",
            margin: "5px",
          }}
        ></div>
        <div className="sfBox">
          <div
            style={{
              backgroundColor: "white",
              border: "1px solid #e6e6e6",
              margin: "5px",
              textAlign: "center",
            }}
          >
            초고속 모드
            <br />
            <div>
              <span>
                {SFInfo.sf_tier} {SFInfo.sf_league_point}점
              </span>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #e6e6e6",
            margin: "5px",
          }}
        >
          사용한 시너지:
          {Synergy.map((data) => (
            <div key={data.synergy_name}>{data.synergy_name}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
