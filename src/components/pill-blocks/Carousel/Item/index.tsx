import { StyledCarouselItemContainer, StyledImageCarousel } from './styles';
import { Dimensions, Image, Pressable, View } from 'react-native';
import { StyledBox, StyledText } from '../../../styled/styles';
import { useEffect, useState } from 'react';
import Checkbox from '../../Checkbox';
import { ZoomIcon } from '../../../../../assets/icons/ZoomIcon';
import { useTheme } from 'styled-components';

interface CarouselItemProps {
  image: string;
  selected: boolean;
  handleOpenImage: () => void;
  title: string;
  description: string;
}

const CarouselItem = ({
  image,
  selected,
  handleOpenImage,
  title,
  description,
}: CarouselItemProps) => {
  const theme = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const imageSource = image;

  const handleSelect = () => {};
  useEffect(() => {
    if (imageSource) {
      Image.getSize(
        imageSource,
        (width, height) => {
          console.log(width, height);
          let newWidth = width;
          let newHeight = height;
          if (width > Dimensions.get('window').width) {
            newWidth = Dimensions.get('window').width * 0.85;
            newHeight = (Dimensions.get('window').width * 0.85 * height) / width;
          } else if (height > Dimensions.get('window').height) {
            newHeight = Dimensions.get('window').height * 0.85;
            newWidth = (Dimensions.get('window').height * 0.85 * width) / height;
          }
          setDimensions({ width: newWidth, height: newHeight });
        },
        (error) => {
          console.error('Error obteniendo dimensiones de la imagen:', error);
        },
      );
    }
  }, [imageSource]);
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
          source={{ uri: imageSource }}
          css={{
            width: dimensions.width,
            height: dimensions.height,
            borderRadius: dimensions.height < 58 ? 0 : 8,
          }}
        />
      </StyledBox>
      <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        <Checkbox checked={selected} onPress={handleSelect} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledText variant={'body1'}>{title}</StyledText>
          <StyledText variant={'body2'}>{description}</StyledText>
        </View>
      </View>
    </StyledCarouselItemContainer>
  );
};

export default CarouselItem;
