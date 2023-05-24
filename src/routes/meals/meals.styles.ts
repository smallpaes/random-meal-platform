import styled from 'styled-components';

export const MealsBannerContainer = styled.div<{ url: string }>`
  position: relative;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 300px;
`;

export const MealsBannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.dark[300]};
  opacity: 0.3;
`;

export const MealsBannerContent = styled.h1`
  padding: 0 1rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.light[100]};
`;

export const MealsDisplayContainer = styled.section`
  padding: 2rem 2rem 0 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;
