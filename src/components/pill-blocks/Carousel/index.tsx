import { StyledCarouselContainer } from './styles';
import Item from './Item';
import { StyledColumn, StyledRow } from '../../styled/styles';
import React, { useState } from 'react';
import useZoomImage from '../../../hooks/useZoomImage';
import { LabeledSend } from '../../bubbles/LabeledSend';
import usePill from '../../../hooks/usePill';
import { useLSelector } from '../../../redux/hooks';
import { CarouselBlockType } from '../../../redux/slice/pill.slice';

interface CarouselProps {
  blockId: string;
  nextBlockId: string;
}

const Carousel = ({ blockId, nextBlockId }: CarouselProps) => {
  const { block, handleCarousel } = usePill(blockId, { nextBlockId }) as {
    block: CarouselBlockType;
    handleCarousel: (values: CarouselBlockType) => void;
  };
  const [values, setValues] = useState(block);
  const last = useLSelector((state) => state.pill.last);
  const sealed = block.sealed || !(last === block.id);

  const { ZoomImageComponent, handleOpenImage } = useZoomImage({
    images:
      block.options?.map((item) => ({
        url: item.image,
      })) ?? [],
  });

  const handleSelect = (answerId: string) => {
    setValues((prev) => ({
      ...prev,
      options: prev.options.map((option) => {
        if (option.id === answerId) {
          return {
            ...option,
            selected: !option.selected,
          };
        } else {
          return {
            ...option,
            selected: false,
          };
        }
      }),
    }));
  };
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
