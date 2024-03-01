import React, { useRef } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Dimensions } from 'react-native';
import { StyledBox } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import { ThemeColors } from '../../../utils/theme';

interface MainContainerInterface {
  children: React.ReactNode;
  backgroundColor: keyof ThemeColors;
}

const MainContainer = ({ children, backgroundColor }: MainContainerInterface) => {
  const theme = useTheme();
  const virtualRef = useRef<ScrollView | null>(null);
  return (
    <StyledBox
      css={{
        background: theme[backgroundColor],
        width: '100%',
        height: '100%',
      }}
    >
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}
        onLayout={() => {
          setTimeout(() => {
            virtualRef?.current?.scrollToEnd();
          }, 100);
        }}
      >
        <ScrollView
          ref={(ref) => {
            virtualRef.current = ref;
          }}
        >
          {children}
        </ScrollView>
      </KeyboardAvoidingView>
    </StyledBox>
  );
};

export default MainContainer;
