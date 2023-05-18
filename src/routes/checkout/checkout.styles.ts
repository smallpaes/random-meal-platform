import styled from 'styled-components';
import backgroundUrl from '../../assets/pineapple.png';

export const CheckoutContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  height: 80vh;
  background-position-y: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${backgroundUrl});
  ${({ theme }) => theme.media.md} {
    grid-template-columns: 1fr 2fr;
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
  max-height: 450px;
  /* background-color: ${({ theme }) => theme.colors.light[200]}; */
  background-color: ${({ theme }) => theme.colors.light[100]};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 4px #00000014, 0 0 0 1px #0000000a;
  ${({ theme }) => theme.media.md} {
    max-height: 600px;
    margin: 1rem;
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
