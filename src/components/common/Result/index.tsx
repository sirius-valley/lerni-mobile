import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';

interface ResultProps {
  icon: React.FunctionComponent;
  title: string;
  content: () => JSX.Element;
  footer: () => JSX.Element;
}

export const Result = ({
  icon: Icon,
  title: Title,
  content: Content,
  footer: Footer,
}: ResultProps) => {
  const theme = useTheme();
  return (
    <StyledColumn
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        borderRadius: 8,
        backgroundColor: theme.primary800,
        padding: 24,
        paddingTop: 32,
        paddingBottom: 90,
        width: '100%',
      }}
    >
      <StyledColumn
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 16,
          height: '100%',
        }}
      >
        <StyledBox css={{ alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
          <Icon />
        </StyledBox>
        <StyledColumn style={{ gap: 16, justifyContent: 'center', alignItems: 'center' }}>
          <StyledText variant="h1" style={{ color: theme.white }}>
            {Title}
          </StyledText>
          <Content />
        </StyledColumn>
      </StyledColumn>
      <StyledColumn
        css={{
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <Footer />
      </StyledColumn>
    </StyledColumn>
  );
};
