import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { StyledBox, StyledColumn, StyledText } from '../styled/styles';
import { useTheme } from 'styled-components';
import * as Progress from 'react-native-progress';

const PillHeader = () => {
  const theme = useTheme();
  return (
    <>
      <StyledBox
        css={{
          flex: 1,
          backgroundColor: theme.primary900,
          maxHeight: '117px',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
          paddingTop: 20,
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <StyledColumn css={{ gap: 8, width: '100%' }}>
          <StyledBox>
            <StyledText>Nombre de la pildora</StyledText>
            <Progress.Bar progress={0.3} width={200} />
            <Progress.Pie progress={0.4} size={50} />
            <Progress.Circle size={30} indeterminate={true} />
            <Progress.CircleSnail color={['red', 'green', 'blue']} />
          </StyledBox>
        </StyledColumn>
      </StyledBox>
    </>
  );
};

export default PillHeader;
