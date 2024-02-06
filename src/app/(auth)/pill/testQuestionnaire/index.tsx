import React, { useState } from 'react';
import PillMainContainer from '../../../../components/pill/PillMainContainer';
import PillHeader from '../../../../components/pill/PillHeader';
import QuestionnaireAnswer from '../../../../components/bubbles/QuestionnaireAnswer';
import { StyledBox, StyledText } from '../../../../components/styled/styles';
import { ScrollView } from 'react-native';

interface Option {
  id: string;
  text: string;
  selected?: boolean;
}
const mockedInitialValues: Option[] = [
  {
    id: '01',
    text: 'Choice 1',
    selected: false,
  },
  {
    id: '02',
    text: 'Choice 2',
    selected: false,
  },
  {
    id: '03',
    text: 'Choice 3',
    selected: false,
  },
  {
    id: '04',
    text: 'Choice 4',
    selected: false,
  },
];

const index = () => {
  const [options, setOptions] = useState<Option[]>(mockedInitialValues);
  const [multipleOptions, setMultipleOptions] = useState<Option[]>(mockedInitialValues);
  const [isMultipleAnswerSealed, setIsMultipleAnswerSealed] = useState(false);
  const [isSingleAnswerSealed, setIsSingleAnswerSealed] = useState(false);
  const [points, setPoints] = useState<number | undefined>();

  const correctAnswerSingleSelection = 'Choice 4';

  const handleSelection = (id: string) => {
    const newSelection = options.find((op) => op.id === id);
    if (newSelection)
      setMultipleOptions((prev) =>
        prev.map((option) => {
          if (option.id === id)
            return {
              ...option,
              selected: !option.selected,
            };
          return option;
        }),
      );
  };

  const handleSingleSelection = (id: string) => {
    const selection = options.find((op) => op.id === id);
    if (selection) {
      setOptions((prev) =>
        prev.map((option) => {
          if (option.id === id)
            return {
              ...option,
              selected: !option.selected,
            };
          return option;
        }),
      );
      setIsSingleAnswerSealed(true);
      setPoints(selection.text === correctAnswerSingleSelection ? 5 : 0);
    }
  };

  const handlePress = () => setIsMultipleAnswerSealed(true);

  return (
    <PillMainContainer backgroundColor="primary900">
      <PillHeader title={'test questionnaire'} pillNumber={4} percentageDone={0.25} />
      <ScrollView>
        <StyledBox css={{ padding: '10px' }}>
          <StyledText color="white">Multiple selection</StyledText>
        </StyledBox>
        <StyledBox css={{ paddingTop: '20px', paddingRight: '20px' }}>
          <QuestionnaireAnswer
            options={multipleOptions}
            onPress={() => handlePress()}
            onChange={handleSelection}
            sealed={isMultipleAnswerSealed}
            correctAnswers={['Choice 2', 'Choice 4']}
            points={5}
          />
        </StyledBox>
        <StyledBox css={{ padding: '10px' }}>
          <StyledText color="white">Single selection</StyledText>
        </StyledBox>
        <StyledBox css={{ paddingTop: '20px', paddingRight: '20px' }}>
          <QuestionnaireAnswer
            options={options}
            onPress={() => handlePress()}
            onChange={handleSingleSelection}
            sealed={isSingleAnswerSealed}
            correctAnswers={[correctAnswerSingleSelection]}
            points={points}
          />
        </StyledBox>
      </ScrollView>
    </PillMainContainer>
  );
};

export default index;
