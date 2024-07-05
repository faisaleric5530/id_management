import './App.css';
import Login from "./components/login/Login.jsx"
import Main from "./components/layouts/Main.jsx"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


function App() {

  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  return (
    <>
    { loginWithRedirect && isAuthenticated ? <Main /> : <Login />}
    </>
  );
}

export default App;
