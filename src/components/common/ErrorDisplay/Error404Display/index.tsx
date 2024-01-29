import { useTheme } from 'styled-components/native';
import { ErrorDisplay } from '..';
import { StyledText } from '../../../styled/styles';
import Button from '../../../styled/Button';
import { useRouter } from 'expo-router';
import { ErrorIllustration } from '../../../../../assets/icons/ErrorIllustration';

export const Error404Display = () => {
  const theme = useTheme();
  const router = useRouter();

  const Icon = () => {
    return <ErrorIllustration />;
  };

  const Content = () => {
    return (
      <StyledText variant="body1" style={{ color: theme.gray100, textAlign: 'center' }}>
        {'Lo sentimos, no pudimos encontrar lo que estás buscando'}
      </StyledText>
    );
  };

  const Footer = () => {
    return <Button onPress={() => router.push('explore')}>{'Volver'}</Button>;
  };

  return (
    <ErrorDisplay Icon={Icon} Title={'Página no encontrada'} Content={Content} Footer={Footer} />
  );
};
