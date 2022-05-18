import React from "react";
import styled from "styled-components";

const RankContainer = styled.div`
  border: 1px solid black;
`;

const RankDetail = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
`;

function RankBox(props) {
  const RankInfo = props.data;

  function Sumgame(win, defeat) {
    let allGame = win + defeat;

    return allGame;
  }

  function Rate(num, allGame) {
    let rate = (num / allGame) * 100;

    return rate.toFixed(1);
  }

  return (
    <RankContainer>
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
    </RankContainer>
  );
}

export default RankBox;
