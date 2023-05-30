import styled from 'styled-components';
import { FullHeight } from '../../theme/utils';
import { ReactComponent as HungryPersonSvg } from '../../assets/hungry-person.svg';

export const NotFoundContainer = styled.section`
  ${FullHeight}
  position: relative;
  background-image: url('https://ik.imagekit.io/mikank/RandomMeal/Background/beach-restaurant.jpg?updatedAt=1685453996483');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.light[100]};
    opacity: 0.5;
  }
`;

export const NotFoundContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const NotFoundImage = styled(HungryPersonSvg)`
  width: 100px;
  height: 100px;
  fill: ${({ theme }) => theme.colors.dark[100]};
`;

export const NotFoundTitle = styled.h2`
  color: ${({ theme }) => theme.colors.dark[100]};
  margin-bottom: 0.5rem;
`;

export const NotFoundSubtitle = styled.h5`
  color: ${({ theme }) => theme.colors.dark[200]};
  margin-bottom: 0.5rem;
`;
