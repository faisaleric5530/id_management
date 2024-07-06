import React from "react";
import "./Main.scss";
import Header from "../header/Header.jsx";
import SideNav from "../sidenav/SideNav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import ServerDetails from "../../pages/serverDetails.jsx";

const Main = () => {
  const mainContentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
  };

  return (
    <Router>
      <div>
        <Header />
        <div style={mainContentStyles}>
          <SideNav />
          <div
            className="pageNavigation"
            style={{ width: "calc(100% - 200px)", padding: "1rem" }}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/servers" element={<ServerDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
