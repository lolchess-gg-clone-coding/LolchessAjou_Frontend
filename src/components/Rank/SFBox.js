import React from "react";

function SFBox(props) {
  const SFInfo = props.data;
  return (
    <div style={{ textAlign: "center" }} className="Box">
      초고속 모드
      <br />
      <div>
        <span>
          {SFInfo.sf_tier} {SFInfo.sf_league_point}점
        </span>
      </div>
    </div>
  );
}

export default SFBox;
