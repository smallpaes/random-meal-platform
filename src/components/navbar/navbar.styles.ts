import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
`;

export const NanLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 100%;
  fill: ${({ theme }) => theme.colors.primary};
`;
