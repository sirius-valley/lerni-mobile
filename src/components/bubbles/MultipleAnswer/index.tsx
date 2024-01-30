import React, { useState } from 'react';
import { Choice } from '../../styled/Choice';
import { StyledChoiceMainContainer } from '../../styled/Choice/styles';
import { StyledColumn } from '../../styled/styles';
import { LabeledSend } from '../LabeledSend';

interface MultipleAnswerProps {
  options: {
    id: string;
    text: string;
    selected?: boolean;
  }[];
  onPress: () => void;
  onChange: (id: string) => void;
  sealed: boolean;
}

const MultipleAnswer = ({ options, onPress, onChange, sealed }: MultipleAnswerProps) => {
  return (
    <StyledColumn style={{ gap: 6, alignItems: 'flex-end' }}>
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
            onPress={() => onChange(option.id)}
            disabled={sealed}
            id={option.id}
          />
        ))}
      </StyledChoiceMainContainer>
      <LabeledSend
        onPress={onPress}
        status={
          sealed ? 'sent' : options.some((option) => option.selected) ? 'selected' : 'default'
        }
      />
    </StyledColumn>
  );
};

export default MultipleAnswer;
