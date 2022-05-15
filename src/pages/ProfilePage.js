import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function ProfilePage() {
  const { state } = useLocation();

  const user = state[0];
  const rank_tier = state[1];
  const superfast_tier = state[2];

  const [Nickname] = useState(user.nickname);
  const [Levels] = useState(user.levels);
  const [IconId] = useState(user.icon_id);
  const [Tier] = useState(rank_tier.tier);
  const [SubTier] = useState(rank_tier.sub_tier);
  const [LeaguePoint] = useState(rank_tier.league_point);
  const [Date] = useState(rank_tier.date);
  const [Win] = useState(rank_tier.win);
  const [Defeat] = useState(rank_tier.defeat);
  const [Top4] = useState(rank_tier.top4);
  const [SFTier] = useState(superfast_tier.sf_tier);
  const [SFLeaguePoint] = useState(superfast_tier.sf_league_point);
  const [SFDate] = useState(superfast_tier.sf_date);

  return (
    <div>
      <div>nickname: {Nickname}</div>
      <div>levels: {Levels}</div>
      <div>icon_id: {IconId}</div>
      <hr />
      <div>tier: {Tier}</div>
      <div>sub_tier: {SubTier}</div>
      <div>league_point: {LeaguePoint}</div>
      <div>date: {Date}</div>
      <div>win: {Win}</div>
      <div>defeat: {Defeat}</div>
      <div>top4: {Top4}</div>
      <hr />
      <div>sf_tier: {SFTier}</div>
      <div>sf_league_point: {SFLeaguePoint}</div>
      <div>sf_date_in_tier: {SFDate}</div>
    </div>
  );
}

export default ProfilePage;
