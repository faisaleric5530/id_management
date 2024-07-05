import React from "react";
import "./Main.scss";
import Header from "../header/Header.jsx";
import SideNav from "../sidenav/SideNav.jsx";
import Home from "../../pages/Home.jsx";

const Main = () => {
  const mainContentStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    width: "100%",
  };

  return (
    <div>
      <Header />
      <div style={mainContentStyles}>
        <SideNav />
        <div
          className="pageNavigation"
          style={{ width: "calc(100% - 200px)",padding : "1rem" }}
        >
            <Home />
        </div>
      </div>
    </div>
  );
};

export default Main;
