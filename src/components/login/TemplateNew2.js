import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo_png.png";
import "./templatenew2.scss";
import "./common.scss";

const TemplateNew2 = ({ children }) => {
  return (
    <>
      <div className="templatenew2">
        <div className="full-screen-new2">
          <Link to="/">
            <img className="logo-center" src={logoImg} alt="" />
          </Link>
          <div className="white-screen-new2">
            <div className="TemplateBlockNew2">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateNew2;
