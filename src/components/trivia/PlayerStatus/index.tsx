import { StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { Avatar } from '../../styled/Avatar';
import { User } from '../../../types';
import CheckIcon from '../../../../assets/icons/CheckIcon';
import MultiplyIcon from '../../../../assets/icons/MultiplyIcon';
import React from 'react';
import { useTheme } from 'styled-components';

type PlayerStatusProps = Pick<User, 'firstName' | 'lastName' | 'imgUrl'> & {
  points: { id: string; correct: boolean }[];
  side: 'left' | 'right';
};

const PlayerStatus = ({ firstName, lastName, imgUrl, points, side }: PlayerStatusProps) => {
  const theme = useTheme();
  return (
    <StyledColumn
      css={{
        gap: 16,
        padding: 16,
        width: 174,
        borderRadius: side === 'right' ? '0 12px 12px 0' : '12px 0 0 12px',
        backgroundColor: side === 'right' ? theme.primary700 : theme.primary650,
      }}
    >
      <StyledRow css={{ gap: 8, flexDirection: side === 'right' ? 'row-reverse' : 'row' }}>
        <Avatar uri={imgUrl} size={50} />
        <StyledColumn css={{ alignItems: 'center', justifyContent: 'center' }}>
          <StyledText variant={'body3'} css={{ color: theme.white }}>
            {firstName}
          </StyledText>
          <StyledText variant={'body3'} css={{ color: theme.white }}>
            {lastName}
          </StyledText>
        </StyledColumn>
      </StyledRow>
      <StyledRow
        css={{
          flexWrap: 'wrap',
          width: 130,
          gap: 8,
          flexDirection: side === 'right' ? 'row-reverse' : 'row',
        }}
      >
        {points.map((point, index) =>
          point.correct ? <CheckIcon size={16} /> : <MultiplyIcon size={16} />,
        )}
      </StyledRow>
    </StyledColumn>
  );
};

export default PlayerStatus;
