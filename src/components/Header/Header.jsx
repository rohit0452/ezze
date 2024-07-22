import React, { useState } from "react";
import "./Header.css";
import Logo from "../../images/UpstartAi logo_4 1.png";
// import UserImage from "../../images/Rectangle 7.png"
import { Link } from "react-router-dom";


const Header = () => {
  const [active, setActive] = useState(1);
  return (
    <div className="row">
      <div
        style={{
          background: "#081C2F",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "60px",
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #AAAAAA",
          }}
          className="padding_important"
        >
          <img style={{ width: "60%", height: "60%" }} src={Logo} alt="Logo" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: " calc(100% - 100px)",
          }}
        >
          <div>
            <div 
              onClick={() => setActive(1)}
              className={
                active == 1 ? "sidebar_item sidebar_card" : "sidebar_card"
              }
              style={{ cursor: "pointer" }}
            >
                <Link to={'/'}>
              
              <p className="padding_important1">Employee Department</p>
            </Link>
            </div>
            <div
              onClick={() => setActive(2)}
              className={active == 2 ? "sidebar_item mt-2" : "mt-2"}
              style={{ cursor: "pointer" }}
            >
              <Link to={'department'}> 
              <p className="padding_important1">Department</p>
              </Link>
            </div>
          </div>
          <div style={{ cursor: "pointer" }} className="padding_important">
            Help
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
