import React from 'react';
import { StyledBox } from '../../../../../components/styled/styles';
import { Slot, Stack } from 'expo-router';
import { useTheme } from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProgramDetailLayout = () => {
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  return (
    <StyledBox>
      <Stack.Screen
        options={{
          contentStyle: {
            flex: 1,
            backgroundColor: theme.primary900,
            paddingTop: insets.top,
          },
        }}
      />
      <Slot />
    </StyledBox>
  );
};

export default ProgramDetailLayout;
