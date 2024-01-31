import React from 'react';
import { Choice } from '../../styled/Choice';
import { StyledChoiceMainContainer } from '../../styled/Choice/styles';

interface SingleAnswerProps {
  options: {
    id: string;
    text: string;
    selected?: boolean | string;
  }[];
  onPress: (id: string) => void;
  sealed: boolean;
}

const SingleAnswer = ({ options, onPress, sealed }: SingleAnswerProps) => {
  return (
    <StyledChoiceMainContainer>
      {options.map((option) => (
        <Choice
          status={
            typeof option.selected == 'boolean' || sealed
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

export default SingleAnswer;
