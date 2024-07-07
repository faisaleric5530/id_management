import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Table, Button } from "reactstrap";
import axios from "axios";
import "./index.scss";

const ServerDetails = () => {
  const { id } = useParams();
  const [server, setServer] = useState({
    name: "Default Hostname",
    ipAddress: "192.168.1.1",
    port: 22,
    sshUser: "defaultUser",
    createdDate: "2023-01-01",
    updatedDate: "2023-01-01",
  });
  const [connectionStatus, setConnectionStatus] = useState("");
  const [fetchServers, setFetchServers] = useState(false);
  const [testConnectionClicked, setTestConnectionClicked] = useState(false);
  const [fetchUserServersClicked, setFetchUserServersClicked] = useState(false);
  const [backButtonClicked, setBackButtonClicked] = useState(false);

  const fetchedServers = [
    { name: "root", updatedAt:"", users: "Yes", createdDate: "2024-06-06T23:30:00.000+00:00" },
    { name: "ubuntu", updatedAt:"", users: "Yes", createdDate: "2024-06-06T23:30:00.000+00:00" },
    { name: "jthirupathi3200", updatedAt:"", users: "Yes", createdDate: "2024-06-06T23:31:00.000+00:00" },
    { name: "hassan", updatedAt:"", users: "Yes", createdDate: "2024-06-15T04:30:00.000+00:00" },
    { name: "hassan_cissp", updatedAt:"", users: "No", createdDate: "2024-06-06T23:45:00.000+00:00" },
    { name: "testusert", updatedAt:"", users: "No", createdDate: "2024-06-11T03:57:00.000+00:00" },
  ];

  useEffect(() => {
    axios
      .get(`/api/servers/${id}`)
      .then((response) => setServer(response.data))
      .catch((error) => console.error("Error fetching server details:", error));
  }, [id]);

  const testConnection = () => {
    setTestConnectionClicked(true);
    setFetchUserServersClicked(false);
    setBackButtonClicked(false);
    setConnectionStatus(`"Connection Successful"`);
  };

  const fetchUserServers = () => {
    setTestConnectionClicked(false);
    setFetchUserServersClicked(true);
    setBackButtonClicked(false);
    setFetchServers(true);
  };

  const backButtonHandler = () => {
    setTestConnectionClicked(false);
    setFetchUserServersClicked(false);
    setBackButtonClicked(true);
  };

  return (
    <>
      <p className="page-title">Server Details</p>
      <div className="server-details" style={{ padding: "1rem" }}>
        <div className="details">
          <div>
            <p>
              <strong style={{ marginRight: "5px" }}>Hostname:</strong> {server.name}
            </p>
            <p>
              <strong style={{ marginRight: "5px" }}>Port:</strong> {server.port}
            </p>
            <p>
              <strong style={{ marginRight: "5px" }}>Created Date:</strong> {server.createdDate}
            </p>
          </div>
          <div>
            <p>
              <strong style={{ marginRight: "5px" }}>IP Address:</strong> {server.ipAddress}
            </p>
            <p>
              <strong style={{ marginRight: "5px" }}>SSH User:</strong> {server.sshUser}
            </p>
            <p>
              <strong style={{ marginRight: "5px" }}>Updated Date:</strong> {server.updatedDate}
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "start",
            marginBottom: "1rem",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <button
              className={testConnectionClicked ? "selectedBlueButton" : "blueButtons"}
              onClick={testConnection}
            >
              TEST CONNECTION
            </button>
            <button
              className={fetchUserServersClicked ? "selectedBlueButton" : "blueButtons"}
              onClick={fetchUserServers}
            >
              Fetch Server User
            </button>
            <button
              className={backButtonClicked ? "selectedBlueButton" : "blueButtons"}
              onClick={backButtonHandler}
            >
              Back
            </button>
          </div>
          {connectionStatus && <p className="connection">{connectionStatus}</p>}
        </div>
        {fetchServers && (
          <Table bordered>
            <thead>
              <tr>
                <th>User Name</th>
                <th>Sub Access</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {fetchedServers.map((server, index) => (
                <tr key={index}>
                  <td>{server.name}</td>
                  <td>{server.users}</td>
                  <td>{server.createdDate}</td>
                  <td>{server.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </>
  );
};

export default ServerDetails;
