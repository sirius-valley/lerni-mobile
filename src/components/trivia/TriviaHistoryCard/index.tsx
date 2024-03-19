import React from 'react';
import Avatar from '../../common/Avatar';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { useTheme } from 'styled-components/native';
import { rgba } from 'polished';

interface TriviaHistoryCardProps {
  date: Date;
  user: {
    image: string;
    firstName: string;
    lastName: string;
    score: number;
  };
  opponent: {
    image: string;
    firstName: string;
    lastName: string;
    score: number;
  };
  id: string;
}

interface ParticipantProps {
  image: string;
  firstName: string;
  lastName: string;
  isOpponent: boolean;
}

interface ResultComponentProps {
  winner?: boolean;
}

export const TriviaHistoryCard = ({ date, user, opponent, id }: TriviaHistoryCardProps) => {
  const winner =
    user.score > opponent.score ? true : user.score < opponent.score ? false : undefined;

  const Participant = ({ image, firstName, lastName, isOpponent }: ParticipantProps) => {
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
        <Avatar
          uri={image}
          css={{
            opacity: isOpponent && winner ? 0.3 : !isOpponent && winner === false ? 0.3 : 1,
          }}
          size={50}
          borderRadius={35}
        />
        <StyledText
          ellipsizeMode="clip"
          variant="body4"
          style={{
            color:
              isOpponent && winner
                ? rgba(theme.white, 0.2)
                : !isOpponent && winner === false
                  ? rgba(theme.white, 0.2)
                  : theme.white,
            width: '50%',
          }}
        >{`${firstName} ${lastName}`}</StyledText>
      </StyledRow>
    );
  };

  const ResultComponent = ({ winner }: ResultComponentProps) => {
    return (
      <StyledBox
        css={{
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          padding: '4px 8px',
          backgroundColor: winner
            ? theme.primary650
            : winner === false
              ? rgba(theme.red500, 0.7)
              : theme.gray500,
        }}
      >
        <StyledText variant="body4" style={{ color: winner ? theme.primary200 : theme.white }}>
          {winner ? 'Ganaste' : winner === false ? 'Perdiste' : 'Empate'}
        </StyledText>
      </StyledBox>
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
        <Participant
          isOpponent={false}
          image={user.image}
          firstName={user.firstName}
          lastName={user.lastName}
        />
        <StyledColumn
          css={{
            justifyContent: 'center',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <StyledText variant="body4" style={{ color: theme.primary600 }}>
            {date.toLocaleDateString()}
          </StyledText>
          <StyledText
            variant="h4"
            css={{ color: theme.white }}
          >{`${user.score} - ${opponent.score}`}</StyledText>
          <ResultComponent winner={winner} />
        </StyledColumn>
        <Participant
          isOpponent={true}
          image={opponent.image}
          firstName={opponent.firstName}
          lastName={opponent.lastName}
        />
      </StyledRow>
    </StyledBox>
  );
};
