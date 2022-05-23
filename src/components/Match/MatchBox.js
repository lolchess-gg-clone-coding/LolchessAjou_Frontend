import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 5px;
`;

const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-left: 18px;
`;

const onMatchInfoHandler = () => {
  console.log("matchinfohandler");
};

const Unix_timestamp = (t) => {
  var date = new Date(t * 1000);
  var minute = "0" + date.getMinutes();
  var second = "0" + date.getSeconds();
  return minute.substr(-2) + ":" + second.substr(-2);
};

const getDateDiff = (d1, d2) => {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();

  return `${Math.floor(diffDate / (1000 * 3600 * 24))}일 전`;
};

const getPlaydate = (date) => {
  const [a, b] = date.split("T");

  const c = b.toString().split(".", 1);

  return a + " " + c;
};

function MatchBox(props) {
  const MatchInfo = props.data;

  const MatchType = {
    turbo: "초고속 모드",
    standard: "일반",
    rank: "랭크",
  };

  const today = new Date();

  console.log(MatchInfo);
  return (
    <Container className="Box">
      {MatchInfo.map((data) => (
        <div
          key={data.match_id}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <MatchList>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>
              #{data.placement}
            </span>
            <div
              style={{
                color: "grey",
                fontSize: "12px",
              }}
            >
              <div>{MatchType[data.game_type]}</div>
              <div>{Unix_timestamp(data.playtime)}</div>
              <OverlayTrigger
                overlay={(props) => (
                  <Tooltip {...props}>{getPlaydate(data.playdate)}</Tooltip>
                )}
              >
                <span>{getDateDiff(today, data.playdate)}</span>
              </OverlayTrigger>
            </div>
          </MatchList>
          <div style={{ paddingLeft: "10px" }}>{data.match_id}</div>
        </div>
      ))}
      <button
        onClick={() => {
          onMatchInfoHandler();
        }}
        style={{ border: "none", background: "none" }}
      >
        세부정보보기
      </button>
    </Container>
  );
}

export default MatchBox;
