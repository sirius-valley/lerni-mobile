import { StyledCarouselContainer } from './styles';
import Item from './Item';
import { StyledBox, StyledColumn, StyledRow } from '../../styled/styles';
import React, { useState } from 'react';
import useZoomImage from '../../../hooks/useZoomImage';
import { LabeledSend } from '../../bubbles/LabeledSend';
import usePill from '../../../hooks/usePill';
import { useLSelector } from '../../../redux/hooks';
import { CarouselBlockType } from '../../../redux/slice/pill.slice';

type CarouselItem = {
  id: string;
  description: string;
  image: string;
  selected?: boolean;
};

interface CarouselProps {
  blockId: string;
  nextBlockId: string;
  // items: CarouselItem[];
  // multiple?: boolean;
  // onSelect: (id: string) => void;
  // onPress: () => void;
  // sealed: boolean;
}

const Carousel = ({
  blockId,
  nextBlockId,
  // items, multiple, onSelect, onPress, sealed
}: CarouselProps) => {
  const {
    block,
    handleCarousel,
    // handleSelectCarousel,
  } = usePill(blockId, { nextBlockId }) as {
    block: CarouselBlockType;
    handleCarousel: (values: CarouselBlockType) => void;
    // handleSelectCarousel: (answerId: string) => void;
  };
  const [values, setValues] = useState(block);

  const handleSelect = (answerId: string) => {
    setValues((prev) => ({
      ...prev,
      options: prev.options.map((option) => {
        if (option.id === answerId) {
          return {
            ...option,
            selected: true,
          };
        }
        return option;
      }),
    }));
  };

  const last = useLSelector((state) => state.pill.last);
  const sealed = block.sealed || !(last === block.id);

  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      block.options?.map((item) => ({
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
        {values.options?.map((item, index) => {
          return sealed && !item.selected ? null : (
            <Item
              key={index}
              image={item.image}
              selected={!!item.selected}
              handleOpenImage={() => handleOpenImage(index)}
              handleSelect={() => handleSelect(item.id)}
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
          onPress={() => handleCarousel(values)}
          status={
            sealed ? 'sent' : values.options.some((item) => item.selected) ? 'selected' : 'default'
          }
        />
      </StyledRow>
      <ZoomImageComponent />
    </StyledColumn>
  );
};

export default Carousel;
