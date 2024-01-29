import { useTheme } from 'styled-components/native';
import { ErrorDisplay } from '..';
import { StyledText } from '../../../styled/styles';
import Button from '../../../styled/Button';
import { useRouter } from 'expo-router';
import { GhostIcon } from '../../../../../assets/icons/GhostIcon';

export const Error505Display = () => {
  const theme = useTheme();
  const router = useRouter();

  const Icon = () => {
    return <GhostIcon />;
  };

  const Content = () => {
    return (
      <StyledText variant="body1" style={{ color: theme.gray100, textAlign: 'center' }}>
        {'Lo sentimos, no eres tú, somos nosotros. Algo salió mal desde nuestro lado'}
      </StyledText>
    );
  };

  const Footer = () => {
    return <Button onPress={() => router.push('explore')}>{'Volver'}</Button>;
  };

  return (
    <ErrorDisplay
      Icon={Icon}
      Title={'Error interno del servidor'}
      Content={Content}
      Footer={Footer}
    />
  );
};
