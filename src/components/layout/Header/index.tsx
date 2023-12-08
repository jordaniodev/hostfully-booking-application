import airPlaneIcon from "./../../../assets/img/icons/airplane.svg";
import bedIcon from "./../../../assets/img/icons/bed.svg";
import userIcon from "./../../../assets/img/icons/user.svg";
import Logo from "./../../../assets/img/logo.png";
import { Button } from "./../../buttons/Button/index";
import "./Header.scss";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <ul>
            <li className="selected">
              <img src={airPlaneIcon}  alt="Find Flight"/>
              <span>Find Flight</span>
            </li>
            <li>
              <img src={bedIcon} alt="Find Stays" />
              <span>Find Stays</span>
            </li>
          </ul>
        </nav>
        <img src={Logo} alt="Hostfully" className="logo" />
        <div className="container-login">
          <a href="#">Login</a>
          <Button category="outline">Sign up</Button>
        </div>
        <div className="container-login mobile">
          <img src={userIcon} alt="User" />
        </div>
      </div>
    </header>
  );
};
