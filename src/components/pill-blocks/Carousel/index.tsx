import { StyledCarouselContainer } from './styles';
import Item from './Item';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import React from 'react';
import useZoomImage from '../../../hook/useZoomImage';
import { InteractiveBubbleProps } from '../../../types';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';

type CarouselItem = {
  id: string;
  title: string;
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
//hacer la logica del labeled send text

  

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
          paddingHorizontal: 4,
          gap: 24,
          alignItems: 'flex-end',
        }}
      >
        {items.map((item, index) => (
          <Item
            key={index}
            image={item.image}
            selected={item.selected}
            handleOpenImage={() => handleOpenImage(index)}
            handleSelect={() => onSelect(item.id)}
            title={item.title}
            description={item.description}
            id={item.id}
            disabled={sealed}
          />
        ))}
      </StyledCarouselContainer>
      {/* //Aca debería ir el labeled send */}
      <StyledRow style={{ alignItems: 'center', gap: 8 }}>
        {/* <StyledText variant={'body1'}>{textToRender}</StyledText> */}
        <Button
          onPress={onPress}
          disabled={sealed}
          icon={SendIcon}
          variant='primary'
          css={{
            width: 42,
            height: 42,
            borderRadius: 50,
          }}
        > </Button>
      </StyledRow>
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default Carousel;
