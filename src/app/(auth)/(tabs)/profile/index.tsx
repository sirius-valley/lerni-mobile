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

export default function Page() {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { data: profile, error, isLoading, isError } = useMeQuery();

  const handleLogout = () => dispatch(resetAllStates());

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
        {isLoading || !profile?.hasCompletedIntroduction ? (
          <SkeletonProfile />
        ) : (
          <StyledRow css={{ gap: 8 }}>
            <StyledBox>
              <Avatar
                size={94}
                borderRadius={97}
                uri={profile?.image ? profile.image : undefined}
              />
            </StyledBox>
            <StyledColumn css={{ gap: 4, justifyContent: 'center' }}>
              <StyledText css={{ color: theme.gray100 }} variant="h3">
                {profile?.name} {profile?.lastname}
              </StyledText>
              {profile?.career && (
                <StyledText css={{ color: theme.gray100 }} variant="body2">
                  {profile?.career}
                </StyledText>
              )}
              {profile?.profession && (
                <StyledText css={{ color: theme.gray100 }} variant="body2">
                  {profile?.profession}
                </StyledText>
              )}
              <StyledText css={{ color: theme.gray100 }} variant="body2">
                {profile?.city}
              </StyledText>
            </StyledColumn>
          </StyledRow>
        )}
      </StyledColumn>
    </StyledColumn>
  );
}
