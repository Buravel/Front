import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo_png.png";
import "./template2.scss";
import "./common.scss";

const Template2 = ({ children }) => {
  return (
    <div className="template">
      <div className="full-screen">
        <div className="white-screen02">
          <Link to="/">
            <img className="logo style02" src={logoImg} alt="" />
          </Link>
          <div className="TemplateBlock2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Template2;
