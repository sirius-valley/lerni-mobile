import styled from 'styled-components';
import { Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const StyledContainer = styled(ScrollView)`
  width: ${Dimensions.get('window').width * 0.95}px;
  gap: 16px;
  display: flex;
  flex-grow: 0;
`;
