import React from "react";
import Footer from "../../Assets/Footer/Footer";
import "./AddStats.css";
import viewsDetailedAdd from "../../Assets/Images/viewsDetailedAdd.png";
import detailedAddHeart from "../../Assets/Images/detailedAddHeart.png";
import detailedAddFigure from "../../Assets/Images/detailedAddFigure.png";

function Addstats() {
  return (
    <div className="right-sidebar">
      <div className="add-stats-container signup-sidebar-container">
        <div className="detailed-add-stats-container">
          <div>
            <div className="detailed-add-stats">1431</div>
            <img
              className="detailed-add-stats-img"
              alt="views"
              src={viewsDetailedAdd}
            />
          </div>
          <div>
            <div className="detailed-add-stats">782</div>
            <img
              className="detailed-add-stats-img"
              alt="heart"
              src={detailedAddHeart}
            />
          </div>
          <div>
            <div className="detailed-add-stats">48</div>
            <img
              className="detailed-add-stats-img"
              alt="applicants"
              src={detailedAddFigure}
            />
          </div>
        </div>
        <div className="apply">Apply for interview</div>
        <div>
          <div className="sidebar-stats-subtitle">Salary</div>
          <div className="job-details">$3000-$5000 /month</div>
          <div className="sidebar-stats-subtitle">Work type</div>
          <div className="job-details">Remote</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Addstats;
