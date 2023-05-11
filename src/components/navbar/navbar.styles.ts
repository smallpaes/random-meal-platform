import styled from 'styled-components';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.light[300]};
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

export const Logo = styled(LogoSvg)`
  width: 40px;
  height: 100%;
  fill: ${({ theme }) => theme.colors.primary};
`;
