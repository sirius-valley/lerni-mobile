import React from 'react';
import { PillChoice } from '../../styled/PillChoice';
import { StyledChoiceMainContainer } from '../../styled/PillChoice/styles';

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
        <PillChoice
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
