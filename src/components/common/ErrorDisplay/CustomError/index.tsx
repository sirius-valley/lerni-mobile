import { useTheme } from 'styled-components/native';
import { StyledColumn, StyledText } from '../../../styled/styles';
import Button from '../../../styled/Button';
import { useRouter } from 'expo-router';

interface CustomErrorProps {
  Icon: React.FunctionComponent;
  title: string;
  content: string;
  hasActionButton?: boolean;
}

const CustomError = ({ Icon, title, content, hasActionButton = true }: CustomErrorProps) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <StyledColumn
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        paddingHorizontal: 24,
      }}
    >
      <Icon />
      <StyledText variant="h2" style={{ color: theme.gray100 }}>
        {title}
      </StyledText>
      <StyledText variant="body1" style={{ color: theme.gray100, textAlign: 'center' }}>
        {content}
      </StyledText>
      {hasActionButton ? <Button onPress={() => router.push('explore')}>{'Volver'}</Button> : <></>}
    </StyledColumn>
  );
};

export default CustomError;
