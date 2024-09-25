import { logoUrl } from "../utils/contants";
import { useState } from "react";
import{Link}from "react-router-dom";

const Header = () => {
  // State to manage the button text (login/logout)
  const [Btn_Log, SetBtn_Log] = useState("login");

  return (
    <div className="header">
      <div>
        <img className="logo" src={logoUrl} alt="Pizza Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Home</li>
            <li><Link to="/about">About</Link></li>
  <li><Link to="/contact">Contact</Link></li>
  <li><Link to="/cart">Cart</Link></li>
         
          <button
            className="log-btn"
            onClick={() => {
              // Toggle between login and logout
              Btn_Log === "login" ? SetBtn_Log("logout") : SetBtn_Log("login");
            }}
          >
            {Btn_Log}
          </button>


        </ul>
      </div>
    </div>
  );
};

export default Header;
