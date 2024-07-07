import React from "react";
import "./index.scss";
import Barchart from "../components/BarChart/Barchart";

const Home = (currentPage) => {
  return (
    <>
      <p className="page-title">Dashboard</p>
      <div className="chartDiv">
        <Barchart />
      </div>
    </>
  );
};

export default Home;
