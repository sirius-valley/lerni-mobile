import { StyledChoiceContainer, StyledChoiceMainContainer, StyledChoiceText } from './styles';

export interface ChoiceProps {
  status?: 'question' | 'selected' | 'not_selected';
  text?: string;
  id?: number;
  onPress?: () => void;
  disabled?: boolean;
}

export const Choice = ({ status, text, onPress, disabled = false }: ChoiceProps) => {
  return (
    <StyledChoiceContainer onPress={onPress} status={status} disabled={disabled}>
      <StyledChoiceText status={status}>{text}</StyledChoiceText>
    </StyledChoiceContainer>
  );
};
