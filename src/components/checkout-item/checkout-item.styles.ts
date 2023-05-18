import styled from 'styled-components';
import { ReactComponent as ArrowRightSvg } from '../../assets/arrow-right.svg';
import { ReactComponent as CloseSvg } from '../../assets/close.svg';

export const CheckoutItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr auto;
  gap: 0.5rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  height: 80px;
  object-fit: cover;
`;

export const RemoveButton = styled(CloseSvg)`
  fill: ${({ theme }) => theme.colors.dark[200]};
  user-select: none;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;

export const ArrowRightIcon = styled(ArrowRightSvg)`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  width: 1rem;
  fill: ${({ theme }) => theme.colors.dark[200]};
  cursor: pointer;
`;

export const ArrowUpIcon = styled(ArrowRightIcon)`
  transform: rotate(-90deg);
`;

export const ArrowDownIcon = styled(ArrowRightIcon)`
  transform: rotate(90deg);
`;

export const CheckoutItemQuantity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`;
