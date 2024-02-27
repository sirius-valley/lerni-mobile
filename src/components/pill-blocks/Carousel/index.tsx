import { StyledCarouselContainer } from './styles';
import Item from './Item';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
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
        paddingLeft: 24,
      }}
    >
      <StyledCarouselContainer
        horizontal={!sealed}
        contentContainerStyle={{
          gap: 24,
          alignItems: 'flex-end',
          paddingHorizontal: 12,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {items?.map((item, index) => {
          return sealed && !item.selected ? null : (
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
          );
        })}
      </StyledCarouselContainer>
      <StyledRow
        style={{
          alignItems: 'center',
          gap: 6,
          paddingLeft: 12,
        }}
      >
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
