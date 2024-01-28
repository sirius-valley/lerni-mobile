import { useRouter } from 'expo-router';
import { Result } from '..';
import { CongratulationsIcon } from '../../../../../assets/icons/CongratulationsIcon';
import Button from '../../../styled/Button';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import RhombusIcon from '../../../../../assets/icons/RhombusIcon';
import { useTheme } from 'styled-components/native';

export const SuccessPill = () => {
  const theme = useTheme();
  const router = useRouter();
  const icon = () => {
    return <CongratulationsIcon size={150} />;
  };

  const title = 'Felicidades!';

  const footer = () => {
    return (
      <StyledBox style={{ minWidth: '90%' }}>
        <Button onPress={() => router.push('explore')}>Siguiente</Button>
      </StyledBox>
    );
  };

  const content = () => {
    return (
      <StyledColumn style={{ gap: 8 }}>
        <StyledText variant="body2" style={{ color: theme.gray50 }}>
          {'Terminaste {{NOMBRE DEL PROGRAMA}}!'}
        </StyledText>
        <StyledRow style={{ alignContent: 'center', justifyContent: 'center', gap: 8 }}>
          <StyledText style={{ color: theme.gray50 }}>Ganaste</StyledText>
          <RhombusIcon size={12} />
          <StyledText style={{ color: theme.gray50 }}>24 Puntos!</StyledText>
        </StyledRow>
      </StyledColumn>
    );
  };

  return <Result Icon={icon} Title={title} Footer={footer} Content={content} />;
};
