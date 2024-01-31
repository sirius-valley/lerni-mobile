import React from 'react';
import { StyledBox, StyledRow, StyledText } from '../../styled/styles';
import { Pressable } from 'react-native';
import { useTheme } from 'styled-components';

interface QuickFilterInterface {
  selected: boolean;
  children: string;
  onPress: () => void;
}

const QuickFilter = ({ selected, children, onPress }: QuickFilterInterface) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onPress}>
      <StyledRow
        css={{
          width: 'fit-content',
          height: '33px',
          borderRadius: '16px',
          padding: '6px 16px',
          background: theme[selected ? 'primary400' : 'primary800'],
          alignItems: 'center',
        }}
      >
        <StyledText variant="body2" color={selected ? 'primary900' : 'gray200'}>
          {children}
        </StyledText>
      </StyledRow>
    </Pressable>
  );
};

export default QuickFilter;
