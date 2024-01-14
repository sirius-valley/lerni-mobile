import {StyledCarouselContainer} from './styles';
import Item from './Item';
import {StyledBox, StyledColumn, StyledRow, StyledText} from '../../styled/styles';
import React from 'react';
import useZoomImage from '../../../hook/useZoomImage';
import {InteractiveBubbleProps} from '../../../types';

type CarouselItem = {
  id: string;
  title: string;
  description: string;
  image: string;
  check: boolean;
};

interface CarouselProps extends InteractiveBubbleProps {
  items: CarouselItem[];
  multiple?: boolean;
}

const Carousel = ({ items, value, onSelect, multiple }: CarouselProps) => {
  const textToRender = multiple
    ? value.length > 0
      ? 'Enviar imagenes'
      : 'Al menos 1'
    : value.length > 0
      ? 'Enviar imagen'
      : 'Elige 1';
  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images: items.map((item) => ({
      url: item.image,
    })),
  });

  return (
    <StyledColumn
      style={{
        alignItems: 'flex-end',
        gap: 12,
      }}
    >
      <StyledCarouselContainer
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 4,
          gap: 24,
          alignItems: 'flex-end',
        }}
      >
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            selected={index === 0}
            handleOpenImage={() => handleOpenImage(index)}
          />
        ))}
      </StyledCarouselContainer>
      <StyledRow style={{ alignItems: 'center', gap: 8 }}>
        <StyledText variant={'body1'}>{textToRender}</StyledText>
        <StyledBox
          style={{
            width: 42,
            height: 42,
            borderRadius: 100,
            backgroundColor: 'blue',
          }}
        />
      </StyledRow>
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default Carousel;
