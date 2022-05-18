import React from "react";
import styled from "styled-components";

import RankDetailBox from "./RankDetailBox";

const RankContainer = styled.div`
  background-color: white;
  border: 1px solid #e6e6e6;
  margin: 5px;
`;

const RankDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: stretch;

  border-top: 1px solid #e6e6e6;
`;

const RightSpan = styled.span`
  float: right;
`;

function Sumgame(win, defeat) {
  let allGame = win + defeat;

  return allGame;
}

function Rate(num, allGame) {
  let rate = (num / allGame) * 100;

  return `${rate.toFixed(1)}%`;
}

function RankBox(props) {
  const RankInfo = props.data;

  return (
    <RankContainer>
      <div style={{ padding: "5px 40px" }}>
        <div>티어</div>
        <span>
          {RankInfo.tier} {RankInfo.sub_tier}
        </span>
        <RightSpan>{RankInfo.league_point} LP</RightSpan>
      </div>
      <RankDetail>
        <RankDetailBox type="승리" data={RankInfo.win} />
        <RankDetailBox
          type="승률"
          data={Rate(RankInfo.win, Sumgame(RankInfo.win, RankInfo.defeat))}
        />
        <RankDetailBox type="top4" data={RankInfo.top4} />
        <RankDetailBox
          type="top4 비율"
          data={Rate(RankInfo.top4, Sumgame(RankInfo.win, RankInfo.defeat))}
        />
        <RankDetailBox
          type="게임 수"
          data={Sumgame(RankInfo.win, RankInfo.defeat)}
        />
        <RankDetailBox type="평균 등수" data="" />
      </RankDetail>
    </RankContainer>
  );
}

export default RankBox;
