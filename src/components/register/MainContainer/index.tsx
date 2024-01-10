import React from 'react';
import { KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import { StyledBox, StyledColumn, StyledSafeAreaView } from '../../styled/styles';
import { useTheme } from 'styled-components/native';

interface MainContainerInterface {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerInterface) => {
  const theme = useTheme();
  return (
    <StyledBox
      css={{
        background: theme.primary500,
        width: '100%',
        height: '100%',
      }}
    >
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView>
          <StyledColumn css={{ alignItems: 'center', paddingTop: '50%' }}>{children}</StyledColumn>
        </ScrollView>
      </KeyboardAvoidingView>
    </StyledBox>
  );
};

export default MainContainer;
