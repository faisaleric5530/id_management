import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faServer,
  faUsers,
  faChartBar,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./Home";
// import Servers from "./Servers";
// import Users from "./Users";
// import Reports from "./Reports";
// import Settings from "./Settings";
import "./SideNav.scss";

const SideNav = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
      .get("menu.json")
      .then((res) => {
        if (res?.data) {
          let resData = res.data;
          resData = resData.menus ? resData.menus : [];
          setMenus(resData);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("An error occurred while fetching the menu JSON");
      });
  }, []);

  const iconMapping = {
    home: faHome,
    servers: faServer,
    users: faUsers,
    reports: faChartBar,
    settings: faCog
  };

  return (
    <Router>
      <div className="app">
        <div className="sidenav">
          {menus.map((menu, index) => (
            <Link key={index} to={menu.link} className="sidenav-link">
              <div className="sidenav-item">
                <FontAwesomeIcon icon={iconMapping[menu.icon]} className="icon" />
                <span>{menu.label}</span>
              </div>
            </Link>
          ))}
        </div>
        {/* <div className="main-content">
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/servers" element={<Servers />} />
            <Route path="/users" element={<Users />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div> */}
      </div>
    </Router>
  );
};

export default SideNav;
