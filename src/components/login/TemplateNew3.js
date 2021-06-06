import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo_png.png";
import "./templatenew3.scss";
import "./common.scss";

const TemplateNew3 = ({ children }) => {
  return (
    <>
      <div className="templatenew3">
        <div className="full-screen-new3">
          <Link to="/">
            <img className="logo-center" src={logoImg} alt="" />
          </Link>
          <div className="white-screen-new3">
            <div className="TemplateBlockNew3">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateNew3;
