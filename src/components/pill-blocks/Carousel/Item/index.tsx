import { StyledCarouselItemContainer, StyledImageCarousel } from './styles';
import { View, Image, Dimensions } from 'react-native';
import { StyledText } from '../../../styled/styles';
import { useEffect, useState } from 'react';
import Checkbox from '../../Checkbox';

interface CarouselItemProps {
  image: string;
  selected: boolean;
}

const CarouselItem = ({ image, selected }: CarouselItemProps) => {
  console.log('CarouselItem');
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
      <StyledImageCarousel
        source={{ uri: imageSource }}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      />
      <View style={{ display: 'flex', flexDirection: 'row', gap: 8 }}>
        <Checkbox checked={selected} onPress={handleSelect} />
        <View style={{ display: 'flex', flexDirection: 'column' }}>
          <StyledText variant={'body1'}>string</StyledText>
          <StyledText variant={'body2'}>string</StyledText>
        </View>
      </View>
    </StyledCarouselItemContainer>
  );
};

export default CarouselItem;
