import React from "react";
import Header from "../header/Header.jsx";
import SideNav from "../sidenav/SideNav.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home.jsx";
import ServerList from "../../pages/serverList.jsx";
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
            style={{ width: "calc(100% - 200px)"}}
          >
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/servers" element={<ServerList />} />
              <Route path="/servers/addServer" element={<ServerList />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Main;
