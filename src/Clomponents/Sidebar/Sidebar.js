import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import CardContext from "../../Context/CardActions/CardContext";

function Sidebar() {
  const { filter, setFilter } = useContext(CardContext);

  const categories = [
    "Home",
    "Software development",
    "Software testing",
    "DevOps",
    "Design, UX, UI",
    "Product management",
  ];

  const handleClick = (category) => {
    setFilter(category);
  };

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
          <div className="sidebar-menu sidebar-categories">
            {categories.map((category) => {
              return (
                <div
                  onClick={() => handleClick(category)}
                  key={category}
                  className={
                    category === filter
                      ? "sidebar-menu-button-active"
                      : "sidebar-menu-button"
                  }
                  type="radio"
                >
                  {category}
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
