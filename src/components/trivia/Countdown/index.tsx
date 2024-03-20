import { useTheme } from 'styled-components/native';
import { StyledText } from '../../styled/styles';

interface CountdownProps {
  time: number;
  // handleTimeout: (answer: string) => void;
}

export const Countdown = ({ time }: CountdownProps) => {
  const theme = useTheme();

  return (
    <StyledText css={{ color: theme.primary500 }} variant={'h2'}>
      {time}''
    </StyledText>
  );
};
