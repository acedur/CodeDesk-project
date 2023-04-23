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
            <div className="add-snippet-container" key={Val.id}>
              <img className="company-logo" alt="Google" src={google} />
              <div className="add-snippet-content-container">
                <div className="snippet-company-time">
                  <div className="snippet-company">
                    <div>{Val.company}</div>
                    <img className="valid" alt="valid" src={valid} />
                  </div>
                  <div className="time">
                    <div className="dot"></div>
                    <div>{Val.time}</div>
                  </div>
                </div>
                <div className="snippet-position">{Val.position}</div>
                <div className="snippet-location">
                  <img
                    className="snippet-location-img"
                    alt="location"
                    src={locationPin}
                  />
                  <div>{Val.location}</div>
                </div>
                <div className="snippet-description">{Val.description}</div>
                <div className="snippet-statistics">
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="views"
                      src={viewsLogo}
                    />
                    <div>{Val.views}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="heart"
                      src={heart}
                    />
                    <div>{Val.likes}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="figure"
                      src={figure}
                    />
                    <div>{Val.applicants}</div>
                  </div>
                  <div className="dsp-flex-cent">
                    <img
                      className="snippet-statistics-logo"
                      alt="share"
                      src={share}
                    />
                    <div>{Val.shares}</div>
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
