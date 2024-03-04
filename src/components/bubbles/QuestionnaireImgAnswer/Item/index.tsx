import { StyledCarouselItemContainer, StyledImageCarousel } from './styles';
import { Pressable } from 'react-native';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { useState } from 'react';
import { ZoomIcon } from '../../../../../assets/icons/ZoomIcon';
import { useTheme } from 'styled-components';
import useImageDimensions from '../../../../hooks/useImageDimensions';
import Checkbox from '../../../pill-blocks/Checkbox';

interface CarouselItemProps {
  imgUrl: string;
  selected?: boolean;
  handleOpenImage: () => void;
  title: string;
  description: string;
  handleSelect: () => void;
  disabled: boolean;
  sealed: boolean;
  hideSelf: boolean;
  hasOpacity: boolean;
}

const CarouselItem = ({
  imgUrl,
  selected,
  handleSelect,
  handleOpenImage,
  title,
  description,
  disabled,
  sealed,
  hideSelf,
  hasOpacity,
}: CarouselItemProps) => {
  const theme = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const { width, height } = useImageDimensions(imgUrl);

  if (hideSelf) return null;
  return (
    <StyledCarouselItemContainer>
      <StyledBox
        css={{
          position: 'relative',
          minHeight: 58,
          borderRadius: 8,
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
          source={{ uri: imgUrl }}
          css={{
            width: width - 40,
            height: height,
            borderRadius: sealed ? '8px 8px 2px 8px' : height < 58 ? 0 : 8,
            opacity: hasOpacity ? 0.4 : 1,
          }}
        />
      </StyledBox>
      <StyledRow style={{ gap: 8 }}>
        {!sealed && (
          <Checkbox disabled={disabled} checked={!!selected} onPress={handleSelect} isSingle />
        )}
        <StyledColumn style={{ maxHeight: 40, maxWidth: width * 0.9 }}>
          <StyledText color={'gray100'} css={{ opacity: hasOpacity ? 0.4 : 1 }} variant={'h4'}>
            {title}
          </StyledText>
          <StyledText color={'gray100'} css={{ opacity: hasOpacity ? 0.4 : 1 }} variant={'h4'}>
            {description}
          </StyledText>
        </StyledColumn>
      </StyledRow>
    </StyledCarouselItemContainer>
  );
};

export default CarouselItem;
