import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
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
        paddingTop: inset.top,
      }}
    >
      <KeyboardAvoidingView
        enabled
        style={{ height: '100%' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </StyledBox>
  );
};

export default MainContainer;
