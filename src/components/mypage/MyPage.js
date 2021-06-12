import React from "react";
import { Link } from "react-router-dom";
import "./mypage.scss";
import Box from "./Box";
import { Row } from "antd";
import basicProfile from "./img/profile.png";
import leftBar from "./img/leftbar.png";
import rightBar from "./img/rightbar.png";
const style = { display: "inline-block" };

const MyPage = ({
  nickname,
  username,
  email,
  emailVerified,
  profile,
  onLogout,
  boxes1,
  boxes2,
  prev1,
  prev2,
  next1,
  next2,
  elements1,
  elements2,
  pageNum1,
  pageNum2,
  current1,
  current2,
}) => {
  const pages1 = [];
  const pages2 = [];
  for (let i = 0; i < pageNum1; i++) pages1.push(i + 1);
  for (let i = 0; i < pageNum2; i++) pages2.push(i + 1);
  return (
    <div className="myPage">
      <div className="userSection">
        {profile ? (
          <img
            className="profileImage"
            src={`data:image/png;base64,${profile}`}
            alt=""
            style={style}
          />
        ) : (
          <img src={basicProfile} alt="" className="profileImage" />
        )}
        <div className="userBox" style={style}>
          <div className="greeting">
            <h1>
              <h1 className="colorH1" style={style}>
                {nickname}
              </h1>
              님 안녕하세요!
            </h1>{" "}
          </div>
          <div>
            {emailVerified ? (
              <div className="email">{email}</div>
            ) : (
              <Link to="/registerAuth">
                <div className="email">이메일 인증이 필요합니다.</div>
              </Link>
            )}
          </div>
          <div className="buttons">
            <Link to="/setupPage">
              <button className="setup" style={style}>
                계정 설정
              </button>
            </Link>
            <Link to="/">
              <button className="logout" style={style} onClick={onLogout}>
                로그아웃
              </button>
            </Link>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <div className="postSection">
        <div className="open">
          <div className="boxtitle">
            공개한 여행 ({elements1 ? elements1 : 0}){" "}
          </div>
          {elements1 ? (
            <>
              <Row>
                {boxes1 &&
                  boxes1.map((box, i) => {
                    return <Box box={box} key={i}></Box>;
                  })}
              </Row>
              <div className="paging">
                {current1 !== 0 ? (
                  <button onClick={prev1} style={style}>
                    <img src={leftBar} alt="" />
                  </button>
                ) : (
                  <div></div>
                )}
                &nbsp;&nbsp;
                <div style={style} className="pNum">
                  {pages1 &&
                    pages1.map((i) =>
                      current1 === i - 1 ? (
                        <span className="highlight">{i}</span>
                      ) : (
                        <span>{i}</span>
                      )
                    )}
                </div>
                &nbsp;&nbsp;
                {current1 + 1 !== pageNum1 ? (
                  <button onClick={next1} style={style}>
                    <img src={rightBar} alt="" />
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </>
          ) : (
            <div className="no-post">여행을 작성해주세요</div>
          )}
        </div>

        <div className="closed">
          <div className="boxtitle">
            비공개 여행 ({elements2 ? elements2 : 0})
          </div>
          {elements2 ? (
            <>
              <Row>
                {boxes2 &&
                  boxes2.map((box, i) => {
                    return <Box box={box} key={i}></Box>;
                  })}
              </Row>
              <div className="paging">
                {current2 !== 0 ? (
                  <button onClick={prev2} style={style}>
                    <img src={leftBar} alt="" />
                  </button>
                ) : (
                  <div></div>
                )}
                &nbsp;&nbsp;
                <div style={style} className="pNum">
                  {pages2 &&
                    pages2.map((i) =>
                      current2 === i - 1 ? (
                        <span className="highlight">{i}</span>
                      ) : (
                        <span>{i}</span>
                      )
                    )}
                </div>
                &nbsp;&nbsp;
                {current2 + 1 !== pageNum2 ? (
                  <button onClick={next2} style={style}>
                    <img src={rightBar} alt="" />
                  </button>
                ) : (
                  <div></div>
                )}
              </div>
            </>
          ) : (
            <div className="no-post">여행을 작성해주세요</div>
          )}
        </div>
      </div>
    </div>
  );
};
export default React.memo(MyPage);
