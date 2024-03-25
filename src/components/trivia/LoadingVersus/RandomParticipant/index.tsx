import { useTheme } from 'styled-components/native';
import Avatar from '../../../common/Avatar';
import { StyledBox, StyledColumn, StyledText } from '../../../styled/styles';
import { ShuffleIcon } from '../../../../../assets/icons/ShuffleIcon';

interface RandomParticipantProps {
  name: string;
  occupation: string;
}

export const RandomParticipant = ({ name, occupation }: RandomParticipantProps) => {
  const theme = useTheme();
  return (
    <StyledColumn css={{ justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      <StyledBox
        css={{
          borderRadius: 100,
          border: '3px solid',
          borderColor: theme.primary400,
          backgroundColor: theme.primary700,
          width: 106,
          height: 106,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ShuffleIcon size={42} />
      </StyledBox>
      <StyledColumn css={{ alignItems: 'center' }}>
        <StyledText variant="body2" css={{ color: theme.gray100, alignContent: 'center' }}>
          {name}
        </StyledText>
        <StyledText variant="body2" css={{ color: theme.gray100, alignContent: 'center' }}>
          {occupation}
        </StyledText>
      </StyledColumn>
    </StyledColumn>
  );
};
