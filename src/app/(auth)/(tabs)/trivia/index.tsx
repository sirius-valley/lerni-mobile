import {ScrollView, Text, View} from 'react-native';
import PlayersHeader from "../../../../components/trivia/PlayersHeader";
import Question from "../../../../components/trivia/Question";
import {StyledColumn, StyledRow, StyledText} from "../../../../components/styled/styles";
import {useTheme} from "styled-components";
import AnswerButton from "../../../../components/trivia/AnswerButton";
import useTrivia from "../../../../hook/useTrivia";

export default function Page() {
    const theme = useTheme()
    const {currentQuestion, currentOptions} = useTrivia();
  return (
      <ScrollView
      contentContainerStyle={{
          gap:24,
          paddingBottom: 24
      }}
      >
          <StyledColumn css={{gap:16}} >
              <StyledRow css={{justifyContent:'space-between'}}>
                  <StyledText css={{color:theme.white}} variant={'body1'}>Round 5/12</StyledText>
                  <StyledText  css={{color:theme.primary500}} variant={'h2'}>10"</StyledText>
              </StyledRow>
              <PlayersHeader/>
              <Question question={currentQuestion.question}/>
          </StyledColumn>
          <StyledColumn css={{gap:16}}>
              {
                  currentOptions.map((option)=> (
                      <AnswerButton answer={option.answer} onPress={()=>{}} selected={currentQuestion.answer && currentQuestion.answer === option.answer}/>
                  ))
              }
          </StyledColumn>
      </ScrollView>

  );
}
