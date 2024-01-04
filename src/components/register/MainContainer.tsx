import { View, Text } from 'react-native'
import React from 'react'
import { StyledBox, StyledColumn, StyledSafeAreaView } from '../common/styles'
import { useTheme } from 'styled-components/native';

interface MainContainerInterface {
  children: React.ReactNode;
}

const MainContainer = ({
  children,
}: MainContainerInterface) => {
  const theme = useTheme();
  return (
    <StyledBox
      css={{
        background: theme.primary500,
        width: '100%',
        height: '100%',
      }}
    >
      <StyledSafeAreaView css={{ flex: 1 }}>
        <StyledColumn css={{ flex: 1, alignItems: 'center', paddingTop: '40%' }}>
          {children}
        </StyledColumn>
      </StyledSafeAreaView>
    </StyledBox>
  )
}

export default MainContainer;
