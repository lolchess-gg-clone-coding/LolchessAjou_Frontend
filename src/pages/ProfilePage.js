import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const { state } = useLocation();

  const [UserInfo] = useState(state[0]);
  const [RankInfo] = useState(state[1]);
  const [SFInfo] = useState(state[2]);

  return (
    <div>
      <div>nickname: {UserInfo.nickname}</div>
      <div>levels: {UserInfo.levels}</div>
      <div>icon_id: {UserInfo.icon_id}</div>
      <hr />
      <div>tier: {RankInfo.tier}</div>
      <div>sub_tier: {RankInfo.sub_tier}</div>
      <div>league_point: {RankInfo.league_point}</div>
      <div>date: {RankInfo.date}</div>
      <div>win: {RankInfo.win}</div>
      <div>defeat: {RankInfo.defeat}</div>
      <div>top4: {RankInfo.top4}</div>
      <hr />
      <div>sf_tier: {SFInfo.sf_tier}</div>
      <div>sf_league_point: {SFInfo.sf_league_point}</div>
      <div>sf_date_in_tier: {SFInfo.sf_date}</div>
    </div>
  );
}

export default ProfilePage;
