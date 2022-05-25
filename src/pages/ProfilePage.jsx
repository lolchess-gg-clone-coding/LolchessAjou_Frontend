import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import UserInfoBox from "../components/User/UserInfoBox";
import RankBox from "../components/Rank/RankBox";
import SFBox from "../components/Rank/SFBox";
import MatchBox from "../components/Match/MatchBox";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

function ProfilePage() {
  const { state } = useLocation();

  const [UserInfo] = useState(state[0]);
  const [RankInfo] = useState(state[1]);
  const [SFInfo] = useState(state[2]);
  const [MatchInfo] = useState(state[4]);

  return (
    <div style={{ padding: "20px 200px" }}>
      <UserInfoBox data={UserInfo} />
      <hr />
      <Container>
        <RankBox data={RankInfo} />
        <div className="lpChart Box"></div>
        <div>
          <SFBox data={SFInfo} />
        </div>
        <></>
      </Container>
      <MatchBox data={MatchInfo} />
    </div>
  );
}

export default ProfilePage;
