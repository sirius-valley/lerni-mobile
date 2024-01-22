import React, { useState } from 'react';
import { Choice, ChoiceProps } from '../../styled/Choice';
import { StyledChoiceMainContainer } from '../../styled/Choice/styles';

interface SingleAnswerProps {
  options: {
    id: string;
    text: string;
    selected?: boolean;
  }[];
  onPress: (id: string) => void;
  sealed: boolean;
}

export const SingleAnswer = ({ options, onPress, sealed }: SingleAnswerProps) => {
  return (
    <StyledChoiceMainContainer>
      {options.map((option) => (
        <Choice
          status={
            typeof option.selected == 'boolean'
              ? option.selected
                ? 'selected'
                : 'not_selected'
              : 'default'
          }
          text={option.text}
          key={option.id}
          onPress={() => onPress(option.id)}
          disabled={sealed}
        />
      ))}
    </StyledChoiceMainContainer>
  );
};
