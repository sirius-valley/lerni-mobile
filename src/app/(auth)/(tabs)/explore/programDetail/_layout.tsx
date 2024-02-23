import React from 'react';
import { StyledBox, StyledRow } from '../../../../../components/styled/styles';
import { Slot } from 'expo-router';
import Button from '../../../../../components/styled/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProgramDetailLayout = () => {
  const insets = useSafeAreaInsets();

  return (
    <StyledBox>
      <Slot />
      <StyledRow
        css={{
          position: 'absolute',
          bottom: insets.bottom - 24,
          width: '100%',
          height: '42px',
        }}
      >
      </StyledRow>
    </StyledBox>
  );
};

export default ProgramDetailLayout;
