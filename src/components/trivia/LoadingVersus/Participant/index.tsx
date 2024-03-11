import { useTheme } from 'styled-components/native';
import Avatar from '../../../common/Avatar';
import { StyledColumn, StyledText } from '../../../styled/styles';

interface ParticipantProps {
  image?: string;
  name: string;
  occupation: string;
}

export const Participant = ({ image, name, occupation }: ParticipantProps) => {
  const theme = useTheme();
  return (
    <StyledColumn css={{ justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      <Avatar size={106} borderRadius={50} uri={image} />
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
