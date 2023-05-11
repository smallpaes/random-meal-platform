import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  LogoContainer,
  Logo,
  LogoText,
  NanLinksContainer,
  NavLinksItem,
} from './navbar.styles';

const Navbar: FC = (): ReactElement => {
  return (
    <NavbarContainer>
      <Link to="/">
        <LogoContainer>
          <Logo />
          <LogoText>Foodie</LogoText>
        </LogoContainer>
      </Link>
      <NanLinksContainer>
        <NavLinksItem>
          <Link to="/meals">Meals</Link>
        </NavLinksItem>
        <NavLinksItem>
          <Link to="/sign-in">Sign In</Link>
        </NavLinksItem>
      </NanLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
