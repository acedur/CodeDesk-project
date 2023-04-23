import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Clomponents/Header/Header";
import Sidebar from "./Clomponents/Sidebar/Sidebar";
import CardState from "./Context/CardActions/CardState";

function App() {
  return (
    <CardState>
      <div className="app">
        <Sidebar />
        <div className="header-site-content">
          <Header />
          <Outlet />
        </div>
      </div>
    </CardState>
  );
}

export default App;
