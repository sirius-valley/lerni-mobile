import { StyledBox } from '../styled/styles';
import styled, { css as styledComponent } from 'styled-components';
import { Dimensions } from 'react-native';

export const StyledTriangle = styled(StyledBox)`
  ${({ theme }) =>
    styledComponent({
      borderTopWidth: Dimensions.get('screen').height,
      borderRightWidth: Dimensions.get('screen').width,
      borderBottomWidth: 0,
      borderLeftWidth: 0,
      borderTopColor: 'transparent',
      borderRightColor: theme.primary700,
      borderBottomColor: 'transparent',
      borderLeftColor: 'transparent',
    })}
`;
