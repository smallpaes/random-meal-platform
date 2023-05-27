import styled from 'styled-components';
import { ReactComponent as BowlSvg } from '../../assets/bowl.svg';
import backgroundUrl from '../../assets/pineapple.png';
import { FullHeight } from '../../theme/utils';

export const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: 100%;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundUrl});
  gap: 1rem;
  padding: 1rem;
  overflow: auto;
  ${FullHeight}

  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100%;
    overflow: hidden;
  }
  ${({ theme }) => theme.media.lg} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CheckoutSidebar = styled.aside`
  display: none;
  ${({ theme }) => theme.media.md} {
    display: flex;
    align-items: center;
  }
`;

export const SidebarTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
`;

export const SidebarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CheckoutInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  /* height: 100%; */
`;

export const CheckoutSummary = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  ${({ theme }) => theme.media.md} {
    max-height: 70%;
  }
`;

export const CheckoutItems = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CheckoutDivider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.dark[100]};
  margin: 0.5rem 0;
`;

export const CheckoutOutTotal = styled.div`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.dark[200]};
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export const EmptyMessageContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export const BowlIcon = styled(BowlSvg)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.colors.primary};
`;

export const EmptyMessageTitle = styled.h5`
  color: ${({ theme }) => theme.colors.primary};
`;
