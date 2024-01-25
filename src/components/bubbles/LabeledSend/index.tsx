import { useTheme } from 'styled-components/native';
import { StyledRow, StyledText } from '../../styled/styles';
import Button from '../../styled/Button';
import SendIcon from '../../../../assets/icons/SendIcon';
import { useMemo } from 'react';
import { rgba } from 'polished';

interface SendComponentProps {
  onPress: () => void;
  status: 'default' | 'selected' | 'sent';
}

export const LabeledSend = ({ onPress, status }: SendComponentProps) => {
  const theme = useTheme();

  const description: string = useMemo(() => {
    if (status === 'default') {
      return 'Seleccionar por lo menos 1';
    } else if (status === 'selected') {
      return 'Enviar selección';
    } else {
      return '';
    }
  }, [status]);

  return (
    <StyledRow style={{ justifyContent: 'flex-end', alignItems: 'center', gap: 6 }}>
      <StyledText
        variant="body2"
        style={{ color: theme.gray300, alignContent: 'flex-end', fontSize: 12 }}
      >
        {description}
      </StyledText>
      <Button
        variant="primary"
        onPress={onPress}
        icon={SendIcon}
        iconColor={'white'}
        css={{
          width: '42px',
          height: '42px',
          borderRadius: '50px',
          padding: '11px',
        }}
        disabled={status === 'selected' ? false : true}
      />
    </StyledRow>
  );
};
