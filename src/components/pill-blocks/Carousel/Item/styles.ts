import styled, {css as styledComponent} from 'styled-components';
import { Image, View } from 'react-native';
import { Dimensions } from 'react-native';
import {StyledPropertiesInterface} from "../../../styled/styles";
export const StyledCarouselItemContainer = styled(View)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledImageCarousel = styled(Image)<StyledPropertiesInterface>`
  object-fit: cover;
    ${({ css }) => css && styledComponent(css)};

`;
