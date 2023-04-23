import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Clomponents/Header/Header";
import Sidebar from "./Clomponents/Sidebar/Sidebar";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="header-site-content">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
