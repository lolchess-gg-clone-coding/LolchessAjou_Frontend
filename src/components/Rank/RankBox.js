import React from "react";
import styled from "styled-components";

import RankDetailBox from "./RankDetailBox";

import { rankImage } from "../../type/rank_image_types.js";

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
    <div className="Box">
      <div
        style={{
          display: "flex",
        }}
      >
        <div>
          <img
            alt="tier_image"
            src={rankImage[RankInfo.tier][RankInfo.sub_tier]}
            width="84px"
            style={{ padding: "5px" }}
          />
        </div>
        <div style={{ padding: "20px 15px" }}>
          <div>티어</div>
          <div>
            <span>
              {RankInfo.tier} {RankInfo.sub_tier}
            </span>
            <RightSpan>{RankInfo.league_point} LP</RightSpan>
          </div>
          <div style={{ width: "150px" }}></div>
        </div>
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
    </div>
  );
}

export default RankBox;
