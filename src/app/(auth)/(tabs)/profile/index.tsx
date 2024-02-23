import {
  StyledBox,
  StyledColumn,
  StyledRow,
  StyledText,
} from '../../../../components/styled/styles';
import { useDispatch } from 'react-redux';
import { Avatar } from '../../../../components/common/Avatar';
import { useTheme } from 'styled-components';
import { LogoutIcon } from '../../../../../assets/icons/LogoutIcon';
import { Pressable } from 'react-native';
import { SkeletonProfile } from '../../../../components/common/Skeleton/SkeletonProfile';
import { useMeQuery } from '../../../../redux/service/student.service';
import { resetAllStates } from '../../../../redux/store';
import { ProfileDetail } from '../../../../components/profile/ProfileDetail';
import { ProfileRanking } from '../../../../components/profile/ProfileRanking';
import { ProfileAccomplishments } from '../../../../components/profile/ProfileAccomplishments';
import { mockedProfileAccomplishments } from '../../../../components/profile/utils';

export default function Page() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { data: profile, error, isLoading, isError } = useMeQuery();

  const handleLogout = () => dispatch(resetAllStates());
  const accomplishments = mockedProfileAccomplishments;
  return (
    <StyledColumn
      css={{
        width: '100%',
        height: '100%',
        paddingTop: 20,
      }}
    >
      <StyledColumn css={{ gap: 24 }}>
        <StyledRow
          css={{
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledText css={{ color: theme.gray100 }} variant="h1">
            Perfil
          </StyledText>
          <Pressable onPress={handleLogout}>
            <LogoutIcon color={theme.primary600} size={32} />
          </Pressable>
        </StyledRow>
        {isLoading || !profile?.hasCompletedIntroduction || !profile ? (
          <SkeletonProfile />
        ) : (
          <StyledColumn style={{ gap: 24 }}>
            <ProfileDetail
              image={profile.image}
              career={profile.career}
              city={profile.city}
              name={profile.name}
              lastname={profile.lastname}
              profession={profile.profession}
              id={profile.id}
              hasCompletedIntroduction={profile.hasCompletedIntroduction}
            />
            <ProfileRanking />
            <ProfileAccomplishments accomplishments={accomplishments} />
          </StyledColumn>
        )}
      </StyledColumn>
    </StyledColumn>
  );
}
