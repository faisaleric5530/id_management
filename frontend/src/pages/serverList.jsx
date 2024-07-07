import React, { useState } from "react";
import "./index.scss";
import "./serverList.scss";
import { Table, Button } from "reactstrap";
import { Link } from "react-router-dom";

const ServerList = () => {
  const [clicked,setClicked] = useState(false);

  const serverData = [
    { name: "localhost_1", ip: "10.10.10.2", port: 22, users: 1 },
    { name: "localhost_2", ip: "10.10.10.1", port: 22, users: 2 },
    { name: "GCP_Ubuntu", ip: "34.87.25.44", port: 22, users: 0 },
  ];

  return (
    <>
      <p className="page-title">Servers List</p>
      <div className="serverLists">
        <Link to="/servers/addServer">
          <Button className={clicked ? "" : "clickedBtn"} onClick={()=> setClicked(true)}>+ ADD NEW SERVER</Button>
        </Link>
        <Table bordered>
          <thead>
            <tr>
              <th>Server Name</th>
              <th>IP Address</th>
              <th>SSH Port</th>
              <th>No of Users</th>
            </tr>
          </thead>
          <tbody>
            {serverData.map((server, index) => (
              <tr key={index}>
                <td style={{color : "#5638ce", cursor : "pointer"}}>
                <Link to="/servers/serverDetails" style={{textDecoration : "none"}}>
                  {server.name}
                </Link>
                </td>
                <td>{server.ip}</td>
                <td>{server.port}</td>
                <td>{server.users}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ServerList;
