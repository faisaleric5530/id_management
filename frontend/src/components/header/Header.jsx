import React from "react";
import "./Header.scss";
import userIcon from "../../assets/userIcon.jpg";
import exit from "../../assets/exit.svg";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {

  const { user, logout } = useAuth0();

  console.log("user", user);

  return (
    <>
      <div className="mainHeader">
        <div className="appTitle">
            <h3>Linux ID Management</h3>
        </div>
        <div className="headComps">
            <div className="userIconDiv">
              {user && user.picture ? 
                <img src={user.picture} alt="" className="w-100" />
                : <img src={userIcon} alt="" className="w-100" />
              }
            </div>
            <div className="userNameDiv">
              {user && user.name && <p>{`Welcome! "${user.name}"`}</p>}
            </div>
            <div className="logOutIcon"
              onClick={() => logout()}
            >
                <img src={exit} alt="" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;
