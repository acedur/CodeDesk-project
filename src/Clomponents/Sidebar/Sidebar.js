import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import homeIcon from "../../Assets/Images/home.png";
import Data from "../AddSnippet/Data";

function Sidebar() {
  const menuCats = [...new Set(Data.map((Val) => Val.category))];

  // const menuLogo = [...new Set(Data.map((Val) => Val.categoryLogo))];

  return (
    <>
      <div className="sidebar-container">
        <div className="sidebar-logo-container">
          <NavLink to={"/"} className="sidebar-logo">
            Codedesk
          </NavLink>{" "}
          <div className="trademark">&trade;</div>
        </div>
        <div className="sidebar-menu-container">
          <div className="sidebar-menu">
            <img className="sidebar-menu-icon" alt="home" src={homeIcon} />
            <div className="sidebar-menu-button">Home</div>
          </div>
          <div className="sidebar-menu sidebar-categories">
            {/* <img className="sidebar-menu-icon" alt="Category" src={menuLogo} /> */}
            {menuCats.map((Val, id) => {
              return (
                <div key={id} className="sidebar-menu-button">
                  {Val}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
