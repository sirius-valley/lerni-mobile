import { useTheme } from 'styled-components/native';
import Avatar from '../../../common/Avatar';
import { StyledColumn, StyledText, StyledTextInterface } from '../../../styled/styles';
import { ViewStyle } from 'react-native';

interface ParticipantProps {
  image?: string;
  name: string;
  occupation: string;
  size?: number;
  textStyles?: StyledTextInterface;
  css?: ViewStyle;
}

export const Participant = ({ image, name, occupation, size, textStyles }: ParticipantProps) => {
  const theme = useTheme();
  return (
    <StyledColumn css={{ justifyContent: 'center', alignItems: 'center', gap: 8 }}>
      <Avatar size={size ?? 106} borderRadius={50} uri={image} />
      <StyledColumn css={{ alignItems: 'center' }}>
        <StyledText
          variant={textStyles?.variant ?? 'body2'}
          color="gray100"
          css={{ alignContent: 'center' }}
        >
          {name}
        </StyledText>
        <StyledText
          variant={textStyles?.variant ?? 'body2'}
          color="gray100"
          css={{ alignContent: 'center' }}
        >
          {occupation}
        </StyledText>
      </StyledColumn>
    </StyledColumn>
  );
};
