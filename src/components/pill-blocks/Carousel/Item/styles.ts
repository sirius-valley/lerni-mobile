import styled from 'styled-components';
import { Image, View } from 'react-native';
import { Dimensions } from 'react-native';
export const StyledCarouselItemContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledImageCarousel = styled(Image)`
  border-radius: 8px;
  object-fit: cover;
`;
