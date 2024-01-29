import { useTheme } from 'styled-components/native';
import { StyledColumn, StyledText } from '../../styled/styles';

interface ErrorDisplayProps {
  Icon: React.FunctionComponent;
  Title: string;
  Content: () => JSX.Element;
  Footer: () => JSX.Element;
}

export const ErrorDisplay = ({ Icon, Title, Content, Footer }: ErrorDisplayProps) => {
  const theme = useTheme();
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
        {Title}
      </StyledText>
      <Content />
      <Footer />
    </StyledColumn>
  );
};
