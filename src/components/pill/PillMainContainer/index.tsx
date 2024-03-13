import React from 'react';
import { StyledBox } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import { ThemeColors } from '../../../utils/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface MainContainerInterface {
  children: React.ReactNode;
  backgroundColor: keyof ThemeColors;
}

const MainContainer = ({ children, backgroundColor }: MainContainerInterface) => {
  const theme = useTheme();
  const inset = useSafeAreaInsets();
  return (
    <StyledBox
      css={{
        background: theme[backgroundColor],
        color: theme.white,
        width: '100%',
        height: '100%',
        paddingTop: inset.top + 24,
        paddingBottom: 100,
      }}
    >
      {children}
    </StyledBox>
  );
};

export default MainContainer;
