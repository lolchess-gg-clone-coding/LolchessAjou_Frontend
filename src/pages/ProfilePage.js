import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import summonerImg from "../images/bg-summoner.jpeg";
import UserInfoBox from "../components/User/UserInfoBox";

const UserInfoContainer = styled.div`
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

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const RankBox = styled.div`
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
  const [Synergy] = useState(state[3]);

  function Sumgame(win, defeat) {
    let allGame = win + defeat;

    return allGame;
  }

  function Rate(num, allGame) {
    let rate = (num / allGame) * 100;

    return rate.toFixed(1);
  }

  return (
    <div style={{ padding: "20px 200px" }}>
      <UserInfoBox data={UserInfo} />
      <hr />
      <Container>
        <RankBox>
          <div className="rankInfo">
            <div>
              tier: {RankInfo.tier} {RankInfo.sub_tier}
            </div>
            <div>league_point: {RankInfo.league_point} LP</div>
          </div>
          <RankDetail>
            <div>
              <span>승리 </span>
              <span>{RankInfo.win}</span>
            </div>
            <div>
              <span>승률 </span>
              <span>
                {Rate(RankInfo.win, Sumgame(RankInfo.win, RankInfo.defeat))}%
              </span>
            </div>
            <div>top4 {RankInfo.top4}</div>
            <div>
              <span>top4 비율 </span>
              <span>
                {Rate(RankInfo.top4, Sumgame(RankInfo.win, RankInfo.defeat))}%
              </span>
            </div>
            <div>
              <span>게임수 </span>
              <span>{Sumgame(RankInfo.win, RankInfo.defeat)}</span>
            </div>
            <div>평균 등수</div>
          </RankDetail>
        </RankBox>
        <div className="lpChart" style={{ border: "1px solid black" }}></div>
        <div className="sfBox">
          <div>
            sf_tier: {SFInfo.sf_tier} {SFInfo.sf_league_point}점
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProfilePage;
