import React from "react";
import Hamburger from "../../Assets/Hamburger/Hamburger";
import "./Header.css";
import searchIcon from "../../Assets/Images/searchIcon.png";

function Header() {
  return (
    <div className="header-container">
      <div className="search-bar-container">
        <div className="search-bar">
          <img alt="search" src={searchIcon} />
          <input type="text" placeholder="Search Codedesk"></input>
        </div>
      </div>
      <div className="hamburger-container">
        <Hamburger />
      </div>
    </div>
  );
}

export default Header;
