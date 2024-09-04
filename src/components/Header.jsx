
import { logoUrl } from "../utils/contants";
const Header =() =>{
    return (
  <div className="header">  {/* Updated className to match the CSS */}
        <div>
          <img
            className="logo"
            src={logoUrl}
            alt="Pizza Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
  )
  }
export default Header;  