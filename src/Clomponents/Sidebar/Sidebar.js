import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import homeIcon from "../../Assets/Images/home.png";
import Data from "../AddSnippet/Data";
import CardContext from "../../Context/CardActions/CardContext";

function Sidebar() {
  const cardContext = useContext(CardContext);
  const filterSnippets = cardContext;
  const handleClick = (value) => {
    filterSnippets.filterSnippets(value);
  };

  const categories = [...new Set(Data.map((Val) => Val.category))];

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
          <NavLink to={"/"} className="sidebar-menu">
            <img className="sidebar-menu-icon" alt="home" src={homeIcon} />
            <div className="sidebar-menu-button">Home</div>
          </NavLink>
          <div className="sidebar-menu sidebar-categories">
            {categories.map((Val, id) => {
              return (
                <div
                  onClick={() => handleClick(Val)}
                  key={id}
                  className="sidebar-menu-button"
                  type="radio"
                >
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
