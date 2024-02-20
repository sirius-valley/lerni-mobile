import { StyledQuestionnaireChoiceContainer, StyledQuestionnaireChoiceText } from './styles';

export interface QuestionnaireChoiceProps {
  status: 'default_selected' | 'default_not_selected' | 'selected' | 'not_selected';
  text?: string;
  id?: string;
  onPress?: () => void;
  disabled?: boolean;
}

const QuestionnaireChoice = ({ status, text, onPress, disabled }: QuestionnaireChoiceProps) => {
  return (
    <StyledQuestionnaireChoiceContainer onPress={onPress} status={status} disabled={disabled}>
      <StyledQuestionnaireChoiceText status={status}>{text}</StyledQuestionnaireChoiceText>
    </StyledQuestionnaireChoiceContainer>
  );
};

export default QuestionnaireChoice;
