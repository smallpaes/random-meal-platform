import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { NavbarContainer, Logo, NanLinksContainer } from './navbar.styles';

const Navbar: FC = (): ReactElement => {
  return (
    <NavbarContainer>
      <Link to="/">
        <Logo />
      </Link>
      <NanLinksContainer>
        <li>
          <Link to="/meals">Meals</Link>
        </li>
        <li>Second</li>
      </NanLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
