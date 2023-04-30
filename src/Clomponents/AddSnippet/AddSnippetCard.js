import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import valid from "../../Assets/Images/validCompany.png";
import google from "../../Assets/Images/google.png";
import locationPin from "../../Assets/Images/location.png";
import viewsLogo from "../../Assets/Images/viewsSnippet.png";
import heart from "../../Assets/Images/snippetHeart.png";
import figure from "../../Assets/Images/snippetFigure.png";
import share from "../../Assets/Images/snippetShare.png";
import CardContext from "../../Context/CardActions/CardContext";

function AddSnippetCard({
  company,
  time,
  position,
  category,
  location,
  description,
  views,
  likes,
  applicants,
  shares,
}) {
  const { filter } = useContext(CardContext);

  if (filter !== "Home" && filter !== category) {
    return null;
  }

  return (
    <NavLink to={"SingleAdd/"} className="content-container">
      <div className="add-snippet-container">
        <img className="company-logo" alt="Google" src={google} />
        <div className="add-snippet-content-container">
          <div className="snippet-company-time">
            <div className="snippet-company">
              <div>{company}</div>
              <img className="valid" alt="valid" src={valid} />
            </div>
            <div className="time">
              <div className="dot"></div>
              <div>{time}</div>
            </div>
          </div>
          <div className="snippet-position">{position}</div>
          <div className="snippet-location">
            <img
              className="snippet-location-img"
              alt="location"
              src={locationPin}
            />
            <div>{location}</div>
          </div>
          <div className="snippet-description">{description}</div>
          <div className="snippet-statistics">
            <div className="dsp-flex-cent">
              <img
                className="snippet-statistics-logo"
                alt="views"
                src={viewsLogo}
              />
              <div>{views}</div>
            </div>
            <div className="dsp-flex-cent">
              <img
                className="snippet-statistics-logo"
                alt="heart"
                src={heart}
              />
              <div>{likes}</div>
            </div>
            <div className="dsp-flex-cent">
              <img
                className="snippet-statistics-logo"
                alt="figure"
                src={figure}
              />
              <div>{applicants}</div>
            </div>
            <div className="dsp-flex-cent">
              <img
                className="snippet-statistics-logo"
                alt="share"
                src={share}
              />
              <div>{shares}</div>
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default AddSnippetCard;
