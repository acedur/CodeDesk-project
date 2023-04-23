import React from "react";
import { NavLink } from "react-router-dom";
import valid from "../../Assets/Images/validCompany.png";
import google from "../../Assets/Images/google.png";
import locationPin from "../../Assets/Images/location.png";
import viewsLogo from "../../Assets/Images/viewsSnippet.png";
import heart from "../../Assets/Images/snippetHeart.png";
import figure from "../../Assets/Images/snippetFigure.png";
import share from "../../Assets/Images/snippetShare.png";

function AddSnippetCard({ item }) {
  return (
    <>
      <NavLink to={"SingleAdd/"} className="content-container">
        {item.map((Val) => {
          return (
            <div className="add-snippet-container">
              <img className="company-logo" alt="Google" src={google} />
              <div className="add-snippet-content-container">
                <div className="snippet-company-time">
                  <div className="snippet-company">
                    <div key={Val.company}>{Val.company}</div>
                    <img className="valid" alt="valid" src={valid} />
                  </div>
                  <div className="time">
                    <div className="dot"></div>
                    <div key={Val.time}>{Val.time}</div>
                  </div>
                </div>
                <div key={Val.position} className="snippet-position">
                  {Val.position}
                </div>
                <div className="snippet-location">
                  <img
                    className="snippet-location-img"
                    alt="location"
                    src={locationPin}
                  />
                  <div key={Val.location}>{Val.location}</div>
                </div>
                <div key={Val.description} className="snippet-description">
                  {Val.description}
                </div>
                <div className="snippet-statistics">
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="views"
                      src={viewsLogo}
                    />
                    <div key={Val.views}>{Val.views}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="heart"
                      src={heart}
                    />
                    <div key={Val.likes}>{Val.likes}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="figure"
                      src={figure}
                    />
                    <div key={Val.applicants}>{Val.applicants}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="share"
                      src={share}
                    />
                    <div key={Val.shares}>{Val.shares}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </NavLink>
    </>
  );
}

export default AddSnippetCard;
