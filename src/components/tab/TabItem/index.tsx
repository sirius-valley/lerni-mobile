import { StyledText } from '../../styled/styles';
import { Pressable, View } from 'react-native';
import React from 'react';
import { useTheme } from 'styled-components';

interface TabItemProps {
  focused: boolean;
  name: string;
  icon: any;
  onPress?: any;
}

const TabItem = ({ focused, name, icon: Icon, onPress }: TabItemProps) => {
  const theme = useTheme();

  const WrapperComponent = onPress ? Pressable : View;

  return (
    <WrapperComponent
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        height: 50,
        width: 60,
      }}
      onPress={onPress}
    >
      <Icon color={focused ? theme.gray100 : theme.primary600} size={32} />
      <StyledText
        variant={'body3'}
        css={{
          color: focused ? theme.gray100 : theme.primary600,
          fontFamily: 'Roboto-Bold',
        }}
      >
        {name}
      </StyledText>
    </WrapperComponent>
  );
};

export default TabItem;
