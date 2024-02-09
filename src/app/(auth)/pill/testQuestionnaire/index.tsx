import React, { useState } from 'react';
import PillMainContainer from '../../../../components/pill/PillMainContainer';
import PillHeader from '../../../../components/pill/PillHeader';
import QuestionnaireAnswer from '../../../../components/bubbles/QuestionnaireAnswer';
import { StyledBox, StyledText } from '../../../../components/styled/styles';
import { ScrollView } from 'react-native';
import QuestionnaireImgAnswer from '../../../../components/bubbles/QuestionnaireImgAnswer';
import {
  QuestionnaireChoiceImages,
  QuestionnaireChoiceOption,
  mockedInitialValues,
} from '../../../../utils/questionnaireUtils';

const index = () => {
  const [options, setOptions] = useState<QuestionnaireChoiceOption[]>(mockedInitialValues);
  const [multipleOptions, setMultipleOptions] =
    useState<QuestionnaireChoiceOption[]>(mockedInitialValues);
  const [imagesOptions, setImagesOptions] = useState(QuestionnaireChoiceImages);
  const [isMultipleAnswerSealed, setIsMultipleAnswerSealed] = useState(false);
  const [isSingleAnswerSealed, setIsSingleAnswerSealed] = useState(false);
  const [isImageSealed, setIsImageSealed] = useState(false);
  const [isImgSelectedCorrect, setIsImgSelectedCorrect] = useState(false);
  const [points, setPoints] = useState<number | undefined>();

  const correctAnswerSingleSelection = 'Choice 4';
  const correctAnswerImgSelection = '02';

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

  const handleImagesSelection = (id: string) => {
    const selection = imagesOptions.map((img) => {
      return {
        ...img,
        selected: img.id === id ? !img.selected : false,
      };
    });
    setImagesOptions(selection);
  };

  const handleImgSelectionPress = () => {
    if (imagesOptions.some((img) => img.id === correctAnswerImgSelection && !!img.selected))
      setIsImgSelectedCorrect(true);
    setIsImageSealed(true);
  };

  const handlePress = () => setIsMultipleAnswerSealed(true);

  return (
    <PillMainContainer backgroundColor="primary900">
      <PillHeader title={'test questionnaire'} pillNumber={4} percentageDone={0.25} />
      <ScrollView>
        <StyledBox css={{ padding: '24px' }}>
          <StyledText color="white">Multiple selection</StyledText>
        </StyledBox>
        <QuestionnaireImgAnswer
          items={imagesOptions}
          onSelect={handleImagesSelection}
          onPress={handleImgSelectionPress}
          sealed={isImageSealed}
          correctAnswerId={correctAnswerImgSelection}
          isImgSelectedCorrect={isImgSelectedCorrect}
          points={isImgSelectedCorrect ? 5 : undefined}
        />
        <StyledBox css={{ paddingTop: '20px', paddingRight: '24px' }}>
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
        <StyledBox css={{ paddingTop: '20px', paddingRight: '24px', paddingBottom: '100px' }}>
          <QuestionnaireAnswer
            options={options}
            onPress={() => handlePress()}
            onChange={handleSingleSelection}
            sealed={isSingleAnswerSealed}
            correctAnswers={[correctAnswerSingleSelection]}
            points={points}
            isSingleAnswer
          />
        </StyledBox>
      </ScrollView>
    </PillMainContainer>
  );
};

export default index;
