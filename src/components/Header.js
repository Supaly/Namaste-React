import { useState } from "react";
import { CDN_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
// import reactlogo from  "../../img/header_logo.jpg";

const Header = () => {
  const[btnName, setBtnName] = useState("Login")
    return (
      <div className="header">
        <img className="header-logo" alt="headerlogo" src={CDN_LOGO}></img>
        {/* <img className="header-logo" alt="headerlogo"src={reactlogo}></img> */}
        <div className="nav-items">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
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