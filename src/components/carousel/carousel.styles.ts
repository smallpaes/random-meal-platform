import styled from 'styled-components';
import { ITheme } from '../../theme';
import { Overlay } from '../../theme/utils';

export const CarouselContainer = styled.header<{
  readonly $height?: string;
  readonly $width?: string;
  readonly $radius: keyof ITheme['borderRadius'];
}>`
  position: relative;
  width: ${({ $width }) => $width || '100%'};
  height: ${({ $height }) => $height || '100%'};
  border-radius: ${({ theme, $radius }) => theme.borderRadius[$radius]};
  overflow: hidden;
  ${({ $height }) => !$height && { maxHeight: '450px' }}
`;

export const CarouselImage = styled.img<{
  readonly $selected: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
  opacity: ${({ theme, $selected }) =>
    $selected ? theme.opacity.full : theme.opacity.none};

  transition: opacity 0.2s linear;
`;

export const CarouselOverlay = styled.div`
  ${Overlay};
`;

export const ImageSelectorsContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
`;

export const ImageSelector = styled.div<{
  readonly $selected?: boolean;
}>`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.colors.light[100] : theme.colors.dark[100]};
  cursor: pointer;
`;
