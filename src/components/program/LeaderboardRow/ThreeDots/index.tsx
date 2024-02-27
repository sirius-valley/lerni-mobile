import { useTheme } from 'styled-components/native';
import { EllipseIcon } from '../../../../../assets/icons/EllipseIcon';
import { StyledRow } from '../../../styled/styles';

export const ThreeDots = () => {
  const theme = useTheme();
  return (
    <StyledRow css={{ gap: 5, padding: '4px 0px', justifyContent: 'center' }}>
      <EllipseIcon size={8} color={theme.primary800} />
      <EllipseIcon size={8} color={theme.primary800} />
      <EllipseIcon size={8} color={theme.primary800} />
    </StyledRow>
  );
};
