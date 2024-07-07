import React, { useState } from "react";
import "./index.scss";
import "./addserver.scss";
import { Formik, Field, Form } from "formik";
import { InputGroup, Form as BootstrapForm } from "react-bootstrap";

const Adding = () => {
  const [connection, setConnection] = useState("");
  const [addserver, setAddserver] = useState("");
  const [cancelbtn, setCancelbtn] = useState(false);

  const initialValues = {
    hostName: "",
    ipAddress: "",
    port: "",
    username: "",
    password: "",
    useSecretKey: false,
    secretKeyFile: null,
    passphrase: "",
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <p className="page-title">Add New Server</p>
      <div className="serverInfo">
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {({ setFieldValue, values }) => (
            <Form>
              <p
                style={{
                  color: "black",
                  fontSize: "x-large",
                  marginBottom: "30px",
                }}
              >
                Server Information
              </p>

              <BootstrapForm.Group className="formGroup w-100" controlId="hostName">
                <InputGroup>
                  <Field
                    className="inputFields"
                    name="hostName"
                    as={BootstrapForm.Control}
                    placeholder="Host Name"
                  />
                  <BootstrapForm.Label className="addserverLables">
                    Host Name
                  </BootstrapForm.Label>
                </InputGroup>
              </BootstrapForm.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  gap: "1rem",
                }}
              >
                <BootstrapForm.Group className="formGroup" controlId="ipAddress">
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="ipAddress"
                      as={BootstrapForm.Control}
                      placeholder="IP Address*"
                    />
                    <BootstrapForm.Label className="addserverLables">
                      IP Address
                    </BootstrapForm.Label>
                  </InputGroup>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="formGroup" controlId="port">
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="port"
                      as={BootstrapForm.Control}
                      placeholder="Port*"
                    />
                    <BootstrapForm.Label className="addserverLables">
                      Port
                    </BootstrapForm.Label>
                  </InputGroup>
                </BootstrapForm.Group>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                  gap: "1rem",
                }}
              >
                <BootstrapForm.Group className="formGroup" controlId="username">
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="username"
                      as={BootstrapForm.Control}
                      placeholder="Username*"
                    />
                    <BootstrapForm.Label className="addserverLables">
                      Username
                    </BootstrapForm.Label>
                  </InputGroup>
                </BootstrapForm.Group>

                <BootstrapForm.Group className="formGroup" controlId="password">
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="password"
                      type="password"
                      as={BootstrapForm.Control}
                      placeholder="Password*"
                    />
                    <BootstrapForm.Label className="addserverLables">
                      Password
                    </BootstrapForm.Label>
                  </InputGroup>
                </BootstrapForm.Group>
              </div>

              <BootstrapForm.Group className="formGroup" controlId="useSecretKey">
                <BootstrapForm.Check
                  type="checkbox"
                  label="Use Secret Key"
                  checked={values.useSecretKey}
                  onChange={() => setFieldValue("useSecretKey", !values.useSecretKey)}
                  style={{
                    margin: "1rem 0px",
                  }}
                />
              </BootstrapForm.Group>

              {values.useSecretKey && (
                <>
                  <BootstrapForm.Group className="formGroup" controlId="secretKeyFile">
                    <InputGroup>
                      <input
                        name="secretKeyFile"
                        type="file"
                        onChange={(event) => {
                          setFieldValue("secretKeyFile", event.currentTarget.files[0]);
                        }}
                      />
                    </InputGroup>
                  </BootstrapForm.Group>

                  <BootstrapForm.Group className="formGroup" controlId="passphrase">
                    <InputGroup>
                      <Field
                        className="inputFields"
                        name="passphrase"
                        as={BootstrapForm.Control}
                        placeholder="Passphrase"
                      />
                      <BootstrapForm.Label className="addserverLables">
                        Passphrase
                      </BootstrapForm.Label>
                    </InputGroup>
                  </BootstrapForm.Group>
                </>
              )}

              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "20px",
                }}
              >
                <button
                  className={connection ? "blueBtnsSelected" : "blueBtns"}
                  type="button"
                  onClick={() => setConnection(`"Connected Successfully"`)}
                >
                  Test Connection
                </button>
                <button
                  className={addserver ? "blueBtnsSelected" : "blueBtns"}
                  type="submit"
                  onClick={() => {
                    setConnection("");
                    setAddserver(`"Server Added Successfully"`);
                  }}
                >
                  Add Server
                </button>
                <button
                  className={cancelbtn ? "blueBtnsSelected" : "blueBtns"}
                  type="button"
                  onClick={() => {
                    setCancelbtn(true);
                    setConnection("");
                    setAddserver("");
                  }}
                >
                  Cancel
                </button>
              </div>
              <p className="connection">{connection ? connection : ""}</p>
              <p className="connection">{addserver ? addserver : ""}</p>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Adding;
