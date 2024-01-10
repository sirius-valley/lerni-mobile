import { View, Text } from 'react-native'
import React from 'react'
import { StyledBox, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components';

interface StaticBubbleInterface {
  text: string;
}

const StaticBubble = ({
  text
}: StaticBubbleInterface) => {
  const theme = useTheme();
  return (
    <StyledBox css={{
      background: theme.primary200,
      padding: '12px 18px',
      borderRadius: '16px 16px 2px 16px',
    }}>
      <StyledText>{text}</StyledText>
    </StyledBox>
  )
}

export default StaticBubble;
