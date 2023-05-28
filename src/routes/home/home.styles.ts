import styled from 'styled-components';

export const HomeContainer = styled.section`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const CarouselContainer = styled.header`
  height: 400px;
`;

export const HomeSectionContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 2rem;
`;

export const HomeSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  ${({ theme }) => theme.media.md} {
    text-align: left;
  }
`;
