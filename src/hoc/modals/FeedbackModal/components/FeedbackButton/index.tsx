import { Pressable } from 'react-native';
import React, { FC } from 'react';
import { IconInterface } from '../../../../../../assets/icons/types';
import { useTheme } from 'styled-components';
import { rgba } from 'polished';

interface FeedbackButtonProps {
  onPress: () => void;
  icon: FC<IconInterface>;
  selected: boolean;
}

const FeedbackButton = ({ onPress, icon: Icon, selected }: FeedbackButtonProps) => {
  const theme = useTheme();
  return (
    <Pressable onPress={onPress}>
      <Icon size={40} color={selected ? theme.primary500 : rgba(theme.primary400, 0.3)} />
    </Pressable>
  );
};

export default FeedbackButton;
