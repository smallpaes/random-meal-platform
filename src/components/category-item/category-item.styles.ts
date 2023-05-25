import styled from 'styled-components';

export const CategoryItemContainer = styled.div`
  width: 100px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
  flex-shrink: 0;
`;

export const CategoryItemImg = styled.img`
  width: 100%;
  height: 60px;
  object-fit: cover;
`;

export const CategoryItemContent = styled.div`
  padding: 0.5rem;
`;

export const CategoryItemTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.dark[300]};
  font-weight: 600;
`;
