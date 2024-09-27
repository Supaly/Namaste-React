import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";

const Header = () => {
  const[btnName, setBtnName] = useState("Login")
    return (
      <div className="header">
        <img className="header-logo" alt= "headerlogo" src={CDN_LOGO}></img>
        <img src="../../img/header_logo.jpg"></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>contact Us</li>
            <button  className="login" onClick={()=> {
              btnName=="Login"?
              setBtnName("Logout"):
              setBtnName("Login")
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;