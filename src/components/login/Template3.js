import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./logo_png.png";
import "./template.scss";
import "./template3.scss";
import "./common.scss";

const Template3 = ({ children }) => {
  return (
    <div className="template">
      <div className="full-screen">
        <div className="white-screen01">
          <Link to="/">
            <img className="logo-leftalign" src={logoImg} alt="" />
          </Link>
          <div className="TemplateBlock3">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Template3;
