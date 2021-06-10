import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./img/logo.png";
import basic from "./img/defaultImg.png";
import "./templatenew1.scss";
import "./common.scss";

const TemplateNew1 = ({ children }) => {
  return (
    <>
      <div className="templatenew1">
        <div className="full-screen-new">
          <Link to="/">
            <img className="logo-center" src={logoImg} alt="" />
          </Link>
          <div className="white-screen-new">
            <div className="TemplateBlockNew">
              <img src={basic} alt="" className="img" />
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TemplateNew1;
