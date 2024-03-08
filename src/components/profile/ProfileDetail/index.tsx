import { useTheme } from 'styled-components/native';
import Avatar from '../../common/Avatar';
import { StyledBox, StyledColumn, StyledRow, StyledText } from '../../styled/styles';
import { CareerIcon } from '../../../../assets/icons/CareerIcon';
import { ProfessionIcon } from '../../../../assets/icons/ProfessionIcon';
import { LocationIcon } from '../../../../assets/icons/LocationIcon';

interface ProfileDetailProps {
  image: string;
  name: string;
  lastname: string;
  career: string;
  profession: string;
  city: string;
}

export const ProfileDetail = ({
  image,
  name,
  lastname,
  career,
  profession,
  city,
}: ProfileDetailProps) => {
  const theme = useTheme();

  return (
    <StyledRow css={{ gap: 8, alignItems: 'center' }}>
      <StyledBox>
        <Avatar size={94} borderRadius={97} uri={image ? image : undefined} />
      </StyledBox>
      <StyledColumn css={{ gap: 4, justifyContent: 'center' }}>
        <StyledText css={{ color: theme.gray100 }} variant="h3">
          {name} {lastname}
        </StyledText>
        {profession && (
          <StyledRow style={{ gap: 4, alignItems: 'center' }}>
            <StyledBox
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
              }}
            >
              <ProfessionIcon size={24} />
            </StyledBox>
            <StyledText css={{ color: theme.gray100 }} variant="body2">
              {profession}
            </StyledText>
          </StyledRow>
        )}
        {career && (
          <StyledRow style={{ gap: 4, alignItems: 'center' }}>
            <StyledBox
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2,
              }}
            >
              <CareerIcon size={24} />
            </StyledBox>
            <StyledText css={{ color: theme.gray100 }} variant="body2">
              {career}
            </StyledText>
          </StyledRow>
        )}
        <StyledRow style={{ gap: 4, alignItems: 'center' }}>
          <StyledBox
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 2 }}
          >
            <LocationIcon size={24} />
          </StyledBox>
          <StyledText css={{ color: theme.gray100 }} variant="body2">
            {city}
          </StyledText>
        </StyledRow>
      </StyledColumn>
    </StyledRow>
  );
};
