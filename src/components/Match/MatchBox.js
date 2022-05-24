import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import axios from "axios";

import { matchType } from "../../type/match_type";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 5px;
`;

const MatchList = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 18px;
  padding-left: 18px;
`;

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
  const today = new Date();

  const MatchInfo = props.data;

  // const [AugmentData, setAugmentData] = useState({});

  // const onMatchInfoHandler = (account_id, match_id) => {
  //   axios
  //     .post("http://localhost:3000/match", {
  //       account_id: account_id,
  //       match_id: match_id,
  //     })
  //     .then(function (res) {
  //       // const matchDetailData = res.data[0][0];
  //       // console.log(matchDetailData);
  //       setAugmentData(res.data[0][0]);
  //       console.log(AugmentData);
  //       const synergyData = res.data[1][0];
  //       console.log(synergyData);
  //       const unitData = res.data[2][0];
  //       console.log(unitData);
  //     });
  // };
  const matchDetailData = [];

  useEffect(() => {
    MatchInfo.map((data) =>
      axios
        .post("http://localhost:3000/match", {
          account_id: data.account_id,
          match_id: data.match_id,
        })
        .then(function (res) {
          const match_id = data.match_id;

          const detailtmp = {
            match_id: match_id,
            augments: res.data[0][0][0],
            synergys: res.data[1][0],
            units: res.data[2][0],
          };
          matchDetailData.push(detailtmp);
        })
    );
  }, []);

  return (
    <Container>
      {MatchInfo.map((data) => (
        <div
          key={data.match_id}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          className="Box"
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
              <div>{matchType[data.game_type]}</div>
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
          <button
            onClick={() => {
              console.log(
                matchDetailData.find((x) => x.match_id === data.match_id)
              );
            }}
            style={{ border: "none", background: "none" }}
          >
            세부정보보기
          </button>
        </div>
      ))}
    </Container>
  );
}

export default MatchBox;
