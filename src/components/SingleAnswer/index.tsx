import React, { useState } from 'react';
import { Choice, ChoiceProps } from '../styled/Choice';
import { StyledChoiceMainContainer } from '../styled/Choice/styles';

interface SingleAnswerProps {
  answers?: ChoiceProps[];
}

export const SingleAnswer = ({ answers }: SingleAnswerProps) => {
  answers = [
    { status: 'question', text: 'Choice 1', id: 1 },
    { status: 'question', text: 'Choice 2', id: 2 },
    { status: 'question', text: 'Choice 3', id: 3 },
  ];

  const [selectedAnswerId, setSelectedAnswerId] = useState<number | null>(null);
  const [hasBeenSelected, setHasBeenSelected] = useState<boolean>(false);

  const handleChoice = (id: number) => {
    setSelectedAnswerId(id);
    setHasBeenSelected(true);
  };

  return (
    <StyledChoiceMainContainer>
      {answers.map((a: ChoiceProps) => (
        <Choice
          status={
            hasBeenSelected ? (a.id === selectedAnswerId ? 'selected' : 'not_selected') : 'question'
          }
          text={a.text}
          key={a.id}
          onPress={() => (a.id ? handleChoice(a.id) : null)}
          disabled={hasBeenSelected}
        />
      ))}
    </StyledChoiceMainContainer>
  );
};
