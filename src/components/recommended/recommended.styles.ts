import styled from 'styled-components';
import Button from '../button/button.component';

export const RecommendedContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RecommendedItemsContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${({ theme }) => theme.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.media.lg} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ReadMoreButton = styled(Button)`
  margin: 0 auto;
  max-width: 200px;
  display: block;
  margin-top: 1rem;
`;
