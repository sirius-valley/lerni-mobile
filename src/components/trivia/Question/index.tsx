import { StyledBox, StyledText } from '../../styled/styles';
import { Image, View } from 'react-native';
import React from 'react';
interface QuestionProps {
  question: string;
}
const Question = ({ question }: QuestionProps) => {
  return (
    <StyledBox
      style={{ position: 'relative', height: 186, justifyContent: 'center', alignItems: 'center' }}
    >
      <StyledBox
        css={{
          borderRadius: 12,
          width: 330,
          height: 164,
          background: 'white',
          zIndex: 2,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <StyledText
          variant={'body1'}
          css={{
            fontFamily: 'Roboto-Bold',
          }}
        >
          {question}
        </StyledText>
      </StyledBox>
      <Image
        source={require('../../../../assets/background_question.png')}
        style={{
          width: 342,
          height: 186,
          position: 'absolute',
          top: 0,
        }}
      />
    </StyledBox>
  );
};
export default Question;
