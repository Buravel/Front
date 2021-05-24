import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo_png.png";
import basic from "./image.png";
import "./template.scss";
import "./common.scss";

const Template = ({ children }) => {
  return (
    <div className="template">
      <div className="full-screen">
        <div className="white-screen01">
          <Link to="/">
            <img className="logo style01" src={logoImg} alt="" />
          </Link>
          <div className="TemplateBlock">
            <img className="basicImage" src={basic} alt="" />
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
