import { StyledCarouselItemContainer, StyledImageCarousel } from './styles';
import { Pressable } from 'react-native';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { useState } from 'react';
import Checkbox from '../../Checkbox';
import { ZoomIcon } from '../../../../../assets/icons/ZoomIcon';
import { useTheme } from 'styled-components';
import useImageDimensions from '../../../../hook/useImageDimensions';

interface CarouselItemProps {
  image: string;
  selected?: boolean;
  handleOpenImage: () => void;
  description: string;
  handleSelect: () => void;
  id: string;
  disabled: boolean;
  sealed: boolean;
}

const CarouselItem = ({
  image,
  id,
  selected,
  handleSelect,
  handleOpenImage,
  description,
  disabled,
  sealed,
}: CarouselItemProps) => {
  const theme = useTheme();
  const { width, height } = useImageDimensions(image);

  return (
    <StyledCarouselItemContainer>
      <StyledBox
        css={{
          position: 'relative',
          minHeight: 58,
          borderRadius: 8,
          backgroundColor: theme.gray950,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Pressable
          onPress={handleOpenImage}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 2,
          }}
        >
          <StyledBox
            css={{
              width: 42,
              height: 42,
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
            }}
          >
            <ZoomIcon size={24} color={theme.white} />
          </StyledBox>
        </Pressable>

        <StyledImageCarousel
          source={{ uri: image }}
          css={{
            width: width,
            height: height,
            borderRadius: sealed ? '8px 8px 2px 8px' : height < 58 ? '0px' : '8px',
          }}
        />
      </StyledBox>
      <StyledRow style={{ gap: 8 }}>
        {!sealed && (
          <Checkbox disabled={disabled} checked={selected ? true : false} onPress={handleSelect} />
        )}
        <StyledColumn style={{ maxHeight: 40, maxWidth: width * 0.9 }}>
          <StyledText style={{ color: theme.gray100 }} variant={'h4'}>
            {description}
          </StyledText>
        </StyledColumn>
      </StyledRow>
    </StyledCarouselItemContainer>
  );
};

export default CarouselItem;
