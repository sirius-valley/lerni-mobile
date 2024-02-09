import { StyledChoiceContainer, StyledChoiceText } from './styles';

export interface PillChoiceProps {
  status?: 'default' | 'selected' | 'not_selected';
  text?: string;
  id?: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const PillChoice = ({ status = 'default', text, onPress, disabled }: PillChoiceProps) => {
  return (
    <StyledChoiceContainer onPress={onPress} status={status} disabled={disabled}>
      <StyledChoiceText status={status}>{text}</StyledChoiceText>
    </StyledChoiceContainer>
  );
};
