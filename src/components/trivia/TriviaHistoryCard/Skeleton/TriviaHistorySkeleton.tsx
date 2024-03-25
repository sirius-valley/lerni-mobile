import React from 'react';
import Avatar from '../../../common/Avatar';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../../styled/styles';
import { useTheme } from 'styled-components/native';
import { rgba } from 'polished';
import Skeleton from '../../../common/Skeleton';

interface ParticipantProps {
  isOpponent: boolean;
}

export const TriviaHistorySkeleton = () => {
  const Participant = ({ isOpponent }: ParticipantProps) => {
    return (
      <StyledRow
        css={{
          flexDirection: isOpponent ? 'row-reverse' : 'row',
          justifyContent: isOpponent ? 'right' : 'left',
          alignItems: 'center',
          width: '40%',
          gap: 6,
        }}
      >
        <Skeleton
          css={{
            borderRadius: 35,
          }}
          height={50}
          width={50}
        />
        <Skeleton width={'50%'} height={12} />
      </StyledRow>
    );
  };

  const ResultComponent = () => {
    return (
      <StyledBox
        css={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          padding: '4px 8px',
        }}
      ></StyledBox>
    );
  };

  const theme = useTheme();
  return (
    <StyledBox
      css={{
        borderRadius: 6,
        padding: '12px 12px',
        gap: 6,
        backgroundColor: theme.primary700,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <StyledRow
        css={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Participant isOpponent={false} />
        <StyledColumn
          css={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <Skeleton width={40} height={15} />
          <Skeleton height={20} width={30} />
          <ResultComponent />
        </StyledColumn>
        <Participant isOpponent={true} />
      </StyledRow>
    </StyledBox>
  );
};
