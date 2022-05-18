import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import UserInfoBox from "../components/User/UserInfoBox";
import RankBox from "../components/User/RankBox";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const RankBoxContainer = styled.div`
  border: 1px solid black;
`;

const RankDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
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
        <div className="lpChart" style={{ border: "1px solid black" }}></div>
        <div className="sfBox">
          <div>
            sf_tier: {SFInfo.sf_tier} {SFInfo.sf_league_point}점
          </div>
        </div>
        <div>
          사용한 시너지:
          {Synergy.map((data) => (
            <div>{data.synergy_name}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
