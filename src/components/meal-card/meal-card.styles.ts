import styled from 'styled-components';

export const MealCardContainer = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 200px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.boxShadow.sm};
`;

export const MealCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MealCardContent = styled.div`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MealCardTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`;

export const MealCardTitle = styled.h4`
  color: ${({ theme }) => theme.colors.dark[200]};
`;

export const MealCardPrice = styled.span`
  color: ${({ theme }) => theme.colors.dark[200]};
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;
