import React from "react";
import styled from "styled-components";

const RightSpan = styled.span`
  float: right;
`;

function RankDetailBox(props) {
  return (
    <div style={{ padding: "10px 10px" }}>
      <span>{props.type}</span>
      <RightSpan>{props.data}</RightSpan>
    </div>
  );
}

export default RankDetailBox;
