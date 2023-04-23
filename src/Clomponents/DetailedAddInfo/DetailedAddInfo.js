import React from "react";
import "./DetailedAddInfo.css";
import google from "../../Assets/Images/google.png";
import valid from "../../Assets/Images/validCompany.png";
import location from "../../Assets/Images/location.png";

function DetailedAddInfo() {
  return (
    <div className="detailed-add-container">
      <img className="company-logo" alt="Google" src={google} />
      <div className="add-snippet-content-container">
        <div className="snippet-company-time">
          <div className="snippet-company">
            <div>Google</div>
            <img className="valid" alt="valid" src={valid} />
          </div>
          <div className="time">
            <div className="dot"></div>
            <div>2hr ago</div>
          </div>
        </div>
        <div className="snippet-position">Product Manager</div>
        <div className="snippet-location">
          <img className="snippet-location-img" alt="location" src={location} />
          <div>San Francisko</div>
        </div>
        <div className="snippet-description">
          We have an open position at the gMail team. Apply mow and help us make
          gMail even better. We offer you the change to work on our team of
          developers that make a big difference in the world
        </div>
        <div className="position-description">
          <div>
            For this job position is very important to have the right motivation
            and to have the right skills and experience for the job
          </div>
          <div className="description-subtitle">Position requirements</div>
          <div>5+ Years of Experience in plain JavaScript</div>
          <div className="description-subtitle">Position benefits</div>
          <div>500K yearly sallary + stock options</div>
        </div>
      </div>
    </div>
  );
}

export default DetailedAddInfo;
