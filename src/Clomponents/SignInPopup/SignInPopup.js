import React from "react";
import "./SignInPopup.css";

function SignInPopup({ handleModal }) {
  return (
    <div className="modal-container" onClick={() => handleModal(false)}>
      <div
        className="modal-container-div"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="title">Login to Codedesk</div>
        <input
          className="login-input light-font"
          type={"text"}
          placeholder={"Username"}
        ></input>
        <input
          className="login-input"
          type={"password"}
          placeholder={"Password"}
        ></input>
        <div className="continue">Continue</div>
        <div className="remember-forgot">
          <div className="remember">
            <input type="checkbox" name="remember" value="RememberMe" />
            {"Remember me?"}
          </div>
          <div className="forgot">Forgot password?</div>
        </div>
        <div className="member-join">
          <div>Not a member yet?</div>
          <div className="join">Join now</div>
        </div>
      </div>
    </div>
  );
}

export default SignInPopup;
