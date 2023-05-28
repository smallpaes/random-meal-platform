import styled from 'styled-components';

interface ISkeletonContainer {
  readonly $width?: string;
  readonly $height?: string;
}

export const SkeletonContainer = styled.div<ISkeletonContainer>`
  position: relative;
  display: inline-block;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.light[500]};
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    background-image: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.light[100]},
      transparent
    );
    transform: translateX(-100%);
    animation: loading 1.5s infinite;
  }
  @keyframes loading {
    100% {
      transform: translateX(100%);
    }
  }
`;
