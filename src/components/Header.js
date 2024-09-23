import { CDN_LOGO } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <img className="header-logo" alt= "headerlogo" src={CDN_LOGO}></img>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>contact Us</li>
          </ul>
        </div>
      </div>
    )
  }

  export default Header;