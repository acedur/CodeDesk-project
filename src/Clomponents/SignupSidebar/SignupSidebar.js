import React, { useState } from "react";
import Footer from "../../Assets/Footer/Footer";
import SignInPopup from "../SignInPopup/SignInPopup";
import "./SignupSidebar.css";
import linkedIn from "../../Assets/Images/linkedIn.png";
import google from "../../Assets/Images/google.png";

function SignupSidebar() {
  const [showModal, setShowModal] = useState(false);
  const handleModal = (value) => {
    setShowModal(value);
  };
  return (
    <>
      <div className="right-sidebar">
        <div className="signup-sidebar-container">
          <div className="signup-sidebar-heading">Remote hiring made easy.</div>
          <div className="signup-social">
            <img alt="Linked In" src={linkedIn} />
            <div>Sign up with Linkedin</div>
          </div>
          <div className="signup-social">
            <img alt="google" src={google} />
            <div>Sign up with Google</div>
          </div>
          <div className="signup-or">
            <span>or</span>
          </div>
          <div className="signup-phone-email">Signup with phone or email</div>
          <div className="signup-terms">
            By signing up, you agree to the Terms of Service and Privacy Policy,
            including Cookie Use.
          </div>
          <div className="signup-have-an-account">Already have an account?</div>
          <div className="signup-sign-in" onClick={() => handleModal(true)}>
            Sign in
          </div>
        </div>
        <Footer />
        {showModal && <SignInPopup handleModal={handleModal} />}
      </div>
    </>
  );
}

export default SignupSidebar;
