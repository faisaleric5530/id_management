import React, { useState } from "react";
import "./index.scss";
import "./addserver.scss";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { InputGroup, Button, Form as BootstrapForm } from "react-bootstrap";
import * as Yup from "yup";

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

  const validationSchema = Yup.object().shape({
    hostName: Yup.string().required("Host Name is required"),
    ipAddress: Yup.string().required("IP Address is required"),
    port: Yup.number().required("Port is required").positive().integer(),
    username: Yup.string().required("Username is required"),
    password: Yup.string().when("useSecretKey", {
      is: false,
      then: Yup.string().required("Password is required"),
    }),
    secretKeyFile: Yup.mixed().when("useSecretKey", {
      is: true,
      then: Yup.mixed().required("Secret Key File is required"),
    }),
    passphrase: Yup.string().when("useSecretKey", {
      is: true,
      then: Yup.string().required("Passphrase is required"),
    }),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <p className="page-title">Add New Server</p>
      <div className="serverInfo">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
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

              <BootstrapForm.Group
                className="formGroup w-100"
                controlId="hostName"
              >
                <BootstrapForm.Label className="addserverLables">
                  Host Name
                </BootstrapForm.Label>
                <InputGroup>
                  <Field
                    className="inputFields"
                    name="hostName"
                    as={BootstrapForm.Control}
                  />
                </InputGroup>
                <ErrorMessage
                  name="hostName"
                  component="div"
                  className="text-danger"
                />
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
                <BootstrapForm.Group
                  className="formGroup"
                  controlId="ipAddress"
                >
                  <BootstrapForm.Label className="addserverLables">
                    IP Address
                  </BootstrapForm.Label>
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="ipAddress"
                      as={BootstrapForm.Control}
                    />
                  </InputGroup>
                  <ErrorMessage
                    name="ipAddress"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group className="formGroup" controlId="port">
                  <BootstrapForm.Label className="addserverLables">
                    Port
                  </BootstrapForm.Label>
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="port"
                      as={BootstrapForm.Control}
                    />
                  </InputGroup>
                  <ErrorMessage
                    name="port"
                    component="div"
                    className="text-danger"
                  />
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
                  <BootstrapForm.Label className="addserverLables">
                    Username
                  </BootstrapForm.Label>
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="username"
                      as={BootstrapForm.Control}
                    />
                  </InputGroup>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>

                <BootstrapForm.Group className="formGroup" controlId="password">
                  <BootstrapForm.Label className="addserverLables">
                    Password
                  </BootstrapForm.Label>
                  <InputGroup>
                    <Field
                      className="inputFields"
                      name="password"
                      type="password"
                      as={BootstrapForm.Control}
                    />
                  </InputGroup>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-danger"
                  />
                </BootstrapForm.Group>
              </div>

              <BootstrapForm.Group
                className="formGroup"
                controlId="useSecretKey"
              >
                <BootstrapForm.Check
                  type="checkbox"
                  label="Use Secret Key"
                  checked={values.useSecretKey}
                  onChange={() =>
                    setFieldValue("useSecretKey", !values.useSecretKey)
                  }
                  style={{
                    margin: "1rem 0px",
                  }}
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group
                className="formGroup"
                controlId="secretKeyFile"
              >
                <InputGroup>
                  <input
                    name="secretKeyFile"
                    type="file"
                    onChange={(event) => {
                      setFieldValue(
                        "secretKeyFile",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                </InputGroup>
                <ErrorMessage
                  name="secretKeyFile"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              <BootstrapForm.Group className="formGroup" controlId="passphrase">
                <BootstrapForm.Label>Passphrase</BootstrapForm.Label>
                <InputGroup>
                  <Field
                    className="inputFields"
                    name="passphrase"
                    as={BootstrapForm.Control}
                  />
                </InputGroup>
                <ErrorMessage
                  name="passphrase"
                  component="div"
                  className="text-danger"
                />
              </BootstrapForm.Group>

              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  gap: "1rem",
                  marginTop: "20px",
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
                    setAddserver(`"Server Added Succesfully"`)
                  }}
                >
                  Add Server
                </button>
                <button
                  className={cancelbtn ? "blueBtnsSelected" : "blueBtns"}
                  type="button"
                  onClick={() => setCancelbtn(true)}
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
