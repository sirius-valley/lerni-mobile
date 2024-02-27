import { StyledCarouselContainer } from './styles';
import Item from './Item';
import { StyledColumn, StyledRow } from '../../styled/styles';
import React from 'react';
import useZoomImage from '../../../hooks/useZoomImage';
import { LabeledSend } from '../../bubbles/LabeledSend';

type CarouselItem = {
  id: string;
  description: string;
  image: string;
  selected?: boolean;
};

interface CarouselProps {
  items: CarouselItem[];
  multiple?: boolean;
  onSelect: (id: string) => void;
  onPress: () => void;
  sealed: boolean;
}

const Carousel = ({ items, multiple, onSelect, onPress, sealed }: CarouselProps) => {
  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      items?.map((item) => ({
        url: item.image,
      })) ?? [],
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
          paddingHorizontal: 12,
          gap: 24,
          alignItems: 'flex-end',
        }}
        showsHorizontalScrollIndicator={false}
      >
        {items?.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            selected={item.selected}
            handleOpenImage={() => handleOpenImage(index)}
            handleSelect={() => onSelect(item.id)}
            description={item.description}
            id={item.id}
            disabled={sealed}
            sealed={sealed}
          />
        ))}
      </StyledCarouselContainer>
      <StyledRow style={{ alignItems: 'center', gap: 6, paddingHorizontal: 24 }}>
        <LabeledSend
          onPress={onPress}
          status={sealed ? 'sent' : items.some((item) => item.selected) ? 'selected' : 'default'}
        />
      </StyledRow>
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default Carousel;
