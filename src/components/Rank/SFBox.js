import React from "react";

import { sfImage } from "../../type/sf_image_type.js";

function SFBox(props) {
  const SFInfo = props.data;

  return (
    <div style={{ display: "flex" }} className="Box">
      <div>
        <img
          alt="tier_image"
          src={sfImage[SFInfo.sf_tier]}
          width="84px"
          style={{ padding: "5px" }}
        />
      </div>
      <div style={{ padding: "15x 15px" }}>
        <div>초고속 모드</div>
        <div>
          <span>
            {SFInfo.sf_tier} {SFInfo.sf_league_point}점
          </span>
        </div>
      </div>
    </div>
  );
}

export default SFBox;
