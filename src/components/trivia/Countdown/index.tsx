import { useTimer } from 'react-timer-hook';
import { useTheme } from 'styled-components/native';
import { StyledText } from '../../styled/styles';

interface CountdownProps {
  time: number;
  handleTimeout: (answer: string) => void;
}

export const Countdown = ({ time, handleTimeout }: CountdownProps) => {
  const theme = useTheme();

  const customDate = Date.now() + time * 1000;

  const { seconds } = useTimer({
    autoStart: true,
    expiryTimestamp: new Date(customDate),
    onExpire: () => handleTimeout('timeout'),
  });

  return seconds ? (
    <StyledText css={{ color: theme.primary500 }} variant={'h2'}>
      {seconds}''
    </StyledText>
  ) : (
    <></>
  );
};
