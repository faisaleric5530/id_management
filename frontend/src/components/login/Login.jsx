import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.scss";
import idLogo from "../../assets/id_logo.png";

const LoginForm = () => {
  const [isTypingUsername, setIsTypingUsername] = useState(false);
  const [isTypingPassword, setIsTypingPassword] = useState(false);


  const { user, loginWithRedirect } = useAuth0();

  console.log("currentUser", user);

  const initialValues = {
    username: user?.email || "",
    password: user?.nickname || "",
  };

  const validationSchema = Yup.object({
    username: Yup.string(),
    password: Yup.string(),
  });

  const onSubmit = (values, { setSubmitting }) => {
    loginWithRedirect();
    console.log("Form data", values);
    setSubmitting(false);
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        <div className="login-form-header">
          <img src={idLogo} alt="User Icon" className="user-icon" />
          <h2>Linux ID Management</h2>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="form-group">
                {isTypingUsername && (
                  <label className="lables" htmlFor="username">
                    Username
                    <span className="validationstars">*</span>
                  </label>
                )}
                <Field
                  type="text"
                  name="username"
                  placeholder="Username*"
                  className="form-control"
                  onFocus={() => setIsTypingUsername(true)}
                  onBlur={() => setIsTypingUsername(false)}
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="error-message"
                />
              </div>
              <div className="form-group">
                {isTypingPassword && (
                  <label className="lables" htmlFor="password">
                    Password
                    <span className="validationstars">*</span>
                  </label>
                )}
                <Field
                  type="password"
                  name="password"
                  placeholder="Password*"
                  className="form-control"
                  onFocus={() => setIsTypingPassword(true)}
                  onBlur={() => setIsTypingPassword(false)}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error-message"
                />
              </div>
              <button
                type="submit"
                className="login-button"
                disabled={isSubmitting}
              >
                LOGIN
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
