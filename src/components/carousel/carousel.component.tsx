import { FC, ReactElement, useState, useEffect } from 'react';

import {
  CarouselContainer,
  CarouselImage,
  CarouselOverlay,
  ImageSelectorsContainer,
  ImageSelector,
} from './carousel.styles';
import { ITheme } from '../../theme';

export type Image = {
  url: string;
  description: string;
};

interface ICarousel {
  images: Image[];
  radius?: keyof ITheme['borderRadius'];
  opacity?: keyof ITheme['opacity'];
}

const Carousel: FC<ICarousel> = ({
  images,
  radius = 'md',
  opacity = 'sm',
}): ReactElement => {
  const [currentIdx, setCurrentIdx] = useState(0);
  useEffect(() => {
    setCurrentIdx(0);
  }, [images]);

  const handleSelectImage = (index: number) => {
    if (index === currentIdx) return;
    setCurrentIdx(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIdx = (currentIdx + 1) % images.length;
      setCurrentIdx(nextIdx);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [images, currentIdx]);

  return (
    <CarouselContainer $radius={radius}>
      {images.map(({ url, description }, index) => (
        <CarouselImage
          key={url}
          src={url}
          alt={description}
          $selected={index === currentIdx}
        />
      ))}
      <CarouselOverlay $opacity={opacity} />
      <ImageSelectorsContainer>
        {images.map((image, index) => (
          <ImageSelector
            $selected={index === currentIdx}
            key={image.url}
            onClick={() => handleSelectImage(index)}
          />
        ))}
      </ImageSelectorsContainer>
    </CarouselContainer>
  );
};

export default Carousel;
