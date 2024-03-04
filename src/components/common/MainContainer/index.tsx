import React, { useRef } from 'react';
import { KeyboardAvoidingView, ScrollView, Platform, Dimensions, Pressable } from 'react-native';
import { StyledBox } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import { ThemeColors } from '../../../utils/theme';
import ChevronLeftIcon from '../../../../assets/icons/ChevronLeftIcon';
import { useRouter } from 'expo-router';

interface MainContainerInterface {
  children: React.ReactNode;
  backgroundColor: keyof ThemeColors;
  BackIcon?: any;
}

const MainContainer = ({ children, backgroundColor, BackIcon }: MainContainerInterface) => {
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
      {BackIcon ? <BackIcon /> : null}
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
