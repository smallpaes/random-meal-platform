import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  Logo,
  NanLinksContainer,
  NavLinksItem,
} from './navbar.styles';

const Navbar: FC = (): ReactElement => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo />
      </Link>
      <NanLinksContainer>
        <NavLinksItem>
          <Link to="/meals">Meals</Link>
        </NavLinksItem>
        <li>Second</li>
      </NanLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
