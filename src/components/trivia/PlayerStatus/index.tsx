import React from 'react';
import { useTheme } from 'styled-components';
import { BlueCheckIcon } from '../../../../assets/icons/BlueCheckIcon';
import { TriviaFailedIcon } from '../../../../assets/icons/TriviaFailedIcon';
import Avatar from '../../common/Avatar';
import { StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { StyledCircle } from './styles';
import { Dimensions } from 'react-native';

export type User = {
  firstName?: string;
  lastName?: string;
  imgUrl?: string;
  id?: string;
  // email: string;
  job?: string;
  studies?: string;
  // place: string;
};

type PlayerStatusProps = Pick<User, 'firstName' | 'lastName' | 'imgUrl'> & {
  points: { id: string; correct?: boolean }[];
  side: 'left' | 'right';
};
const PlayerStatus = ({
  firstName,
  lastName,
  imgUrl = undefined,
  points,
  side,
}: PlayerStatusProps) => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('screen').width;
  const baseSize = 176;
  const scaleFactor = screenWidth / 400;
  const adjustedSize = baseSize * scaleFactor;

  return (
    <StyledColumn
      css={{
        gap: 16,
        padding: side === 'left' ? '14px 0px 12px 16px' : '14px 16px 12px 0px',
        width: adjustedSize,
        borderRadius: side === 'right' ? '0 12px 12px 0' : '12px 0 0 12px',
        backgroundColor: side === 'right' ? theme.primary700 : theme.primary650,
        alignItems: side === 'left' ? 'flex-start' : 'flex-end',
      }}
    >
      <StyledRow css={{ gap: 8, flexDirection: side === 'right' ? 'row-reverse' : 'row' }}>
        <Avatar uri={undefined} size={50} />
        <StyledColumn
          css={{
            justifyContent: 'center',
            alignItems: side === 'left' ? 'flex-start' : 'flex-end',
          }}
        >
          <StyledText variant={'body3'} css={{ color: theme.gray100 }}>
            {firstName ?? 'Oponente'}
          </StyledText>
          <StyledText variant={'body3'} css={{ color: theme.gray100 }}>
            {lastName ?? 'al azar'}
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
        {points.map((point, idx) =>
          point.correct ? (
            <BlueCheckIcon size={15} color={theme.primary500} key={idx} />
          ) : point.correct === undefined ? (
            <StyledCircle css={{ width: 15, height: 15 }} key={idx} />
          ) : (
            <TriviaFailedIcon size={15} color={theme.red600} key={idx} />
          ),
        )}
      </StyledRow>
    </StyledColumn>
  );
};
export default PlayerStatus;
