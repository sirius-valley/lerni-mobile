import React from 'react';
import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledText } from '../../styled/styles';
import HeartPill from '../../../../assets/icons/HeartPill';
import * as Progress from 'react-native-progress';

interface ProgramCardProps {
  id: string;
  title: string;
  imgUrl: string;
  status: 'in_progress' | 'completed' | 'not_started';
  progress?: number;
}

const ProgramCard = ({ id, title, imgUrl, status, progress }: ProgramCardProps) => {
  const theme = useTheme();
  return (
    <StyledColumn
      css={{
        width: 109,
        height: 145,
        gap: 6,
        alignItems: 'center',
      }}
    >
      <HeartPill status="completed" />
      <StyledText variant="body1" css={{ color: theme.gray100 }}>
        {title}
      </StyledText>

      <StyledBox css={{ width: '100%' }}>
        <Progress.Bar
          unfilledColor={theme.gray600}
          color={theme.primary400}
          height={5}
          progress={progress}
          width={null}
        />
      </StyledBox>
    </StyledColumn>
  );
};

export default ProgramCard;
