import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { NavBarHeight } from '../../theme/utils';

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light[300]};
  background-color: ${({ theme }) => theme.colors.light[100]};
  z-index: 2;
  ${NavBarHeight};
`;

export const NanLinksContainer = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const NavLinksItem = styled.li`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    background-color: ${({ theme }) => theme.colors.secondary};
    height: 0.1rem;
    transition: all 0.2s linear;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const LogoText = styled.span`
  font-family: 'Dancing Script';
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
`;

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 100%;
  fill: ${({ theme }) => theme.colors.primary};
`;
