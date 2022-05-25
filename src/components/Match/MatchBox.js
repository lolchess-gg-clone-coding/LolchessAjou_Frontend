import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import axios from "axios";

import { matchType } from "../../type/match_type";
import { augmentType } from "../../type/augments_type";

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

  const [matchDetailData, setMatchDetailData] = useState([]);

  const detailRef = useRef(
    MatchInfo.map(() => React.createRef()),
    []
  );

  useEffect(() => {}, [matchDetailData]);

  useEffect(() => {
    const fetch = async () => {
      let matchDetailtmp = [];
      for (const data of MatchInfo) {
        const res = await axios.post("http://localhost:3000/match", {
          account_id: data.account_id,
          match_id: data.match_id,
        });
        const match_id = data.match_id;
        matchDetailtmp.push({
          match_id: match_id,
          augments: res.data[0][0][0],
          synergys: res.data[1][0],
          units: res.data[2][0],
        });
      }
      setMatchDetailData(matchDetailtmp);
    };
    fetch();
  }, [MatchInfo]);

  return (
    <Container>
      {MatchInfo.map((data, i) => {
        return (
          <div key={data.match_id}>
            <div
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
                  console.log(matchDetailData[i]);
                  detailRef.current[i].current.style.display === "none"
                    ? (detailRef.current[i].current.style.display = "block")
                    : (detailRef.current[i].current.style.display = "none");
                }}
                style={{ border: "none", background: "none" }}
              >
                세부정보보기
              </button>
            </div>
            <div
              className="Box"
              style={{ display: "none" }}
              ref={detailRef.current[i]}
            >
              {matchDetailData[i] && (
                <div>
                  <div>{matchDetailData[i].match_id}</div>
                  <hr />
                  <div>
                    <div>사용한 증강체</div>
                    <div>
                      {augmentType[matchDetailData[i].augments.augments_name1]}
                    </div>
                    <div>
                      {augmentType[matchDetailData[i].augments.augments_name2]}
                    </div>
                    <div>
                      {augmentType[matchDetailData[i].augments.augments_name3]}
                    </div>
                    {/* <div>{matchDetailData[i].augments.augments_name1}</div>
                    <div>{matchDetailData[i].augments.augments_name2}</div>
                    <div>{matchDetailData[i].augments.augments_name3}</div> */}
                  </div>
                  <hr />
                  <div>
                    <div>사용한 시너지</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </Container>
  );
}

export default MatchBox;
