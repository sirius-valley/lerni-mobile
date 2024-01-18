import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { StyledBox } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import { ThemeColors } from '../../../utils/theme';

interface MainContainerInterface {
  children: React.ReactNode;
  backgroundColor: keyof ThemeColors;
}

const MainContainer = ({ children, backgroundColor }: MainContainerInterface) => {
  const theme = useTheme();
  return (
    <StyledBox
      css={{
        background: theme[backgroundColor],
        color: theme.white,
        width: '100%',
        height: '100%',
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
