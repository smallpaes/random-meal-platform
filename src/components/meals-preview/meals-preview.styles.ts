import styled from 'styled-components';
import Button from '../../components/button/button.component';

export const CategoryContainer = styled.section`
  margin-bottom: 3.5rem;
`;

export const CategoryHeader = styled.h2`
  text-transform: capitalize;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark[300]};
  font-weight: 600;
  margin-bottom: 0.5rem;

  ${({ theme }) => theme.media.md} {
    text-align: left;
  }
`;

export const CategoryItems = styled.section`
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

export const CategoryButton = styled(Button)`
  margin: 0 auto;
  max-width: 200px;
  display: block;
  margin-top: 1rem;
`;
