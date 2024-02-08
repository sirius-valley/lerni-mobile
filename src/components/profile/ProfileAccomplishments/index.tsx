import { useTheme } from 'styled-components/native';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { ScrollView } from 'react-native';
import { Avatar } from '../../common/Avatar';
import { borderRadius } from 'polished';

interface Accomplishment {
  image: string;
  title: string;
}

interface ProfileAccomplishmentsProps {
  accomplishments: Accomplishment[];
}

export const ProfileAccomplishments = ({ accomplishments }: ProfileAccomplishmentsProps) => {
  const theme = useTheme();
  return (
    <StyledColumn style={{ gap: 8 }}>
      <StyledText variant="h3" style={{ color: theme.gray100 }}>
        {'Logros'}
      </StyledText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginRight: -24 }}
        contentContainerStyle={{ paddingRight: 24 }}
      >
        <StyledRow style={{ gap: 8 }}>
          {accomplishments &&
            accomplishments.map((accomplishment, index) => (
              <StyledColumn key={index} style={{ alignItems: 'center', gap: 6 }}>
                <Avatar size={100} css={{ borderRadius: '100px' }} uri={accomplishment.image} />
                <StyledText variant="body2" style={{ color: theme.gray200 }}>
                  {accomplishment.title}
                </StyledText>
              </StyledColumn>
            ))}
        </StyledRow>
      </ScrollView>
    </StyledColumn>
  );
};
