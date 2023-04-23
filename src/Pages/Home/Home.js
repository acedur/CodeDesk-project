import React from "react";
import AddSnippet from "../../Clomponents/AddSnippet/AddSnippet";
import SignupSidebar from "../../Clomponents/SignupSidebar/SignupSidebar";
import "./Home.css";

function Home() {
  return (
    <div className="site-content">
      <AddSnippet />
      <SignupSidebar />
    </div>
  );
}

export default Home;
