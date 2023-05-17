import { FC, ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectUser } from '../../store/user/user.selector';
import { signOutAuthUser } from '../../utils/firebase/firebase.utils';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';

import { selectIsCartOpen } from '../../store/cart/cart.selector';

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
  const isCartOpen = useSelector(selectIsCartOpen);
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
        <li>
          <CartIcon />
        </li>
      </NanLinksContainer>
      {isCartOpen && <CartDropdown />}
    </NavbarContainer>
  );
};

export default Navbar;
