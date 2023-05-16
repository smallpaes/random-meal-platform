import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../store/user/user.selector';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import {
  NavbarContainer,
  LogoContainer,
  Logo,
  LogoText,
  NanLinksContainer,
  NavLinksItem,
} from './navbar.styles';

const Navbar: FC = (): ReactElement => {
  const { user } = useSelector(selectUser);
  console.log(user);
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
        {user ? (
          <NavLinksItem onClick={signOutAuthUser}>Sign Out</NavLinksItem>
        ) : (
          <NavLinksItem>
            <Link to="/sign-in">Sign In</Link>
          </NavLinksItem>
        )}
      </NanLinksContainer>
    </NavbarContainer>
  );
};

export default Navbar;
