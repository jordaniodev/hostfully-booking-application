import { useNavigate } from 'react-router-dom';
import { Container } from "../Container/Container.style";
import airPlaneIcon from "./../../../assets/img/icons/airplane.svg";
import bedIcon from "./../../../assets/img/icons/bed.svg";
import userIcon from "./../../../assets/img/icons/user.svg";
import Logo from "./../../../assets/img/logo.png";
import { Button } from "./../../buttons/Button/index";
import {
  HeaderContainer,
  HeaderContent,
  LoginContainer,
  LogoHeader,
  NavItemHeader,
  NavListHeader,
} from "./Header.style";
export const Header = () => {
  const navigate  = useNavigate();
  return (
    <HeaderContainer>
        <HeaderContent>
          <nav>
            <NavListHeader>
              <NavItemHeader onClick={() => navigate('/filter')} >
                <img src={airPlaneIcon} alt="Find Flight" />
                <span>Find Flight</span>
              </NavItemHeader>
            </NavListHeader>
          </nav>
          <LogoHeader src={Logo} alt="Hostfully" className="logo" onClick={() => navigate('/')} />
          <LoginContainer>
            <a href="#">Login</a>
            <Button category="outline">Sign up</Button>
          </LoginContainer>
          <LoginContainer className="mobile">
            <img src={userIcon} alt="User" />
          </LoginContainer>
        </HeaderContent>
    </HeaderContainer>
  );
};
